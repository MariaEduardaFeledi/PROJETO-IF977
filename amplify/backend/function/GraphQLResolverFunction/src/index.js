/* Amplify Params - DO NOT EDIT
	API_GARNER_CATAGORYTABLE_ARN
	API_GARNER_CATAGORYTABLE_NAME
	API_GARNER_GRAPHQLAPIENDPOINTOUTPUT
	API_GARNER_GRAPHQLAPIIDOUTPUT
	API_GARNER_POOLTABLE_ARN
	API_GARNER_POOLTABLE_NAME
	API_GARNER_SAMPLETABLE_ARN
	API_GARNER_SAMPLETABLE_NAME
	API_GARNER_USERTABLE_ARN
	API_GARNER_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const region = process.env.REGION;
//const usertableName = process.env.API_GARNER_USERTABLE_NAME;
const pooltableName = process.env.API_GARNER_POOLTABLE_NAME;
const sampletableName = process.env.API_GARNER_SAMPLETABLE_NAME;
//const catagoryName = process.env.API_GARNER_CATAGORYTABLE_NAME;

const aws = require("aws-sdk");
var ddb = new aws.DynamoDB({ apiVersion: "2012-08-10", region: region });
const { v4: uuidv4 } = require("uuid");

async function CheckInSampleFunction(ctx) {
  /*{
  "type": "Mutation",
  "field": "checkInSample",
  "arguments": {
    "input": {"id": "9523ec85-a9bc-4cf4-aafe-39d672b55db7", "x":"x my g man", "y":"y YEE"}
    },
    "identity": {
        "username": "bobs_burgers"
    }
} */
  console.log(ctx.identity.username);

  const now = new Date().toISOString();
  const updateParams = {
    TableName: sampletableName,
    Key: {
      id: { S: ctx.arguments.id },
    },
    ExpressionAttributeValues: {
      ":y": { SS: ctx.arguments.input.y },
      ":ma": { S: now },
      //":mb": { S: ctx.identity.username },
      ":st": { S: "COMPLETED" },
    },
    UpdateExpression: "set modifiedAt = :ma, y = :y, labeledStatus = :st",
    //ConditionExpression: "modifiedBy = :mb",
    ReturnValues: "ALL_NEW",
  };

  try {
    const data = await ddb.updateItem(updateParams).promise();

    if (data.Attributes.poolID.S == null) {
      throw { message: "can't locate sample" };
    }

    console.log(data);

    return {
      poolID: data.Attributes.poolID.S,
      id: ctx.arguments.id,
      createdAt: data.Attributes.createdAt.S,
      x: data.Attributes.x.SS,
      y: data.Attributes.y.SS,
      labeledStatus: "COMPLETED",
      modifiedBy: ctx.identity.username,
      modifiedAt: now,
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

async function CheckOutSampleFunction(ctx) {
  /*{
  "type": "Query",
  "field": "checkOutSample",
  "arguments": {
    "id": "4f8237e1-637e-4f65-9d0c-64f211d52abb"
    },
    "identity": {
        "username": "bobs_burgers"
    }
  
} */
  const getParams = {
    TableName: sampletableName,
    IndexName: "byLabeled",
    ExpressionAttributeValues: {
      ":pid": { S: ctx.arguments.poolID },
      ":l": { S: "UNCOMPLETED" },
    },
    KeyConditionExpression: "poolID = :pid and labeledStatus = :l",
    ProjectionExpression: "id, x, y, createdAt",
    Limit: 1,
  };
  try {
    const data = await ddb.query(getParams).promise();
    const now = new Date().toISOString();

    if (data.Items == null) {
      throw { message: "no data fits criteria" };
    }

    if (data.Items.length === 0) {
      throw { message: "no data fits criteria" };
    }

    const updateParams = {
      TableName: sampletableName,
      Key: {
        id: data.Items[0].id,
      },
      ExpressionAttributeValues: {
        ":at": { S: now },
        ":by": { S: ctx.identity.username },
        ":sta": { S: "CHECKEDOUT" },
      },
      UpdateExpression:
        "set modifiedAt = :at, modifiedBy =:by, labeledStatus =:sta",
      ReturnValues: "NONE",
    };
    await ddb.updateItem(updateParams).promise();
    return {
      poolID: ctx.arguments.poolID,
      id: data.Items[0].id.S,
      createdAt: data.Items[0].createdAt.S,
      x: data.Items[0].x.SS,
      y: data.Items[0].y.SS,
      labeledStatus: "CHECKEDOUT",
      modifiedAt: now,
      modifiedBy: ctx.identity.username,
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

async function PutSampleFunction(ctx) {
  /* TEST EVENT
  {
    "type": "Mutation",
    "field": "putSample",
    "arguments": {
      "key": "a390b193-cbd6-4524-8716-64fc96a8a367",
      "input": {
        "x": "x",
        "y": "y"
      }
    }
  }
  */

  try {
    const getParams = {
      TableName: pooltableName,
      IndexName: "byKey",
      ExpressionAttributeValues: { ":k": { S: ctx.arguments.key } },
      KeyConditionExpression: "privateKey = :k",
      ProjectionExpression: "id",
      Limit: 1,
    };

    const data = await ddb.query(getParams).promise();

    if (data.Items == null) {
      throw { message: "pool key not valid" };
    }

    if (data.Items.length === 0) {
      throw { message: "pool key not valid" };
    }

    let putParams = {
      Item: {
        poolID: { S: data.Items[0].id.S },
        __typename: { S: "sample" },
        id: { S: uuidv4() },
        createdAt: { S: new Date().toISOString() },
        x: { SS: ctx.arguments.input.x },
        y: { SS: ctx.arguments.input.y },
        labeledStatus: { S: "UNCOMPLETED" },
      },
      TableName: sampletableName,
    };

    await ddb.putItem(putParams).promise();
    return {
      poolID: putParams.Item.poolID.S,
      id: putParams.Item.id.S,
      createdAt: putParams.Item.createdAt.S,
      x: putParams.Item.x.SS,
      y: putParams.Item.y.SS,
      labeledStatus: "UNCOMPLETED",
    };
  } catch (err) {
    throw new Error(err.message);
  }
}

const resolvers = {
  Query: {
    echo: (ctx) => {
      return ctx;
    },
    checkOutSample: (ctx) => {
      return CheckOutSampleFunction(ctx);
    },
  },
  Mutation: {
    checkInSample: (ctx) => {
      return CheckInSampleFunction(ctx);
    },
    putSample: (ctx) => {
      return PutSampleFunction(ctx);
    },
  },
};

// event
// {
//   "typeName": "Query", /* Filled dynamically based on @function usage location */
//   "fieldName": "me", /* Filled dynamically based on @function usage location */
//   "arguments": { /* GraphQL field arguments via $ctx.arguments */ },
//   "identity": { /* AppSync identity object via $ctx.identity */ },
//   "source": { /* The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */ },
//   "request": { /* AppSync request object. Contains things like headers. */ },
//   "prev": { /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */ },
// }
exports.handler = async (event) => {
  const typeHandler = resolvers[event.type];
  if (typeHandler) {
    const resolver = typeHandler[event.field];
    if (resolver) {
      return await resolver(event);
    }
  }
  throw new Error("Resolver not found.");
};

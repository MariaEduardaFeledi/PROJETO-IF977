/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      trust
      balance
      posts {
        items {
          id
          title
          description
          tnc
          image
          requiredtrust
          status
          catagoryID
          createdAt
          updatedOn
          owner
          createdOn
        }
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      trust
      balance
      posts {
        items {
          id
          title
          description
          tnc
          image
          requiredtrust
          status
          catagoryID
          createdAt
          updatedOn
          owner
          createdOn
        }
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      trust
      balance
      posts {
        items {
          id
          title
          description
          tnc
          image
          requiredtrust
          status
          catagoryID
          createdAt
          updatedOn
          owner
          createdOn
        }
        nextToken
      }
      createdOn
      updatedOn
    }
  }
`;
export const createCatagory = /* GraphQL */ `
  mutation CreateCatagory(
    $input: CreateCatagoryInput!
    $condition: ModelCatagoryConditionInput
  ) {
    createCatagory(input: $input, condition: $condition) {
      id
      title
      catagory
      xtype
      ytype
      status
      createdOn
      updatedOn
    }
  }
`;
export const updateCatagory = /* GraphQL */ `
  mutation UpdateCatagory(
    $input: UpdateCatagoryInput!
    $condition: ModelCatagoryConditionInput
  ) {
    updateCatagory(input: $input, condition: $condition) {
      id
      title
      catagory
      xtype
      ytype
      status
      createdOn
      updatedOn
    }
  }
`;
export const deleteCatagory = /* GraphQL */ `
  mutation DeleteCatagory(
    $input: DeleteCatagoryInput!
    $condition: ModelCatagoryConditionInput
  ) {
    deleteCatagory(input: $input, condition: $condition) {
      id
      title
      catagory
      xtype
      ytype
      status
      createdOn
      updatedOn
    }
  }
`;
export const createPool = /* GraphQL */ `
  mutation CreatePool(
    $input: CreatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    createPool(input: $input, condition: $condition) {
      id
      title
      description
      tnc
      image
      requiredtrust
      status
      catagoryID
      catagory {
        id
        title
        catagory
        xtype
        ytype
        status
        createdOn
        updatedOn
      }
      samples {
        items {
          poolID
          id
          x
          y
          labeledby
          verififiedby
          modifiedOn
          createdOn
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedOn
      owner
      createdOn
    }
  }
`;
export const updatePool = /* GraphQL */ `
  mutation UpdatePool(
    $input: UpdatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    updatePool(input: $input, condition: $condition) {
      id
      title
      description
      tnc
      image
      requiredtrust
      status
      catagoryID
      catagory {
        id
        title
        catagory
        xtype
        ytype
        status
        createdOn
        updatedOn
      }
      samples {
        items {
          poolID
          id
          x
          y
          labeledby
          verififiedby
          modifiedOn
          createdOn
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedOn
      owner
      createdOn
    }
  }
`;
export const deletePool = /* GraphQL */ `
  mutation DeletePool(
    $input: DeletePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    deletePool(input: $input, condition: $condition) {
      id
      title
      description
      tnc
      image
      requiredtrust
      status
      catagoryID
      catagory {
        id
        title
        catagory
        xtype
        ytype
        status
        createdOn
        updatedOn
      }
      samples {
        items {
          poolID
          id
          x
          y
          labeledby
          verififiedby
          modifiedOn
          createdOn
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedOn
      owner
      createdOn
    }
  }
`;
export const createSample = /* GraphQL */ `
  mutation CreateSample(
    $input: CreateSampleInput!
    $condition: ModelsampleConditionInput
  ) {
    createSample(input: $input, condition: $condition) {
      poolID
      id
      x
      y
      labeledby
      verififiedby
      modifiedOn
      createdOn
      updatedAt
    }
  }
`;
export const updateSample = /* GraphQL */ `
  mutation UpdateSample(
    $input: UpdateSampleInput!
    $condition: ModelsampleConditionInput
  ) {
    updateSample(input: $input, condition: $condition) {
      poolID
      id
      x
      y
      labeledby
      verififiedby
      modifiedOn
      createdOn
      updatedAt
    }
  }
`;
export const deleteSample = /* GraphQL */ `
  mutation DeleteSample(
    $input: DeleteSampleInput!
    $condition: ModelsampleConditionInput
  ) {
    deleteSample(input: $input, condition: $condition) {
      poolID
      id
      x
      y
      labeledby
      verififiedby
      modifiedOn
      createdOn
      updatedAt
    }
  }
`;

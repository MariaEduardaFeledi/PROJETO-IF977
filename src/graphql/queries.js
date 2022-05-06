/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        trust
        balance
        posts {
          nextToken
        }
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const getCatagory = /* GraphQL */ `
  query GetCatagory($id: ID!) {
    getCatagory(id: $id) {
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
export const listCatagorys = /* GraphQL */ `
  query ListCatagorys(
    $filter: ModelCatagoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCatagorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        catagory
        xtype
        ytype
        status
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const getPool = /* GraphQL */ `
  query GetPool($id: ID!) {
    getPool(id: $id) {
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
export const listPools = /* GraphQL */ `
  query ListPools(
    $filter: ModelPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          nextToken
        }
        createdAt
        updatedOn
        owner
        createdOn
      }
      nextToken
    }
  }
`;
export const getSample = /* GraphQL */ `
  query GetSample($id: ID!) {
    getSample(id: $id) {
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
export const listSamples = /* GraphQL */ `
  query ListSamples(
    $filter: ModelsampleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSamples(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const poolssByOwner = /* GraphQL */ `
  query PoolssByOwner(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelPoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    poolssByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          nextToken
        }
        createdAt
        updatedOn
        owner
        createdOn
      }
      nextToken
    }
  }
`;

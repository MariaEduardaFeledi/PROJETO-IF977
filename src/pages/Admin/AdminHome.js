import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { FaPlus } from "react-icons/fa";
import CatagoryForm from "./CatagoryForm";
import DataTypeForm from "./DataTypeForm";
import "./../ManagePools/ManagePools.css";
import "./Admin.css";

const listCatagorys = /* GraphQL */ `
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
        xtypeID
        xtype {
          id
          data
          createdAt
          updatedAt
        }
        ytypeID
        ytype {
          id
          data
          createdAt
          updatedAt
        }
        status
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;

const createCatagory = /* GraphQL */ `
  mutation CreateCatagory(
    $input: CreateCatagoryInput!
    $condition: ModelCatagoryConditionInput
  ) {
    createCatagory(input: $input, condition: $condition) {
      id
      title
      catagory
      xtypeID
      ytypeID
      status
      createdOn
      updatedOn
    }
  }
`;

const listDataTypes = /* GraphQL */ `
  query ListDataTypes(
    $filter: ModelDataTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        data
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

const createDataType = /* GraphQL */ `
  mutation CreateDataType(
    $input: CreateDataTypeInput!
    $condition: ModelDataTypeConditionInput
  ) {
    createDataType(input: $input, condition: $condition) {
      id
      data
      createdAt
      updatedAt
    }
  }
`;

class ManagePools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catagories: [],
      dataTypes: [],
    };
    this.GetDataTypes = this.GetDataTypes.bind(this);
    this.GetCatagories = this.GetCatagories.bind(this);
    this.CreateCatagory = this.CreateCatagory.bind(this);
  }

  GetCatagories() {
    API.graphql(graphqlOperation(listCatagorys))

      .then((val) => {
        this.setState({ catagories: val.data.listCatagorys.items });
        console.log(val.data.listCatagorys.items);
      })
      .catch((err) => console.log(err));
  }

  GetDataTypes() {
    API.graphql(graphqlOperation(listDataTypes))

      .then((val) => {
        this.setState({ dataTypes: val.data.listDataTypes.items });
        console.log(val.data.listDataTypes.items);
      })
      .catch((err) => console.log(err));
  }

  CreateCatagory() {
    API.graphql(
      graphqlOperation(createCatagory, {
        input: {
          title: "unititled",
          catagory: "catagory",
          xtypeID: "e8543ba3-def8-442e-b71c-97e511abed60",
          ytypeID: "e8543ba3-def8-442e-b71c-97e511abed60",
          status: "UNPUBLISHED",
        },
      })
    )

      .then(() => this.GetCatagories())
      .catch((err) => console.log(err));
  }

  CreateDataType() {
    API.graphql(
      graphqlOperation(createDataType, {
        input: {
          data: "String",
        },
      })
    )

      .then(() => this.GetDataTypes())
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.GetCatagories();
    this.GetDataTypes();
  }

  render() {
    return (
      <div>
        <div className="cards__screen">
          <ul className="cards__manager">
            {this.state.catagories.map((item, key) => (
              <CatagoryForm
                key={key}
                item={item}
                datatypes={this.state.dataTypes}
              />
            ))}
            <li className="add-pool-li">
              <button
                className="add-pool-button"
                onClick={() => {
                  this.CreateCatagory();
                }}
              >
                <FaPlus className="add-pool-icon" />
              </button>
            </li>
          </ul>
          <hr />
          <ul className="cards__manager">
            {this.state.dataTypes.map((item, key) => (
              <DataTypeForm key={key} item={item} />
            ))}
            <li className="add-pool-li">
              <button
                className="add-pool-button"
                onClick={() => {
                  this.CreateDataType();
                }}
              >
                <FaPlus className="add-pool-icon" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ManagePools;

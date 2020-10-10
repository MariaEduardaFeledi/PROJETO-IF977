import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { FaPlus } from "react-icons/fa";
import CatagoryForm from "./CatagoryForm";
import "./../ManagePools/ManagePools.css";
import "./Admin.css";

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

class ManagePools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
    };
    this.GetPools = this.GetCatagories.bind(this);
    this.CreateCatagory = this.CreateCatagory.bind(this);
  }

  GetCatagories() {
    API.graphql(graphqlOperation(listCatagorys))

      .then((val) => {
        this.setState({ result: val.data.listCatagorys.items });
        console.log(val.data.listCatagorys.items);
      })
      .catch((err) => console.log(err));
  }

  CreateCatagory() {
    API.graphql(
      graphqlOperation(createCatagory, {
        input: {
          title: "unititled catagory",
          catagory: "catagory",
          xtype: "no type",
          ytype: "no type",
          status: "UNPUBLISHED",
        },
      })
    )

      .then(() => this.GetCatagories())
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.GetCatagories();
  }

  render() {
    return (
      <div>
        <div className="cards__screen">
          <ul className="cards__manager">
            {this.state.result.map((item, key) => (
              <CatagoryForm key={key} item={item} />
            ))}
            <li className="add-pool-li">
              <button
                className="add-pool-button"
                onClick={() => {
                  console.log("ee");
                  this.CreateCatagory();
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

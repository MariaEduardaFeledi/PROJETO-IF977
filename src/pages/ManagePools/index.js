import React, { Component } from "react";
import ImageCardItem from "./../../components/ImageCardItem";
import "./ManagePools.css";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";

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
        catagory {
          id
          title
          catagory
          createdOn
          updatedOn
        }
        samples {
          nextToken
        }
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;

class ManagePools extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [],
    };
    this.GetPools = this.GetPools.bind(this);
  }

  GetPools() {
    API.graphql(graphqlOperation(listPools))

      .then((val) => {
        this.setState({ result: val.data.listPools.items });
        console.log(val.data.listPools.items);
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.GetPools();
  }

  render() {
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="cards__screen">
            <ul className="cards__manager">
              {this.state.result.map((item, key) => (
                <ImageCardItem
                  src={item.image}
                  text={item.title}
                  label="Video comparison"
                  path="/services"
                  key={key}
                />
              ))}
              <li className="add-pool-li">
                <Link to="/create-pool" className="btn-link">
                  <button className="add-pool-button">
                    <FaPlus className="add-pool-icon" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </IconContext.Provider>
      </>
    );
  }
}

export default ManagePools;

//flex wrap
//flex wrap wrap

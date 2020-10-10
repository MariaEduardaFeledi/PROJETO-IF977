import React, { Component } from "react";
import ImageCardItem from "./../../components/ImageCardItem";
import "./ManagePools.css";
import { FaPlus, FaHandPointRight } from "react-icons/fa";
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
        image
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
        <div className="cards__screen">
          <ul className="cards__manager">
            {this.state.result.map((item, key) => (
              <ImageCardItem
                src={item.image}
                text={item.title}
                label="Video comparison"
                path={"/admin/pool/".concat(item.id)}
                key={key}
              />
            ))}
            {this.state.result.length === 0 && (
              <div className="no_pools_div">
                <h3 className="empty_text">
                  Welcome! Feel free to start creating a new data pool, press
                  the big plus button.
                </h3>
                <FaHandPointRight className="hand-right-icon" />
              </div>
            )}
            <li className="add-pool-li">
              <Link to="/admin/create-pool" className="btn-link">
                <button className="add-pool-button">
                  <FaPlus className="add-pool-icon" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default ManagePools;

//flex wrap
//flex wrap wrap

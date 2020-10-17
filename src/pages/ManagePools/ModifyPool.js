import React, { Component } from "react";
import "./ManagePools.css";
import HeroSection from "../../components/HeroSection";
import { homeObjOne } from "./../NotFound/Data.js";
import { API, graphqlOperation } from "aws-amplify";
import ChangeAppearance from "./appearance";
import { Button } from "./../../components/Button";

const getPool = /* GraphQL */ `
  query GetPool($id: ID!) {
    getPool(id: $id) {
      id
      title
      description
      tnc
      image {
        bucket
        region
        key
      }
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
        owner
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

class ModifyPool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.poolId || "",
      fetch: false,
      result: [],
      image: "",
    };
    this.GetPool = this.GetPool.bind(this);
  }

  GetPool() {
    const { id } = this.state;
    API.graphql(graphqlOperation(getPool, { id: id }))

      .then((val) => {
        if (val.data.getPool !== null) {
          this.setState({ result: val.data.getPool, fetch: true });
        } else {
          this.setState({ fetch: false });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ fetch: false });
      });
  }

  componentDidMount() {
    this.GetPool();
  }
  render() {
    if (this.state.result === [] && this.state.fetch === true) {
      return <></>;
    } else if (this.state.fetch === false) {
      return <HeroSection {...homeObjOne} />;
    }
    return (
      <div className="pool-page-container">
        <div className="pool-side-nav">
          <div className="pool-side-nav-list">
            <h3 className="pool-manage-menu-item">Manage</h3>
            <hr className="pool-manage-menu-hr" />
            <h3 className="pool-manage-menu-item">Back-end</h3>
            <hr className="pool-manage-menu-hr" />
            <h3 className="pool-manage-menu-item">Statistics</h3>
            <hr className="pool-manage-menu-hr" />
            <h3 className="pool-manage-menu-item">Billing</h3>
            <hr className="pool-manage-menu-hr" />
            <h3 className="pool-manage-menu-item">Export data</h3>
            <hr className="pool-manage-menu-hr" />
            <Button Color="#f1f3f6" type="submit" buttonSize="btn--mobile">
              Publish
            </Button>
          </div>
        </div>
        <ChangeAppearance result={this.state.result} />
      </div>
    );
  }
}

export default ModifyPool;

//flex wrap
//flex wrap wrap
//this.props.match.params.email

import React, { Component } from "react";
import "./ManagePools.css";
import HeroSection from "../../components/HeroSection";
import { homeObjOne } from "./../NotFound/Data.js";
import { API, graphqlOperation } from "aws-amplify";
import ChangeAppearance from "./Appearance.js";
import ChangeBackEnd from "./BackEnd.js";
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
      createdAt
      updatedAt
      privateKey
      owner
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
      content: "backend",
    };
    this.GetPool = this.GetPool.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  changeContent(val) {
    this.setState({ content: val });
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
            <button
              className="pool-manage-menu-item"
              onClick={() => this.changeContent("manage")}
            >
              Appearance
            </button>
            <hr className="pool-manage-menu-hr" />
            <button
              className="pool-manage-menu-item"
              onClick={() => this.changeContent("backend")}
            >
              Back-end
            </button>
            <hr className="pool-manage-menu-hr" />
            <button
              className="pool-manage-menu-item"
              onClick={() => this.changeContent("statistics")}
            >
              Statistics
            </button>
            <hr className="pool-manage-menu-hr" />
            <button
              className="pool-manage-menu-item"
              onClick={() => this.changeContent("billing")}
            >
              Billing
            </button>
            <hr className="pool-manage-menu-hr" />
            <button
              className="pool-manage-menu-item"
              onClick={() => this.changeContent("exportdata")}
            >
              Export data
            </button>
            <hr className="pool-manage-menu-hr" />
            <Button type="submit" buttonSize="btn--mobile" Glow="orange">
              Publish
            </Button>
          </div>
        </div>
        {this.state.content === "manage" && (
          <ChangeAppearance result={this.state.result} />
        )}
        {this.state.content === "backend" && (
          <ChangeBackEnd result={this.state.result} />
        )}
      </div>
    );
  }
}

export default ModifyPool;

//flex wrap
//flex wrap wrap
//this.props.match.params.email

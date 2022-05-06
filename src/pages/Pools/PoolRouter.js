import React, { Component } from "react";
import "./ManagePools.css";
import HeroSection from "../../components/HeroSection";
import { homeObjOne } from "../NotFound/Data.js";
import { API, graphqlOperation } from "aws-amplify";
import ChangeAppearance from "./manage/ManageVisual";
import ChangeBackEnd from "./manage/ManageBackEnd";
import { Button } from "../../components/Button";
import { Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import NotFound from "../NotFound/NotFound";

import Test from "./manage/test";

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
        xtypeID
        xtype {
          data
        }
        ytypeID
        ytype {
          data
        }
        status
      }
      createdAt
      updatedAt
      privateKey
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
            <Link to={`${this.props.match.url}/appearance`}>Appearance</Link>
            <hr className="pool-manage-menu-hr" />
            <Link to={`${this.props.match.url}/backend`}>Back end</Link>
            <hr className="pool-manage-menu-hr" />
            <Link to={`${this.props.match.url}/statistics`}>Statistics</Link>
            <hr className="pool-manage-menu-hr" />
            <Link to={`${this.props.match.url}/billing`}>Billing</Link>
            <hr className="pool-manage-menu-hr" />
            <Link to={`${this.props.match.url}/export-data`}>Export Data</Link>
            <hr className="pool-manage-menu-hr" />
            <Button type="submit" buttonSize="btn--mobile" Glow="orange">
              Publish
            </Button>
          </div>
        </div>

        <ScrollToTop>
          <Switch>
            <Route
              exact
              path={`${this.props.match.url}/appearance`}
              component={() => <ChangeAppearance result={this.state.result} />}
            />
            <Route
              exact
              path={`${this.props.match.url}/backend`}
              component={() => <ChangeBackEnd result={this.state.result} />}
            />
            <Route
              exact
              path={`${this.props.match.url}/statistics`}
              component={() => <ChangeBackEnd result={this.state.result} />}
            />
            <Route
              exact
              path={`${this.props.match.url}/billing`}
              component={() => <ChangeBackEnd result={this.state.result} />}
            />
            <Route
              exact
              path={`${this.props.match.url}/export-data`}
              component={() => <ChangeBackEnd result={this.state.result} />}
            />
            <Route
              exact
              path={`${this.props.match.url}/test`}
              component={() => <Test result={this.state.result} />}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </ScrollToTop>
      </div>
    );
  }
}

export default ModifyPool;

//flex wrap
//flex wrap wrap
//this.props.match.params.email

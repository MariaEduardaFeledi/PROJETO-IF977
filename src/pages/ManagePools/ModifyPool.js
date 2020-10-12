import React, { Component } from "react";
import "./ManagePools.css";
import HeroSection from "../../components/HeroSection";
import { homeObjOne } from "./../NotFound/Data.js";
import { API, graphqlOperation } from "aws-amplify";

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
    };
    this.GetPool = this.GetPool.bind(this);
  }

  GetPool() {
    const { id } = this.state;
    console.log(id);
    API.graphql(graphqlOperation(getPool, { id: id }))

      .then((val) => {
        if (val.data.getPool !== null) {
          this.setState({ result: val.data.getPool, fetch: true });
          console.log(val.data.getPool);
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
      <div>
        <div className="side_nav">
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </div>
      </div>
    );
  }
}

export default ModifyPool;

//flex wrap
//flex wrap wrap
//this.props.match.params.email

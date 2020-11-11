import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";

const onSampleCompleted = /* GraphQL */ `
  subscription OnSampleCompleted($poolID: String) {
    onSampleCompleted(poolID: $poolID) {
      poolID
      id
      x
      y
      modifiedBy
      modifiedAt
      labeledStatus
      createdAt
      updatedAt
    }
  }
`;

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      subscription: {},
    };
    this.listen = this.listen.bind(this);
  }

  listen() {
    const subscription = API.graphql(
      graphqlOperation(onSampleCompleted)
    ).subscribe({
      next: (data) => console.log(data),
    });
    this.setState({ subscription: subscription });
  }

  componentDidMount() {
    this.listen();
  }

  render() {
    return <div>test</div>;
  }
}

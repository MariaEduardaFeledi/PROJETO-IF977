import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";

export const onSampleCompleted = /* GraphQL */ `
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
    }
  }
`;

const putSample = /* GraphQL */ `
  mutation PutSample($key: String!, $input: sampleXY!) {
    putSample(key: $key, input: $input) {
      poolID
      id
      x
      y
      modifiedBy
      modifiedAt
      labeledStatus
      createdAt
    }
  }
`;

const checkInSample = /* GraphQL */ `
  mutation CheckInSample($id: String!, $input: sampleY!) {
    checkInSample(id: $id, input: $input) {
      poolID
      id
      x
      y
      modifiedBy
      modifiedAt
      labeledStatus
      createdAt
    }
  }
`;

const checkOutSample = /* GraphQL */ `
  query CheckOutSample($poolID: String!) {
    checkOutSample(poolID: $poolID) {
      poolID
      id
      x
      y
      modifiedBy
      modifiedAt
      labeledStatus
      createdAt
    }
  }
`;

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      subscription: {},
      key: "",
      x: "",
      y: "",
      id: "",
      poolID: "",
    };
    this.listen = this.listen.bind(this);
    this.putSample = this.putSample.bind(this);
    this.checkOutSample = this.checkOutSample.bind(this);
    this.checkInSample = this.checkInSample.bind(this);
  }

  putSample() {
    const { key, x, y } = this.state;
    API.graphql(
      graphqlOperation(putSample, { key: key, input: { x: x, y: y } })
    )
      .then((val) => console.log(val))
      .catch((err) => console.log(err));
  }

  checkOutSample() {
    const { poolID } = this.state;
    API.graphql(graphqlOperation(checkOutSample, { poolID: poolID }))
      .then((val) => console.log(val))
      .catch((err) => console.log(err));
  }

  checkInSample() {
    const { id, y } = this.state;
    API.graphql(graphqlOperation(checkInSample, { id: id, input: { y: y } }))
      .then((val) => console.log(val))
      .catch((err) => console.log(err));
  }

  listen() {
    const subscription = API.graphql(
      graphqlOperation(onSampleCompleted, {
        poolID: "6ce54ac7-2761-4916-971c-c6286ffde71e",
      })
    ).subscribe({
      next: (data) => {
        console.log("subscription triggered");
        console.log(data);
      },
    });
    this.setState({ subscription: subscription });
  }

  onKeyChange(event) {
    this.setState({ key: event.target.value });
  }

  onXChange(event) {
    this.setState({ x: event.target.value });
  }

  onYChange(event) {
    this.setState({ y: event.target.value });
  }

  onIDChange(event) {
    this.setState({ id: event.target.value });
  }

  onPoolIDChange(event) {
    this.setState({ poolID: event.target.value });
  }

  componentDidMount() {
    this.listen();
  }

  render() {
    return (
      <div>
        <h3 className="form-text">Sample Testing</h3>
        <button onClick={() => this.putSample()}>put sample</button>
        <button onClick={() => this.checkOutSample()}>check out sample</button>
        <button onClick={() => this.checkInSample()}>check in sample</button>
        <h3 className="form-text">Key</h3>
        <input
          className="contact-email-input"
          id="key"
          type="text"
          //defaultValue={this.state.title}
          onChange={this.onKeyChange.bind(this)}
        />
        <h3 className="form-text">X</h3>
        <input
          className="contact-email-input"
          id="x"
          type="text"
          //defaultValue={this.state.title}
          onChange={this.onXChange.bind(this)}
        />
        <h3 className="form-text">Y</h3>
        <input
          className="contact-email-input"
          id="y"
          type="text"
          //defaultValue={this.state.title}
          onChange={this.onYChange.bind(this)}
        />
        <h3 className="form-text">ID</h3>
        <input
          className="contact-email-input"
          id="id"
          type="text"
          //defaultValue={this.state.title}
          onChange={this.onIDChange.bind(this)}
        />
        <h3 className="form-text">PoolID</h3>
        <input
          className="contact-email-input"
          id="poolid"
          type="text"
          //defaultValue={this.state.title}
          onChange={this.onPoolIDChange.bind(this)}
        />
      </div>
    );
  }
}

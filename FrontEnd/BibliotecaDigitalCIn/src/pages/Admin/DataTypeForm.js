import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Button } from "../../components/Button";
import "./Admin.css";

const updateDataType = /* GraphQL */ `
  mutation UpdateDataType(
    $input: UpdateDataTypeInput!
    $condition: ModelDataTypeConditionInput
  ) {
    updateDataType(input: $input, condition: $condition) {
      id
      data
      createdAt
      updatedAt
    }
  }
`;

export default class DataTypeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
      data: this.props.item.data,
    };
    this.PushDataTypeUpdate = this.PushDataTypeUpdate.bind(this);
  }

  PushDataTypeUpdate(e) {
    e.preventDefault();

    const { id, data } = this.state;
    API.graphql(
      graphqlOperation(updateDataType, {
        input: {
          id: id,
          data: data,
        },
      })
    )
      .then((val) => {
        console.log(val);
        this.setState({ error: "", changed: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err.errors[0].message, changed: true });
      });
  }

  onDataChange(event) {
    this.setState({ data: event.target.value, changed: true });
  }

  render() {
    return (
      <li className="catagory_input_form">
        {this.state.changed && (
          <p style={{ color: "#ED4C67" }}>Unsaved Changes!</p>
        )}
        <form onSubmit={this.PushDataTypeUpdate}>
          <h3 className="form-text">Data type</h3>
          <input
            className="contact-email-input"
            id="data"
            type="text"
            defaultValue={this.state.data}
            onChange={this.onDataChange.bind(this)}
          />
          <Button type="submit" Color="#f1f3f6">
            Save Changes
          </Button>
          <p style={{ color: "#ED4C67" }}>{this.state.error}</p>
        </form>
      </li>
    );
  }
}

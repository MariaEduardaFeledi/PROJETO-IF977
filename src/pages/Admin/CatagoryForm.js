import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Button } from "./../../components/Button";
import "./../ManagePools/ManagePools.css";
import "./Admin.css";

const updateCatagory = /* GraphQL */ `
  mutation UpdateCatagory(
    $input: UpdateCatagoryInput!
    $condition: ModelCatagoryConditionInput
  ) {
    updateCatagory(input: $input, condition: $condition) {
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

export default class CatagoryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.item.id,
      title: this.props.item.title,
      catagory: this.props.item.catagory,
      xtype: this.props.item.xtype,
      ytype: this.props.item.ytype,
      status: this.props.item.status,
      changed: false,
      error: "",
    };
    this.PushCatagoryUpdate = this.PushCatagoryUpdate.bind(this);
  }

  PushCatagoryUpdate(e) {
    e.preventDefault();

    const { id, title, catagory, xtype, ytype, status } = this.state;
    console.log(title);
    API.graphql(
      graphqlOperation(updateCatagory, {
        input: {
          id: id,
          title: title,
          catagory: catagory,
          xtype: xtype,
          ytype: ytype,
          status: status,
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

  onTitleChange(event) {
    this.setState({ title: event.target.value, changed: true });
  }

  onCatagoryChange(event) {
    this.setState({ catagory: event.target.value, changed: true });
  }

  onXTypeChange(event) {
    this.setState({ xtype: event.target.value, changed: true });
  }

  onYTypeChange(event) {
    this.setState({ ytype: event.target.value, changed: true });
  }

  onStatusChange(event) {
    this.setState({ status: event.target.value, changed: true });
  }

  render() {
    return (
      <li className="catagory_input_form">
        {this.state.changed && (
          <p style={{ color: "#ED4C67" }}>Unsaved Changes!</p>
        )}
        <form onSubmit={this.PushCatagoryUpdate}>
          <div className="form-bottom-content">
            <h3 className="form-label">{this.state.title}</h3>
          </div>
          <h3 className="form-text">Catagory title</h3>
          <input
            className="contact-email-input"
            id="title"
            type="text"
            defaultValue={this.state.title}
            onChange={this.onTitleChange.bind(this)}
          />
          <h3 className="form-text">Catagory</h3>
          <input
            className="contact-email-input"
            id="catagory"
            type="text"
            defaultValue={this.state.catagory}
            onChange={this.onCatagoryChange.bind(this)}
          />
          <h3 className="form-text">X type</h3>
          <input
            className="contact-email-input"
            id="xtype"
            type="text"
            defaultValue={this.state.xtype}
            onChange={this.onXTypeChange.bind(this)}
          />
          <h3 className="form-text">Y type</h3>
          <input
            className="contact-email-input"
            id="ytype"
            type="text"
            defaultValue={this.state.xtype}
            onChange={this.onYTypeChange.bind(this)}
          />
          <h3 className="form-text">Status</h3>
          <input
            className="contact-email-input"
            id="status"
            type="text"
            defaultValue={this.state.status}
            onChange={this.onStatusChange.bind(this)}
          />
          <Button buttonColor="blue" type="submit">
            Save Changes
          </Button>
          <p style={{ color: "#ED4C67" }}>{this.state.error}</p>
        </form>
      </li>
    );
  }
}

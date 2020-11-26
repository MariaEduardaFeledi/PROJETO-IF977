import React, { Component } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Button } from "./../../components/Button";
import "./Admin.css";
import { DropDown } from "../../components/DropDown";

const updateCatagory = /* GraphQL */ `
  mutation UpdateCatagory(
    $input: UpdateCatagoryInput!
    $condition: ModelCatagoryConditionInput
  ) {
    updateCatagory(input: $input, condition: $condition) {
      id
      title
      catagory
      xtypeID
      ytypeID
      status
      createdOn
      updatedOn
    }
  }
`;

export default class CatagoryForm extends Component {
  constructor(props) {
    super(props);

    var datatypeData = this.props.datatypes.map((catagory) => catagory.data);
    var datatypeID = this.props.datatypes.map((catagory) => catagory.id);

    this.state = {
      id: this.props.item.id,
      title: this.props.item.title,
      catagory: this.props.item.catagory,
      xtype: this.props.item.xtype.data,
      ytype: this.props.item.ytype.data,
      xtypeID: this.props.item.xtype.id,
      ytypeID: this.props.item.ytype.id,
      status: this.props.item.status,
      changed: false,
      error: "",
      datatypeData: datatypeData,
      datatypeID: datatypeID,
      xdd: datatypeID.findIndex((id) => id === this.props.item.xtype.id),
      ydd: datatypeID.findIndex((id) => id === this.props.item.ytype.id),
    };
    this.PushCatagoryUpdate = this.PushCatagoryUpdate.bind(this);
    this.onXDropDownChange = this.onXDropDownChange.bind(this);
    this.onYDropDownChange = this.onYDropDownChange.bind(this);
  }

  PushCatagoryUpdate(e) {
    e.preventDefault();

    const { id, title, catagory, xdd, ydd, status, datatypeID } = this.state;
    console.log(datatypeID[xdd]);
    API.graphql(
      graphqlOperation(updateCatagory, {
        input: {
          id: id,
          title: title,
          catagory: catagory,
          status: status,
          xtypeID: datatypeID[xdd],
          ytypeID: datatypeID[ydd],
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

  onStatusChange(event) {
    this.setState({ status: event.target.value, changed: true });
  }

  onXDropDownChange(event) {
    this.setState({ xdd: event, changed: true });
  }

  onYDropDownChange(event) {
    this.setState({ ydd: event, changed: true });
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
          <DropDown
            title="Select Catagory"
            list={this.state.datatypeData}
            output={this.onXDropDownChange}
            initial={this.state.xdd}
          />

          <h3 className="form-text">Y type</h3>
          <DropDown
            title="Select Catagory"
            list={this.state.datatypeData}
            output={this.onYDropDownChange}
            initial={this.state.ydd}
          />

          <h3 className="form-text">Status</h3>
          <input
            className="contact-email-input"
            id="status"
            type="text"
            defaultValue={this.state.status}
            onChange={this.onStatusChange.bind(this)}
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

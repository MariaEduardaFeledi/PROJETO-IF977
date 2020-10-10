import React, { Component } from "react";
import { Button } from "./../../components/Button";
import { DropDown } from "./../../components/DropDown";
import { Link, withRouter } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";

export const createPool = /* GraphQL */ `
  mutation CreatePool(
    $input: CreatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    createPool(input: $input, condition: $condition) {
      id
      title
      description
      tnc
      image
      requiredtrust
      catagory {
        id
        title
        catagory
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
      createdOn
      updatedOn
    }
  }
`;

const defaultBackgrounds = [
  "Aare",
  "Clarence",
  "Doubs",
  "Hinterrhein",
  "Inn",
  "Kander",
  "Linth",
  "Mataura",
  "Mohaka",
  "Ngaruroro",
  "Oreti",
  "Rangitikei",
  "Reuss",
  "Rhône",
  "Taieri",
  "Thur",
  "Vorderrhein",
  "Waiau",
  "Waihou",
  "Waimakariri",
  "Wairau",
  "Whangaehu",
];

class CreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      catagory: "",
      TNC: "",
      dd: "",
      fruit: ["apple", "orange", "strawberry", "grape"],
      slider: 0.5,
      Status: "",
    };
    this.onDropDownChange = this.onDropDownChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ signInStatus: "loading" });
    const { name, description, TNC, slider } = this.state;
    const bg =
      defaultBackgrounds[Math.floor(Math.random() * defaultBackgrounds.length)];

    API.graphql(
      graphqlOperation(createPool, {
        input: {
          title: name,
          description: description,
          tnc: TNC,
          requiredtrust: slider,
          image: "https://garnerdefaultbackgrounds.s3.eu-west-2.amazonaws.com/"
            .concat(bg)
            .concat(".svg"),
        },
      })
    )
      .then((val) => {
        this.setState({ Status: "success" });
        this.props.history.push("/manage-pools");
      })
      .catch((err) => this.setState({ Status: err.message.toString() }));
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }
  onDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  onTNCChange(event) {
    this.setState({ TNC: event.target.value });
  }
  onDropDownChange(event) {
    console.log(event);
    this.setState({ dd: event });
  }
  onInitialSliderChange(event) {
    this.setState({ slider: event.target.value });
  }

  render() {
    let confirmation;
    if (this.state.Status === "") {
      confirmation = <p></p>;
    } else if (this.state.Status === "loading") {
      confirmation = <p style={{ color: "#009432" }}>Creating Pool..</p>;
    } else if (this.state.Status === "success") {
      confirmation = <p style={{ color: "#009432" }}>Pool Created</p>;
    } else {
      confirmation = <p style={{ color: "#ED4C67" }}>{this.state.Status}</p>;
    }

    return (
      <div className="auth-form-container">
        <form onSubmit={this.onSubmit}>
          <p style={{ color: "#6c63ff" }}>
            You will have plenty more opportunities to update and edit your pool
            before publishing it to the public. This is just an initial setup,
            all of the values entered here can be changed.
          </p>
          <h3 className="form-label">Create pool</h3>
          <h3 className="form-text">
            Pool name
            <span className="form-span">
              This will appear as the title of the pool
            </span>
          </h3>
          <input
            className="contact-email-input"
            id="title"
            type="text"
            required
            onChange={this.onNameChange.bind(this)}
          />
          <h3 className="form-text">
            Enter Description
            <span className="form-span">
              users will be able to read the discription
            </span>
          </h3>
          <textarea
            className="contact-email-input tall-input"
            rows="6"
            required
            onChange={this.onDescriptionChange.bind(this)}
          />
          <h3 className="form-text">
            Enter Terms and conditions
            <span className="form-span">
              Users will be made to accept before contributing to the pool
            </span>
          </h3>
          <textarea
            className="contact-email-input tall-input"
            rows="6"
            required
            onChange={this.onTNCChange.bind(this)}
          />
          <h3 className="form-text">
            Sample format
            <span className="form-span">
              Also note right now not many data formats are supported, if you
              are intrested in one that doesn't exist yet
              <Link to="/contact" target="_blank" className="form-link-small">
                Contact us and we will make it happen.
              </Link>
            </span>
          </h3>
          <DropDown
            title="Select fruit"
            list={this.state.fruit}
            output={this.onDropDownChange}
            on
          />

          <h3 className="form-text">
            Sample cross-verification level
            <span className="form-span">
              This is a temporary estimation, and will be adjusted when
              gathering begins.
            </span>
          </h3>
          <div className="form-bottom-content">
            <input
              type="range"
              onChange={this.onInitialSliderChange.bind(this)}
              min="0"
              max="1"
              step="0.001"
            />
            <h3 className="form-text">
              Initial estimated cost per sample{" "}
              <span style={{ color: "#6c63ff" }}>£0.0102</span>
            </h3>
          </div>
          <div className="form-bottom-content">
            {confirmation}
            <Button
              buttonColor="blue"
              type="submit"
              buttonSize="btn--form"
              onClick={() => {}}
            >
              Save!
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateForm);

import React, { Component } from "react";
import { Button } from "./../../components/Button";
import { DropDown } from "./../../components/DropDown";
import { Link, withRouter } from "react-router-dom";
import { API, graphqlOperation, Auth } from "aws-amplify";
import aws_exports from "./../../aws-exports";

export const createPool = /* GraphQL */ `
  mutation CreatePool(
    $input: CreatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    createPool(input: $input, condition: $condition) {
      id
    }
  }
`;

const listCatagorys = /* GraphQL */ `
  query ListCatagorys(
    $filter: ModelCatagoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCatagorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
      }
      nextToken
    }
  }
`;

const defaultBackgrounds = [
  "Aare.svg",
  "Clarence.svg",
  "Doubs.svg",
  "Hinterrhein.svg",
  "Inn.svg",
  "Kander.svg",
  "Linth.svg",
  "Mataura.svg",
  "Mohaka.svg",
  "Ngaruroro.svg",
  "Oreti.svg",
  "Rangitikei.svg",
  "Reuss.svg",
  "Rhône.svg",
  "Taieri.svg",
  "Thur.svg",
  "Vorderrhein.svg",
  "Waiau.svg",
  "Waihou.svg",
  "Waimakariri.svg",
  "Wairau.svg",
  "Whangaehu.svg",
];

class CreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      TNC: "",
      dd: -1,
      catagoryIds: [],
      catagoryTitles: [],
      slider: 0.5,
      Status: "",
    };
    this.onDropDownChange = this.onDropDownChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getCatagories = this.getCatagories.bind(this);
  }

  getCatagories() {
    const filter = {
      status: { eq: "PUBLISHED" },
    };

    API.graphql(
      graphqlOperation(listCatagorys, {
        filter: filter,
      })
    )

      .then((val) => {
        this.setState({
          catagoryIds: val.data.listCatagorys.items.map(
            (catagory) => catagory.id
          ),
          catagoryTitles: val.data.listCatagorys.items.map(
            (catagory) => catagory.title
          ),
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getCatagories();
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ Status: "loading" });
    const { name, description, TNC, slider, catagoryIds, dd } = this.state;
    const bg =
      defaultBackgrounds[Math.floor(Math.random() * defaultBackgrounds.length)];

    const image = {
      bucket: aws_exports.aws_user_files_s3_bucket,
      region: aws_exports.aws_user_files_s3_bucket_region,
      key: bg,
    };

    if (dd !== -1) {
      Auth.currentAuthenticatedUser()
        .then((val) => {
          API.graphql(
            graphqlOperation(createPool, {
              input: {
                title: name,
                description: description,
                tnc: TNC,
                requiredtrust: slider,
                image: image,
                status: "UNPUBLISHED",
                catagoryID: catagoryIds[dd],
                owner: val.username,
              },
            })
          )
            .then((val) => {
              this.setState({ Status: "success" });
              this.props.history.push("/manage-pools");
            })
            .catch((err) => {
              console.log(err);
              this.setState({ Status: err.message });
            });
        })
        .catch((err) => console.log(err));
    } else {
      this.setState({ Status: "Please select a catagory" });
    }
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
            title="Select Catagory"
            list={this.state.catagoryTitles}
            output={this.onDropDownChange}
          />
          <div className="form-bottom-content">
            {confirmation}
            <Button buttonColor="blue" type="submit" buttonSize="btn--form">
              Save!
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(CreateForm);

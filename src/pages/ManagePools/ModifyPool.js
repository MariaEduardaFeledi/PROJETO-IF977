import React, { Component } from "react";
import "./ManagePools.css";
import HeroSection from "../../components/HeroSection";
import { homeObjOne } from "./../NotFound/Data.js";
import { Storage, API, graphqlOperation } from "aws-amplify";
//import { Button } from "./../../components/Button";
import aws_exports from "./../../aws-exports";

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

const updatePool = /* GraphQL */ `
  mutation UpdatePool(
    $input: UpdatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    updatePool(input: $input, condition: $condition) {
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
      image: "",
    };
    this.GetPool = this.GetPool.bind(this);
  }

  GetPool() {
    const { id } = this.state;
    API.graphql(graphqlOperation(getPool, { id: id }))

      .then((val) => {
        if (val.data.getPool !== null) {
          this.setState({ result: val.data.getPool, fetch: true });
          Storage.get(this.state.result.image.key).then((val) =>
            this.setState({ image: val })
          );
        } else {
          this.setState({ fetch: false });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ fetch: false });
      });
  }

  addImageToDB(image) {
    const { id } = this.state;
    API.graphql(
      graphqlOperation(updatePool, {
        input: { id: id, image: image },
      })
    )
      .then(() => console.log("file uploaded"))
      .catch((err) => console.log(err));
  }

  onImageUpload(e) {
    const file = e.target.files[0];

    Storage.configure({ level: "public" });
    Storage.put(file.name, file, { contentType: "image/png" }).then((val) => {
      this.setState({ image: URL.createObjectURL(file) });
      const image = {
        bucket: aws_exports.aws_user_files_s3_bucket,
        region: aws_exports.aws_user_files_s3_bucket_region,
        key: file.name,
      };

      this.addImageToDB(image);
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
            <h3 className="pool-manage-menu-item">Manage</h3>

            <hr className="pool-manage-menu-hr" />
            <h3 className="pool-manage-menu-item">Back-end</h3>

            <hr className="pool-manage-menu-hr" />

            <h3 className="pool-manage-menu-item">Statistics</h3>

            <hr className="pool-manage-menu-hr" />

            <h3 className="pool-manage-menu-item">Billing</h3>

            <hr className="pool-manage-menu-hr" />

            <h3 className="pool-manage-menu-item">Export data</h3>
          </div>
        </div>
        <div className="pool-page-content">
          <div className="auth-form-container">
            <div className="pool-upload-image">
              <img
                className="pool-page-image"
                src={this.state.image}
                alt="pool background"
              />
              <h1 className="pool-image-title">{this.state.result.title}</h1>
              <div className="pool-image-submit-button">
                <h2>Change image</h2>
                <input
                  type="file"
                  onChange={(event) => this.onImageUpload(event)}
                  multiple
                  accept="image/*"
                />
              </div>
            </div>
            <form>
              <h3 className="form-label">Change pool appearance</h3>
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
                onChange={() => {}}
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
                onChange={() => {}}
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
                onChange={() => {}}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ModifyPool;

//flex wrap
//flex wrap wrap
//this.props.match.params.email

import React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Button } from "../../components/Button";
import { FaCopy, FaEye, FaEyeSlash } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const updatePool = /* GraphQL */ `
  mutation UpdatePool(
    $input: UpdatePoolInput!
    $condition: ModelPoolConditionInput
  ) {
    updatePool(input: $input, condition: $condition) {
      id
    }
  }
`;

export const getPool = /* GraphQL */ `
  query GetPool($id: ID!) {
    getPool(id: $id) {
      privateKey
    }
  }
`;

export default class ChangeAppearance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.result.id,
      result: props.result,
      privateKey: props.result.privateKey || "",
      keyVisibility: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ Status: "loading" });
    const { id } = this.state;

    console.log(id);

    API.graphql(
      graphqlOperation(updatePool, {
        input: {
          id: id,
          privateKey: "new key please",
        },
      })
    )
      .then((val) => {
        API.graphql(graphqlOperation(getPool, { id: id }))
          .then((val) => {
            this.setState({
              Status: "success",
              privateKey: val.data.getPool.privateKey,
            });
            console.log(val);
          })
          .catch((err) => {
            console.log(err);
            this.setState({ Status: err.message });
          });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ Status: err.message });
      });
  }

  toggleVisiblity() {
    this.setState({ keyVisibility: !this.state.keyVisibility });
  }

  render() {
    let VisibleKey;
    if (this.state.keyVisibility) {
      VisibleKey = this.state.privateKey;
    } else {
      VisibleKey = "*".repeat(this.state.privateKey.length);
    }

    let confirmation;
    if (this.state.Status === "") {
      confirmation = <p></p>;
    } else if (this.state.Status === "loading") {
      confirmation = <p style={{ color: "#009432" }}>Generating key...</p>;
    } else if (this.state.Status === "success") {
      confirmation = <p style={{ color: "#009432" }}>Key generated</p>;
    } else if (this.state.Status === "copied") {
      confirmation = <p style={{ color: "#009432" }}>Copied to clipboard!</p>;
    } else {
      confirmation = <p style={{ color: "#ED4C67" }}>{this.state.Status}</p>;
    }
    return (
      <div className="pool-page-content">
        <div className="auth-form-container">
          <form onSubmit={this.onSubmit}>
            <h3 className="form-label">Manage access to your pool</h3>
            <h3 className="form-text">
              Private key
              <span className="form-span">
                Keep this key super secret, don't let anyone else see it
              </span>
            </h3>
            <h2 className="contact-email-input">
              {VisibleKey}
              {!this.state.keyVisibility && (
                <FaEye
                  className="key-icon"
                  onClick={() => this.toggleVisiblity()}
                />
              )}
              {this.state.keyVisibility && (
                <FaEyeSlash
                  className="key-icon"
                  onClick={() => this.toggleVisiblity()}
                />
              )}
              <CopyToClipboard
                text={this.state.privateKey}
                onCopy={() => this.setState({ Status: "copied" })}
              >
                <FaCopy className="key-icon" />
              </CopyToClipboard>
            </h2>

            <div className="form-bottom-content">
              {confirmation}
              <Button buttonSize="btn--form" Color="#f1f3f6" type="submit">
                Reset key
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

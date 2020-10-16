import React, { Component } from "react";
import "./Typer.css";

class Typer extends Component {
  static defaultProps = {
    heading: "",
    dataText: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 175,
    };
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 175,
    });

    if (!isDeleting && text === fullText) {
      setTimeout(() => this.setState({ isDeleting: true }), 900);
    } else if (isDeleting && text === "") {
      setTimeout(
        () =>
          this.setState({
            isDeleting: false,
            loopNum: loopNum + 1,
          }),
        600
      );
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    return (
      <p style={{ height: "200px" }}>
        <span>{this.state.text}</span>
        <span className="cursor" />
      </p>
    );
  }
}

export default Typer;

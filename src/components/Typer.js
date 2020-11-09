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
      output: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 175,
      dimensions: null,
    };
  }

  componentDidMount() {
    this.setState({
      dimensions: {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight,
      },
    });
    this._ismounted = true;
    this.handleType();
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  handleType = () => {
    if (this._ismounted) {
      //dataText = ['text1', 'text2'];
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

      /*
    let output = fullText.split(" ");

    console.log(this.state);
    let width = 0;
    let itemwidth = 400;
    let bruh = output.map((item, pos) => {
      width += item.length * 25;
      if (width > itemwidth) {
        console.log(true);
        width = 0;
        retu rn <br /> + item;
      } else {
        console.log(false);
        return " " + item;
      }
    });
    //console.log(bruh);

    //this.setState({
    //  output: bruh,
    //});
    */

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
    }
  };

  render() {
    return (
      <p style={{ height: "200px" }} ref={(el) => (this.container = el)}>
        <span>{this.props.pretext ?? ""}</span>
        <span style={{ color: "#f2a083" }}>{this.state.text}</span>
        <span className="cursor" />
      </p>
    );
  }
}

export default Typer;

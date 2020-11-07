import React from "react";
import { Link } from "react-router-dom";
import { Storage } from "aws-amplify";

class ImageCardItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: [],
    };
  }

  componentDidMount() {
    const { key, bucket, region } = this.props.imageData;
    Storage.get(key, {
      config: { bucket: bucket, region: region },
    }).then((val) => this.setState({ image: val }));
  }

  render() {
    return (
      <>
        <li className="text__cards__item">
          <Link className="cards__item__link" to={this.props.path}>
            <figure
              className="cards__item__pic-wrap"
              data-category={this.props.label}
            >
              <img
                className="cards__item__img"
                src={this.state.image}
                alt="information"
              />
            </figure>
            <div className="cards__item__info">
              <h5 className="cards__item__text">{this.props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }
}

export default ImageCardItem;

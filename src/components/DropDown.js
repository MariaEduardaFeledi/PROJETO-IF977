import React, { Component } from "react";
import "./DropDown.css";
import { FaAngleUp, FaAngleDown, FaCheck } from "react-icons/fa";

export class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: false,
      itemID: 0,
      listOpen: false,
      headerTitle: this.props.title,
    };
  }

  handleClickOutside() {
    this.setState({
      listOpen: false,
    });
  }

  toggleList() {
    this.setState((prevState) => ({
      listOpen: !prevState.listOpen,
    }));
  }

  render() {
    const { list } = this.props;
    const { listOpen, headerTitle, itemID, itemSelected } = this.state;
    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">{headerTitle}</div>
          {listOpen ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {listOpen && (
          <ul className="dd-list">
            {list.map((item, key) =>
              itemSelected && key === itemID ? (
                <li
                  style={{ color: "#6c63ff", fontWeight: 700 }}
                  className="dd-list-item"
                  key={key}
                >
                  {item} <FaCheck />
                </li>
              ) : (
                <li
                  className="dd-list-item"
                  key={key}
                  onClick={() => {
                    this.setState({
                      headerTitle: item,
                      itemID: key,
                      itemSelected: true,
                    });
                    this.props.output(item);
                  }}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        )}
      </div>
    );
  }
}

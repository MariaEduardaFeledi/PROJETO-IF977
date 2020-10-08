import React, { Component } from "react";
import ImageCardItem from "./../../components/ImageCardItem";
import "./ManagePools.css";
import { FaPlus } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

class ManagePools extends Component {
  componentDidMount() {
    console.log("Load tiles here!");
  }

  render() {
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="cards__screen">
            <ul className="cards__manager">
              <ImageCardItem
                src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/pretty-place-sunrise-kevin-senter.jpg"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
              />
              <ImageCardItem
                src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/pretty-place-sunrise-kevin-senter.jpg"
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Text to text init"
                path="/services"
              />
              <li className="add-pool-li">
                <Link to="/create-pool" className="btn-link">
                  <button className="add-pool-button">
                    <FaPlus className="add-pool-icon" />
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </IconContext.Provider>
      </>
    );
  }
}

export default ManagePools;

//flex wrap
//flex wrap wrap

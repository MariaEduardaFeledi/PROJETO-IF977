import React from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { IconContext } from 'react-icons/lib';

function TextCardItem(props) {
  return (
    <>
      <IconContext.Provider value={{ color: props.color }}>
        <li className="cards__item">
          <div class="cards__item__link">
            <div className="card-text">
              <div className="card-blob-icon-container">
                <img src={props.blob} alt="blob" class="card-blob" />
                <props.icon className="card-icon" />
              </div>
              <h1 className="card-heading">{props.heading}</h1>
              
              
              {props.paragraphs.map((item) => (
                <p className="card-paragraph">{item}</p>
              ))}
            </div>
          </div>
        </li>
      </IconContext.Provider>
    </>
  );
}

export default TextCardItem;

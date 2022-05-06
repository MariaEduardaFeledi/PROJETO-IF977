import React from "react";
import { IconContext } from "react-icons/lib";

function TextCardItem(props) {
  return (
    <>
      <IconContext.Provider value={{ color: props.color }}>
        <li className="cards__item">
          <div className="cards__item__link">
            <div className="card-text">
              <div className="card-blob-icon-container">
                <img src={props.blob} alt="blob" className="card-blob" />
                <props.icon className="card-icon" />
              </div>
              <h1 className="card-heading">{props.heading}</h1>

              {props.paragraphs.map((item, idx) => (
                <p className="card-paragraph" key={idx}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </li>
      </IconContext.Provider>
    </>
  );
}

export default TextCardItem;

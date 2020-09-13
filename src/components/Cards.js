import React from "react";
import "./Cards.css";
import ImageCardItem from "./ImageCardItem";
import TextCardItem from "./TextCardItem";
import { MdFingerprint, MdCompareArrows, MdCasino, MdLock } from "react-icons/md";

function Cards() {
  return (
    <div className="cards">
      <h1 className="cards-title">What we believe in.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <TextCardItem
              icon={MdFingerprint}
              color="#3ACF85"
              blob="images/blob1.svg"
              heading="Artificial Intelligence"
              paragraphs={[
                "Artificial Intelligence will be humanity's more important creation, We provide the data to run more meaningful experiments to put AI to better use to help path the road to a more compassioate singularity.",
              ]}
            />
          </ul>
          <ul className="cards__items">
            <TextCardItem
              icon={MdCompareArrows}
              color="#F32916"
              blob="images/blob2.svg"
              heading="Goal Alignment"
              paragraphs={[
                "One of the hardest problems in machine learning safety is keeping the goals of our algorithms, in line with our own goals.",
                "We believe that intergrating humans closer into the training of these algorithms will align our goals more effectively.",
              ]}
            />
            <TextCardItem
              icon={MdCasino}
              color="#F5773D"
              blob="images/blob3.svg"
              heading="Current AI systems"
              paragraphs={[
                "While current machine learning systems are not believed to be intelligent, or even near there, they provide an intresting platform to run experiments and test very human ",
                "Unfortunatly todays AI systems are being used in lots of sav",
              ]}
            />
          </ul>
          <ul className="cards__items">
            <TextCardItem
              icon={MdLock}
              color="#85B4FF"
              blob="images/blob4.svg"
              heading="User control"
              paragraphs={[
                "While current machine learning systems are not believed to be intelligent, or even near there, they provide an intresting platform to run experiments and test very human ",
                "Unfortunatly todays AI systems are being used in lots of sav",
              ]}
            />
            <TextCardItem
              icon={MdFingerprint}
              color="#a670ff"
              blob="images/blob5.svg"
              heading="Current AI systems"
              paragraphs={[
                "While current machine learning systems are not believed to be intelligent, or even near there, they provide an intresting platform to run experiments and test very human ",
                "Unfortunatly todays AI systems are being used in lots of sav",
              ]}
            />
            <TextCardItem
              icon={MdFingerprint}
              color="#EDBC1D"
              blob="images/blob6.svg"
              heading="Current AI systems"
              paragraphs={[
                "While current machine learning systems are not believed to be intelligent, or even near there, they provide an intresting platform to run experiments and test very human ",
                "Unfortunatly todays AI systems are being used in lots of sav",
              ]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

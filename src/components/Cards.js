import React from "react";
import "./Cards.css";
import TextCardItem from "./TextCardItem";
import {
  FaBrain,
  FaDice,
  FaLock,
  FaBalanceScale,
  FaBullseye,
  FaHeart,
} from "react-icons/fa";

function Cards() {
  return (
    <div className="cards">
      <h1 className="cards-title">Our Goals.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <TextCardItem
              icon={FaBrain}
              color="#3ACF85"
              blob="images/blob1.svg"
              heading="Artificial Intelligence"
              paragraphs={[
                "Artificial Intelligence will be humanity's most important creation, We gather the data to run more meaningful experiments that puts AI to better use in order to help pave the way to a more compassionate singularity.",
              ]}
            />
          </ul>
          <ul className="cards__items">
            <TextCardItem
              icon={FaBullseye}
              color="#F32916"
              blob="images/blob2.svg"
              heading="Goal Alignment"
              paragraphs={[
                "One of the hardest problems in machine learning safety is keeping the goals of our algorithms, in line with those of ourselves.",
                "We believe that integrating humans closer into the training loop of these algorithms will be a start on aligning our goals more effectively.",
              ]}
            />
            <TextCardItem
              icon={FaDice}
              color="#F5773D"
              blob="images/blob3.svg"
              heading="Current AI systems"
              paragraphs={[
                //"While current machine learning systems are not believed to be intelligent, or even near there, they provide an intresting platform to run experiments and test very human ",
                "Current machine learning systems have proven they can perform very well in single-domain tasks, without a doubt the next milestone is improving the generalization ability",
                "Although where there is the is an abundance of data today's algorithms will excel, Unfortunately, some of the main industries getting the most out of machine learning are Gambling, Advertising, and the Military",
                "We will only accept projects we deem will have a positive impact on society.",
              ]}
            />
          </ul>
          <ul className="cards__items">
            <TextCardItem
              icon={FaLock}
              color="#85B4FF"
              blob="images/blob4.svg"
              heading="User control"
              paragraphs={[
                "Users will get payed per sample of data gathered.",
                "We want the users to have total control over their data, when they gather data for a project of their choice they will have the option to redeem it.",
              ]}
            />
            <TextCardItem
              icon={FaBalanceScale}
              color="#a670ff"
              blob="images/blob5.svg"
              heading="Bias"
              paragraphs={[
                "Biased data is a very real problem with machine learning and data science, especially in production",
                "If one categories,  or manifolds of the data is under-represented in the dataset, it can cause problems in the real world",
                "We plan to role the app out on a large scale, allowing everyone to contribute towards projects they care about, lessening the effect of bias",
              ]}
            />
            <TextCardItem
              icon={FaHeart}
              color="#EDBC1D"
              blob="images/blob6.svg"
              heading="Data Quality"
              paragraphs={[
                "Today's machine learning algorithms are sensitive to the data they are given and struggle with noisy data, and performance suffers.",
                "Hopefully, we will soon have algorithms more robust against noisy data, as a lot of real-world data is noisy.",
                "But in the meantime, we use cross-validation, and other algorithms to ensure the quality of the data meets your criteria.",
              ]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

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
      <h1 className="cards-title">Objetivos</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <TextCardItem
              icon={FaBrain}
              color="#3ACF85"
              blob="images/blob1.svg"
              heading="Artificial Intelligence"
              paragraphs={[
                "Artificial will be humanity's most important creation.",
                "A lot of progress is happening in the field of machine learning every day, creating novel architectures and improving accuracies.",
                "Although previously not much attention has been paid to the data powering these discoveries, other than just increasing the size of the datasets we gather. This trajectory we are on will not hold as we move forward.",
                "We hope to help produce more meaningful data to put AI to better use to help pave a more compassionate, human-centric intelligence."
                
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
                "Goal alignment is and will be one of the most important decisions in the creation process of AI systems. ",
                "Currently to you need to apply expert knowledge to the task which stops a lot of people from having access to these systems.",
                "We Believe that integrating humans closer into the training of the algorithms will align the goals of the machine with our own, furthermore removing the barriers of expert knowledge.",
                "As long as you can define the problem we can solve it."
              ]}
            />
            <TextCardItem
              icon={FaDice}
              color="#F5773D"
              blob="images/blob3.svg"
              heading="Current AI systems misuse"
              paragraphs={[
                //"While current machine learning systems are not believed to be intelligent, or even near there, they provide an intresting platform to run experiments and test very human ",
                "While today's AI systems have proven they can handle single domain tasks very well, if we are to believe going forward these systems will evolve into smarter, more general reasoning machines we are far from an optimal situation.",
                "Where data is abundant these algorithms will excel, and unfortunately, some of the main industries benefitting from this technology are Advertising, Gambling, And the Military.",
                "We will only accept projects we deem will have a positive impact.",
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
                "We will remain fully transparent with the purpose and use of your data.",
                "We will only track data that is important to the pools of data you willingly help contribute towards.",
                "We don't sell your information without your consent."
              ]}
            />
          </ul>
          <ul className="cards__items">
            <TextCardItem
              icon={FaBalanceScale}
              color="#a670ff"
              blob="images/blob5.svg"
              heading="Bias"
              paragraphs={[
                "Data bias is a problem in today's AI systems, and the effects of this are especially apparent in production situations.",
                "If parts of the are under-represented it can cause problems and biases in the final product that can affect people's experiences with it.",
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

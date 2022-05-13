//import React from "react";

const [myOptions, setMyOptions] = useState([])

export const homeObjOne = {
    lista: myOptions.push('banco de dados','engenharia de software','cálculo','programação'),
    opcoes:setMyOptions(myOptions)
  };

export const homeObjTwo = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "",
  headline: "Get familiar with the software",
  description:
    "If you want to use Garner to gather data, get in contact with us and we can give you an early peek at how to use the system before release.",
  buttonLabel: "Get in contact",
  buttonLocation: "contact",
  imgStart: "start",
  img: "absurd/05.png",
  alt: "Person using computer",
  form: false,
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "",
  headline: "Get familiar with the software",
  description:
    "Thank you for getting in contact, we have given you permissions to access, create and manage pools",
  buttonLabel: "Manage pools",
  buttonLocation: "manage-pools",
  imgStart: "start",
  img: "absurd/09.png",
  alt: "Person using computer",
  form: false,
};



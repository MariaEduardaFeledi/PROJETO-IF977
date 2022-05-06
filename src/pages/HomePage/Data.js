import React from "react";
import Typer from "../../components/Typer";

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "",
  headline: (
    <Typer
      pretext="Nós somos uma biblioteca digital"
      dataText={[
        "para a comunidade CIn",
      ]}
    />
  ),
  description: "",
  buttonLabel: "Introdução",
  buttonLocation: "/about",
  imgStart: "",
  img: "absurd/07.png",
  alt: "Logo Biblioteca Digital",
  form: false,
};
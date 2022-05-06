import React from "react";
import "./Cards.css";
import TextCardItem from "./TextCardItem";
import {
  FaNewspaper,
  FaBookOpen,
  FaHandsHelping
} from "react-icons/fa";

function Cards() {
  return (
    <div className="cards">
      <h1 className="cards-title">Objetivos</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <TextCardItem
              icon={FaBookOpen}
              color="#3ACF85"
              blob="images/blob1.svg"
              heading="Facilitar a vida do estudante CIn"
              paragraphs={[
                "A vida de universitário pode ser bastante complicada, principalmente para os calouros.",
                "Muitas disciplinas difíceis e trabalhosas, sem tempo de procurar um bom material para estudar, não saber quais disciplinas escolher, e muitos outros problemas.",
                "Para tentar ajudar nesse problema, nós criamos a Biblioteca digital CIn, um ambiente colaborativo que facilita e centraliza conhecimentos, informações, materiais, discussões e mais sobre o Centro de Informática da UFPE."
              ]}
            />
          </ul>
          <ul className="cards__items">
            <TextCardItem
              icon={FaHandsHelping}
              color="#F32916"
              blob="images/blob2.svg"
              heading="Colaboração"
              paragraphs={[
                "A biblioteca digital CIn é um espaço colaborativo entre alunos e professores, os alunos podem postar suas experiências com as disciplinas, quais tiveram dificuldades, sugerir conhecimentos prévios, disponibilizar materiais de estudo, como resumos ou mind maps de sua autoria.",
                "Professores podem postar o repositório das suas disciplinas, com a ementa, forma de avaliação, cronograma, materiais, provas passadas, exercícios resolvidos, etc.",
              ]}
            />
            <TextCardItem
              icon={FaNewspaper}
              color="#F5773D"
              blob="images/blob3.svg"
              heading="Feed"
              paragraphs={[
                "Muitas vezes, somente o que precisamos é da orientação de algum aluno veterano ou professor, com alguma dúvida mais específica, até onde fica alguma sala de aula.",
                "Pensando nisso, implementamos um feed que permite aos alunos discutirem e/ou darem orientações.",
              ]}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

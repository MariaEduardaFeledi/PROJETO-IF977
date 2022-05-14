import React from 'react'
import imgagemEscolhida from 'C:/Users/DudaF/OneDrive/Documentos/GitHub/PROJETO-IF977/src/pages/Teste/05.png'
import abc from "C:/Users/DudaF/OneDrive/Documentos/GitHub/PROJETO-IF977/src/pages/Teste/abc.png"
import { Link } from "react-router-dom";

//export default () => <img src={imgagemEscolhida} style={{float : 'top', paddingLeft : '150px'}}/>

function Footer() {
  return (
    <div className="footer-logo">
        <Link to="/" className="social-logo">
            <img src={imgagemEscolhida} style={{float : 'top', paddingLeft : '140px'}}/>
        </Link>
    </div>
  );
}



export default Footer;

        
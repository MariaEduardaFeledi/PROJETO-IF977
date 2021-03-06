//tela de explorar materiais relevantes

import React from 'react'
import arquivo1 from "C:/Users/DudaF/OneDrive/Documentos/GitHub/PROJETO-IF977/src/pages/Materiais/arquivo1.png"
import arquivo2 from "C:/Users/DudaF/OneDrive/Documentos/GitHub/PROJETO-IF977/src/pages/Materiais/arquivo2.png"
import arquivo3 from "C:/Users/DudaF/OneDrive/Documentos/GitHub/PROJETO-IF977/src/pages/Materiais/arquivo3.png"
import arquivo4 from "C:/Users/DudaF/OneDrive/Documentos/GitHub/PROJETO-IF977/src/pages/Materiais/arquivo4.png"
import arquivo5 from "C:/Users/DudaF/OneDrive/Documentos/GitHub/PROJETO-IF977/src/pages/Materiais/arquivo5.png"
import arquivo6 from "C:/Users/DudaF/OneDrive/Documentos/GitHub/PROJETO-IF977/src/pages/Materiais/arquivo6.png"

function Footer() {
  return (
    <div className="footer-logo">
        <a href="https://docs.google.com/spreadsheets/d/1KI4l3qjeUyoznbssxTunzzteiTnnGAwiOyI7PGHk1p8/edit#gid=0" className="social-logo">
            <img src={arquivo1} style={{float : 'top', }}/>
            <a href="https://drive.google.com/file/d/1l5YHTCM9vqlSMmpBLii5AjnCvC8Pb7py/view?usp=sharing" className="social-logo">
              <img src={arquivo2} style={{float : 'top' }}/>
            </a>
            <a href="https://drive.google.com/file/d/0ByxRpJ_3qDOMVHdjc3owS1pBUHM/view?usp=sharing&resourcekey=0-3ceTV5sVy22FbHBQG0bJzA" className="social-logo">
              <img src={arquivo3} style={{float : 'top' }}/>  
            </a>
        </a>
        <a href="https://docs.google.com/document/d/1GdrN1d_Iku3JgYzQbG2rzGZu5faoFJqy8E_rR25RcdM/edit?usp=sharing" className="social-logo">
            <img src={arquivo4} style={{float : 'top' }}/>
            <a href="https://docs.google.com/document/d/1keHJEDk0sFngLxILI_KhlQfXv0QL2EEF5iikLrVdqXs/edit?usp=sharing" className="social-logo">
              <img src={arquivo5} style={{float : 'top' }}/>
            </a>
            <a href="https://drive.google.com/file/d/1feY3_yXapyMfuWottINLsUymAoUcwrUO/view?usp=sharing" className="social-logo">
              <img src={arquivo6} style={{float : 'top'  }}/>
            </a>
        </a>
    </div>
  );
}

export default Footer;  
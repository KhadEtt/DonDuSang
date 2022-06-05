import React from "react";
import {useNavigate}  from "react-router-dom";
import './demo.css';
import Demo2 from "./Demo2";
import Footer from "./Footer/footer"
function Demo() {
  let navigate = useNavigate();
  return (<div id='pageHeight2'>
  <div className="scroll0">
    <div id="page-heading"  className="page-heading">
      <div id='mySpace'>
        <h2>Bienvenue sur votre espace donneur</h2>
        <div className="text1" >
        Retrouvez toutes vos informations personnelles (historique, mode de contact,<br/> 
        lieux de collecte...) et mettez-les facilement à jour !
        </div>
      </div>
      <Demo2/>
      <div className="registrationLink">
        <div className="text2"><p>Vous n'avez pas de compte ?</p><br/></div>
       <div className="button-container1">
      {/*<botton onClick={() =>{navigate("/demo2")}}  id="bottonSpace"  >CONNEXION</botton>*/}
      <botton onClick={() =>{navigate("/inscription")}} id="bottonSpace1" >Inscrivez-vous ici</botton>
      <div className="imgBlood"></div>
      </div>
        
      </div>
    </div>
  </div>
  <Footer/>
 </div> );
}

export default Demo;

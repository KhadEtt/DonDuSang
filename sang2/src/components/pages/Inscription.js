import React from "react";
import './inscription.css';
import Demo3 from "./Demo3";
import Footerr from "./Footer/foterr"
function Inscription() {
  return (<div id='pageInscriH'>
    <div id="page-heading"  className="page-heading">
      <div id='mySpace'>
        <h2>Bienvenue sur votre espace donneur</h2>
        <div className="text" >
        Donner votre sang est un acte citoyen , volontaire, solidaire et génereux <br/>qui permet de sauver la vie de nombreux malades.
 <br/><br/><p id='msgTest'>" Répondez avec sincérité pour votre santé et la leurs "</p>
        </div>
        <Demo3/>
      </div>
    </div>
    <Footerr/>
 </div> 
 );
}

export default Inscription;

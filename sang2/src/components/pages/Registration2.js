import React from "react";
import ModifyRegistration from "./modifyRegistration";
import './registration2.css';
import {useNavigate}  from "react-router-dom";
import Footer from "./Footer/footer";
function Registration2() {
  let navigate = useNavigate();
  return (
    <div id="page-heading1"  className="page-heading">
      <div id='mySpace'>
        <h2>Bienvenue sur votre espace donneur</h2>
        <div className="text" >
        Retrouvez toutes vos informations personnelles (historique, mode de contact,<br/> 
        lieux de collecte...) et mettez-les facilement à jour !
        </div>
      </div>
      <ModifyRegistration/>
      <Footer/>
    </div>
  );
}

export default Registration2;

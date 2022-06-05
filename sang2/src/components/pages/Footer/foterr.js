import React from "react";
import {useNavigate}  from "react-router-dom";
import  "./footerr.css"
function Footerr(){
    let navigate = useNavigate();
    return(<div id='displayBlock'>
        <div id='footer-container'>
      <div className="logo-container"><div className="photoLogo"></div></div>
      <div className="contenu1"><p id="titre">Lien<br/></p>
      <p id="link" onClick={() =>{navigate("/")}}>Accueil</p>
      <p id="link" onClick={() =>{navigate("/donner")}}>Comprendre</p>
      <p id="link" onClick={() =>{navigate("/actualite")}}>Actualité</p>
      <p id="link" onClick={() =>{navigate("/inscription")}}>Inscription</p>
      </div>
      <div className="contenu1"><p id="titre">Contactez-Nous</p>
      <div id='contenu2'><div className="icon0"></div><p id="link" >facebook<br/></p></div>
      <div id='contenu2'><div className="icon1"></div><p id="link" >instagram<br/></p></div>
      <div id='contenu2'><div className="icon2"></div><p id="link" >youtube<br/></p></div>
      <div id='contenu2'><div className="icon3"></div><p id="link" >twitter<br/></p></div>
      
      </div>
       <div className="final2">©2021-2022 DonDuSang Maroc</div>
        </div>
       
        </div>
        
    )
}
export default Footerr;
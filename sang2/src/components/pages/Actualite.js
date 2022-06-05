import React from "react";
import './actualite.css';
import {useNavigate}  from "react-router-dom";
import Footer from "./Footer/footer"
function Actualite() {
  let navigate = useNavigate();
  return (<div id="pageHeight">
    <div id='actualite' className="page-heading">
      <h1>Actualité</h1>
      </div>
  <h2 className="title2">Le plus récent</h2>
    <div className="pageStyle">
      
      <div className="news-container">
      <div id="imgContainer">
      <div className="img-container1">
         
      </div>
          <div className="divButton" >
            <button 
            id='titre-button' 
            onClick={() =>{navigate("/new1")}}
            >
              Risque de pénurie au Maroc à cause d'Omicron
            </button>
          </div>
    </div>
      <div id="imgContainer"><div className="img-container2">
         
         </div>
             <div id="titre">
               <button
                onClick={() =>{navigate("/new2")}}
                id="titre-button"
                >
               la vaccination contre le Covid-19 non transmissible par transfusion
               </button>
             </div></div>
      <div id="imgContainer"><div className="img-container3">
         
         </div>
             <div id="titre">
               <button
                onClick={() =>{navigate("/news3")}}
                id="titre-button"
                >
               Anticorps anti-SARS-CoV-2 dans les plaquettes
               </button>
             </div></div>
      <div id="imgContainer"><div className="img-container4">
         
         </div>
             <div id="titre">
               <button 
               onClick={() =>{navigate("/news4")}}
               id="titre-button"
               >
               Des patients transfusés à leur domicile
               </button>
             </div></div>
      <div id="imgContainer"><div className="img-container5">
         
         </div>
             <div id="titre">
               <button
                id="titre-button"
                onClick={() =>{navigate("/new5")}}
                >
                 En donnant son sang plus de 1000 fois, <br/>un Australien a aidé 2,4 millions de bébés
               </button>
             </div></div>
      <div id="imgContainer"><div className="img-container6">
         
         </div>
             <div id="titre">
               <button 
               onClick={() =>{navigate("/new6")}}
               id="titre-button"
               >
               5 bonnes raisons de donner
               </button>
             </div></div>
      </div>
    </div>

<Footer/>

    </div>
    
  );
}

export default Actualite;

import React from "react";
import {useNavigate}  from "react-router-dom";
import './home.css'; 
import Footer from "./Footer/footer"
function Home() {
  let navigate = useNavigate();
  return (<div id="pageH">
    <div id='home'/* className="page-heading2"*/>
     <div id='title'> <p id='text'>Devenez un vrai Héros</p><br/>
      <p id='text'>Devenez Donneur !</p>
        <button onClick={() =>{navigate("/inscription")}} id='lienStyle'>Rejoignez-Nous</button>
      </div>
      
    </div>
    <h2 id='text2'>Pourquoi donner son sang ? </h2>
    <div className="pageStyle">
      
      <div className="news-container">
      <div id="imgContainer2">
      <div className="img-container01">
         
      </div>
          <div className="divButton" >
        <p id='pDeco'>3 VIES</p>
            <button
            id='titre-button1' 
            >
              Parcequ'en 30 minutes, vous pouvez sauver  3 vies !
            </button>
          </div>
    </div>
      <div id="imgContainer2"><div className="img-container02">
         
         </div>
             <div id="titre">
               <p id='pDeco'>1000 DONS</p>
               <button
                id="titre-button1"
                >
               Parce qu'en Maroc, il faut près de 1000 dons par jour pour faire face aux besoins.
               </button>
             </div></div>
             <div id="imgContainer2"><div className="img-container04">
         
         </div>
             <div id="titre">
             <p id='pDeco'>Avantages pour la santé</p>
               <button
                id="titre-button1"
                >
              Un don de sang pourrait réduire de 88% le risque de crise cardiaque.
               </button>
             </div></div>
      <div id="imgContainer2"><div className="img-container03">
         
         </div>
             <div id="titre">
             <p id='pDeco'>VITAL</p>
               <button
                id="titre-button1"
                >
               Parce qu'à l'heure actuelle, rien ne remplace le sang.
               </button>
             </div></div>
      <div id='title-display'>
        <div id='txtStyle'>___________   Nous pourrions tous un jour en avoir besoin !   ___________</div>
       <div id='backStyle'>
         <div id="diffStyle">  Faisons une différence aujourd'hui</div>
       <div id='imageProcess'></div>
       <div id="text-container">
         <div id='textStyle'>
           <h6>AVANT</h6>
           Etes-vous apte à donner ?<br/>
          Faites votre autoévaluation et prenez rendez-vous quand vous voulez !<br/>
          Pensez à bien manger, bien vous hydrater et prendre votre pièce d'identité.<br/>
          </div>
         <div id='textStyle'>
           <h6>PENDANT</h6>
           Souriez, vous êtes entre de bonnes mains avec notre équipe de professionnels et de bénévoles.<br/>
           Le don dure moins de 10 minutes.
          </div>
         <div id='textStyle'>
           <h6>APRES</h6>
           C'est déjà fini.<br/>
            Après quelques semaines, vous pouvez à nouveau donner votre sang et continuer à le faire dès que vous le souhaitez.<br/>
            Merci !
          </div>
       </div>
      </div>
      </div>
      
    </div>
             </div>
    
<Footer/>

 </div> );
}

export default Home;

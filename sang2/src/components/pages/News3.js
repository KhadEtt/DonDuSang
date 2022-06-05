import React from "react";
import './News.css'
import background from "./img/antiCorps.png";

function New3() {
  return (<div>
    <div id='News1' style={{ backgroundImage: `url(${background})` }} className="page-heading">
      <div className="hStyle">
      <p> Anticorps anti-SARS-CoV-2 dans les plaquettes</p>
    </div></div>
    <div className="contenuStyle">
    Alors que les scientifiques ont prouvé que les plasmas de donneurs ayant guéri du coronavirus permettaient de fournir des anticorps passifs à ce virus aux patients, cette nouvelle étude a mis en évidence le même effet pour les concentrés de plaquettes.<br/><br/>

Lors de la crise sanitaire au SARS-CoV-2, les scientifiques et les médecins ont mis en place la réalisation de transfusions de plasma pour les patients atteints du coronavirus, afin de les aider à combattre le virus.<br/><br/>

Bien que plus de 5000 transfusions de plaquettes se produisent quotidiennement aux États-Unis, la présence d’anticorps SARS-CoV-2 dans les unités de plaquettes n'avait pas été évaluée, jusqu'à cette étude.<br/><br/>

Les auteurs de cette étude ont recherché la présence d'anticorps anti-SARS-CoV-2 chez les donneurs de sang ayant réalisé un don de plaquettes d'aphérèse et déterminé si les transfusions de plaquettes transféraient passivement les anticorps aux receveurs séronégatifs.<br/><br/>

Sur les 23 patients ayant reçu des concentrés de plaquettes présentant des anticorps IgG contre le virus, les chercheurs ont détecté la présence de ces anticorps chez 13 receveurs (56,5 %). Les 10 autres patients ayant reçu des concentrés de plaquettes avec des taux d'anticorps faibles.<br/><br/>

Même si l'échantillonage reste faible, cette étude démontre que comme le plasma, les concentés de plaquettes peuvent transférer passivement des anticorps IgG contre le SARS-CoV-2 par le biais de transfusions de plaquettes. Les traitements spécifiques aux plaquettes n'ont pas d'impact sur ce transfert passif.<br/><br/>
    </div>
    </div>
  );
}

export default New3;
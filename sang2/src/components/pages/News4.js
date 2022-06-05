import React from "react";
import './News.css'
import background from "./img/maisonTransfusion1.png";

function New4() {
  return (<div>
    <div id='News1' style={{ backgroundImage: `url(${background})` }} className="page-heading">
      <div className="hStyle">
      <p> Des patients transfusés à leur domicile</p>
    </div></div>
    <div className="contenuStyle">
    Pour la première fois en Alsace, dix patients du centre d'hospitalisation à domicile de Colmar, ont pu bénéficier d'une transfusion sanguine à leur domicile, dans le cadre d'un souhait de faire évoluer les pratiques.<br/><br/>

Les patients dont la moelle osseuse ne fabrique plus ou peu de globules rouges nécessitent régulièrement des transfusions de sang. Une contrainte pour ces personnes malades chroniques, âgées, parfois en soins palliatifs. D'autant plus qu'ils doivent se rendre à l'hôpital pour bénéficier d'une transfusion sanguine.<br/><br/>

En effet, les patients doivent se lever tôt et passer plusieurs heures à l'hôpital pour se faire transfuser une ou deux poches de sang, et retourner chez eux en ambulance. Ces contraintes sont difficiles pour les patients fragiles.<br/><br/>

Depuis peu, une alternative est proposée par le centre d'Hospitalisation à domicile (HAD) de Colmar. Dix personnes en Alsace sont en train de tester la transfusion sanguine à domicile, en lien avec le service d'hématologie de l'Hôpital de Colmar et l'EFS. <br/><br/>

La veille de la transfusion, un bilan sanguin est réalisé. Le jour de la transfusion, un médecin et une infirmière se rendent au domicile du malade avec les poches de sang. Le premier jour ils sont deux, par la suite, un ou une infirmière assurera l'accompagnement. <br/><br/>

Une évaluation sera faite de cette expérimentation afin de déterminer son efficacité avant de l'étendre à d'autres patients.<br/><br/>
    </div>
    </div>
  );
}

export default New4;
import React from "react";
import './News.css'
import background from "./img/vac.jpg";

function New2() {
  return (<div>
      <div id='News1' style={{ backgroundImage: `url(${background})` }} className="page-heading">
          <div className="hStyle" >
          <p> Le vaccin non transmissible par transfusion</p>
      </div></div><div className="contenuStyle">
          Alors que certaines personnes se demandent si le vaccin à la Covid-19 est suspectible d'être transmis à un malade à la suite d'une transfusion sanguine, les spécialistes expliquent pourquoi cela n'est pas possible.<br /><br />

          Si l’on savait déjà que la vaccination contre le Covid-19 pouvait effrayer certaines personnes, les discussions sur internet ont mis en évidence que certaines personnes ont peur de recevoir le vaccin à travers une transfusion sanguine.<br /><br />

          Pourtant la transmission du vaccin par transfusion sanguine est impossible selon les scientifiques. Franck Mennechet, immunologiste et maître de conférences à l’université de Montpellier, avance deux explications.<br /><br />

          Tout d'abord, la vaccination est réalisée dans le muscle du bras et le vaccin n'est donc pas censé entrer en contact avec le sang. Mais même si cela arriverait par erreur, l’ARN messager est injecté dans un liposome qui a une durée de vie de quelques heures. Peu de chances donc de se retrouver dans le sang d’un donneur et d’être transmis par transfusion.<br /><br />

          De plus, la vaccination a pour but de stimuler les globules blancs pour qu'ils puissent produire des anticorps, sauf que ces cellules ne sont pas transfusées. En effet, après le don de sang, les globules blancs sont systématiquement éliminés pour ne pas être transfusés.<br /><br />

          En revanche, il existe d’autres vaccins, dits vivants, pour lesquels il y a un délai de contre-indication avant de pouvoir donner son sang. « Il y a des contre-indications pour des raisons de perturbation des tests biologiques. Il faut quatre semaines après une injection de vaccin contre la fièvre jaune par exemple avant de pouvoir donner son sang », explique la directrice médicale de l’Etablissement Français du Sang.<br /><br />
      </div>
    </div>
  );
}

export default New2;
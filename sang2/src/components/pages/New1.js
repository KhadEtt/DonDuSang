import React from "react";
import './News.css'
import background from "./img/pénurie2.jpg.png";

function New1() {
  return (<div>
    <div id='News1' style={{ backgroundImage: `url(${background})` }} className="page-heading">
      <div className="hStyle">
      <p> Le risque de pénurie refait surface:<br/>plus de 80% des actions mobiles annulées à cause d’Omicron</p>
    </div></div>
    <div className="contenuStyle">
    La propagation d’Omicron aggrave la pénurie du sang au Maroc. Au niveau du Centre régional de transfusion sanguine (CRTS) Casablanca-Settat, la situation devient de plus en plus critique, surtout avec l’annulation de plus de 80% des actions mobiles qui étaient programmées, notamment auprès des entreprises et des associations. Sa directrice, Amal Darid, lance un appel d’urgence aux citoyens pour faire don de leur sang et sauver des vies.<br/><br/>

Dans le contexte sanitaire actuel marqué par une recrudescence des cas de contamination à la Covid-19, liée en grande partie à Omicron, la problématique de stock de poches de sang refait surface avec le risque d'aggravation de la pénurie de ce produit de première nécessité au Maroc. Cette carence se fait sentir particulièrement au niveau des grands centres de transfusion sanguine tel que le CRTS de Casablanca-Settat qui dessert plus de 610 établissements entre le public, le privé, les centres d’hémodialyse ainsi que le CHU de Casablanca-Settat.<br/><br/>

Encore une fois, sa directrice, Amal Darid Ibnelfarouk, tire la sonnette d’alarme en indiquant qu'avec cette nouvelle vague épidémique, il est de plus en plus difficile de délivrer 600 poches de sang par jour pour satisfaire toutes les demandes. En effet, ajoute-t-elle, la situation ne cesse de s’empirer surtout avec l’annulation des actions mobiles de collecte qui étaient programmées, notamment au niveau des entreprises, des associations et des fondations. «À ce jour, plus de 80% des actions mobiles programmées ont été annulées, soit parce que des cas positifs à la Covid-19 ont été détectés dans les lieux de l'action, soit parce que les employés ont dû revenir au travail à distance», explique-t-elle. D’après la responsable, ce manque s’est fait rapidement sentir au niveau du centre du fait que les collectes mobiles alimentent jusqu’à 40% des rentrées de sang. Devant une telle situation, Dr Darid nous apprend que d’autres efforts ont été déployés en vue de trouver de nouveaux donateurs. Il s’agit, entre autres, de l’implication des influenceurs qui ont plus de 2 millions d’abonnés. «Chaque influenceur vient pour faire un don de sang et partage cette expérience avec ses suiveurs», détaille-t-elle. Et de préciser que cette expérience a connu un franc succès l’année dernière puisqu’elle a permis en trois mois de sauver 48.000 vies.<br/><br/>

La responsable indique aussi que le Centre a impliqué les étudiants des facultés et les ultras des équipes de Wydad et du Raja et qu’il a également contacté le ministère de l’Intérieur et les gouverneures pour augmenter le nombre de centres de proximité. Malgré ces signaux positifs, la directrice du CRTS lance un nouvel appel de cœur aux citoyens pour les inciter à donner de leur sang et sauver des vies. «Des mamans qui accouchent, des enfants qui font des séances d’hémodialyse ou encore des accidentés… toutes ces personnes ont un besoin vital qui peut être assuré si chaque citoyen donne quelques gouttes de son sang», souligne-t-elle. À ce titre, elle ne manque pas de rappeler que le don de sang constitue un acte citoyen, solidaire et volontaire, mais aussi et surtout, une culture à inculquer aux enfants dès leur jeune âge.<br/><br/>
    </div>
    </div>
  );
}

export default New1;
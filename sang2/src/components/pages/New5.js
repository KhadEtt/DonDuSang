import React from "react";
import './News.css'
import background from "./img/james.png";

function New5() {
  return (<div>
    <div id='News1' style={{ backgroundImage: `url(${background})` }} className="page-heading">
      <div className="hStyle">
      <p> «l’homme au bras d’or»<br/> 1173 dons du sang en 60 ans</p>
    </div></div>
    <div className="contenuStyle">
      <h4>Parce que son sang contient des anticorps rares, James Harrison, <br/>surnommé «l’homme au bras d’or», a réalisé 1173 dons du sang en 60 ans<br/> Un record mondial<br/><br/></h4>
    En 60 ans, James Harrison n’a jamais manqué ce rendez-vous régulier. Toutes les deux semaines depuis 1967, cet Australien a donné 800 millilitres de plasma sanguin. Et vendredi 11 mai, l’octogénaire a réalisé son 1173ème et dernier don. En effet, en Australie, il n’est plus possible de donner son sang passé 81 ans. «L’homme au bras d’or» prend donc une retraite bien méritée et espère voir son record battu «parce que cela signifiera que d’autres sont dévoués à la cause», comme il l’a déclaré lors de son dernier don.<br/><br/>
    Si James Harrison a donné autant de sang, c’est parce que celui-ci contient un ingrédient très précieux, seul traitement préventif à la maladie hémolytique du nouveau-né. Il s’agit d’un anticorps, l’immunoglobuline anti-D, qui permet de fabriquer un médicament administré aux femmes enceintes dont le sang est incompatible avec celui de leur bébé. Une injection d’anti-D permet d’empêcher que le système immunitaire de la mère ne développe des anticorps dirigés contre les globules rouges du foetus. Si rien n’est fait, la mère fabriquera des anticorps qui resteront dans son organisme et qui pourraient s’avérer très dangereux pour l’enfant à naître ou lors d’une prochaine grossesse, exposant l’enfant à d’importants dommages cérébraux voire à une anémie fatale.<br/><br/>
    Entre 1967 et 2015, les dons de James Harrison ont permis de fabriquer la totalité des doses d’anti-D utilisées en Australie, soit plus de 3 millions. Sa propre fille en a d’ailleurs reçu au cours de ses grossesses. «Très peu de personnes ont ces anticorps et ils sont particulièrement nombreux chez James, expliquait la porte-parole de l’Australian Red Cross blood service en 2015. Son corps en produit beaucoup et plus il donne son sang, plus son corps en fabrique. Cela fait de lui un cas très spécial». Et les besoins sont importants, puisque près de 17% des femmes enceintes en Australie ont besoin d’une injection d’Anti-D. Grâce à cela, le nombre de décès d’enfants a été divisé par 100, pour atteindre 0,01 décès pour 1000 naissances. En France, 90.000 femmes seraient concernées chaque année.<br/><br/>
    Cet attrait pour le don, James Harrison le tient de sa propre histoire. Lorsqu’il était âgé de 14 ans, il a subi une importante opération chirurgicale qui a nécessité des transfusions sanguines. C’est à ce moment-là que l’envie de devenir donneur lui vient, et ce malgré la crainte des piqûres. Quatre ans plus tard, alors qu’il fête son 18e anniversaire, il commence à donner son sang. Mais il faudra encore attendre une décennie pour que les médecins découvrent que celui-ci contient un anticorps rare et nécessaire à la fabrication de doses d’Anti-D. Au cours des années 1990, il intègre le premier programme mondial de collecte de plasma Anti-D. Il a depuis été rejoint par 200 donneurs dont le sang présente des bienfaits similaires.<br/><br/>
    </div>
    </div>
  );
}

export default New5;
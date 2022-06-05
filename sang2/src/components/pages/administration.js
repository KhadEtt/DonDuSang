import './administration.css';
import {useState} from 'react';
import Axios from 'axios';
function Administration() {
    const [donneurlist,setDonneurlist] = useState([]);
    const getDonneurs = () =>{
        Axios.get("http://localhost:3001/donneurs").then((response)=>{
    
          setDonneurlist(response.data);
        })
      }
return(
<div className='admi'>
     <button id='#butt1' onClick={getDonneurs}>show donneur</button>
     
     {donneurlist.map((val,key) => {
       return<div className='donneur'>
       <h3> nom: {val.Nom}</h3>
       <h3> prenom:{val.Prenom}</h3>
       <h3>age:{val.Age}</h3>
       <h3>cin:{val.CIN}</h3>
       <h3>Sexe:{val.Sexe}</h3>
       <h3>Email:{val.Email}</h3>
       <h3>Password:{val.Password}</h3>
       <h3>Confirm:{val.Confirm}</h3>
       <h3>CodePostal:{val.CodePostal}</h3>
       <h3>Poids:{val.Poids}</h3>
       <h3>BloodType:{val.BloodType}</h3>
      
       
       </div>
     })}
      </div>



);
}
export default Administration;

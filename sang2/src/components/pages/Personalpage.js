import React from "react";
import axios from "axios";
import {useNavigate}  from "react-router-dom";
import './personalpage.css'
import { useEffect, useState } from "react";


function Personalpage() {
  const [listOfConnexion, setListOfConnexion] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3001/rendezvouss").then((response) => {
      setListOfConnexion(response.data);
    });
  }, []);

  return (
  <div className="scroll0">
    <div id="page-heading"  className="page-heading">
      <div id='mySpace0'>
        <div id="RendezVous">
          {listOfConnexion.map((value, key) => {
        return (
          <div id="post">
            <div className="title"> {value.centre} </div>
            <div className="body">{value.date}</div>
            <div className="footer">{value.CIN}</div>
        <div className="footer">{value.time}</div>
          </div>
        );
      })}
        </div>
        <button onClick={() =>{navigate("/createRendezVous")}} id="button2">Ajouter</button>
      </div>
     
    </div>
  </div>
  );
}

export default Personalpage;
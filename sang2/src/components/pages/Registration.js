import { useState } from "react";
import "./registrat.css";
import Input2 from "./input2/input2";


const Registration = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "prénom",
      type: "text",
      placeholder: "prénom",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Prénom",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
        id: 2,
        name: "Nom",
        type: "text",
        placeholder: "Nom",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Nom",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 2,
        name: "CIN",
        type: "text",
        placeholder: "CIN",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "CIN",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
      {
        id: 2,
        name: "Age",
        type: "Number",
        placeholder: "Age",
        errorMessage:
          "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Age",
        pattern: "^[A-Za-z0-9]{3,16}$",
        required: true,
      },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "Mot de passe",
      type: "Mot de passe",
      placeholder: "Mot de passe",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Mot de passe",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
        id: 5,
        name: "Confirmer le Mot de passe",
        type: "Confirmer le Mot de passe",
        placeholder: "Confirmer le Mot de passe",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Confirmer le Mot de passe",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {
        id: 5,
        name: "Pays",
        type: "Pays ",
        placeholder: "Pays",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Pays",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {
        id: 5,
        name: "Ville",
        type: "Ville ",
        placeholder: "Ville",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "ville",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {
        id: 5,
        name: "Adresse",
        type: "Adresse",
        placeholder: "Adresse",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Adresse",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
      {
        id: 5,
        name: "Poid",
        type: "Number",
        placeholder: "Poids",
        errorMessage:
          "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Poids",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
      },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="scroll4">
    <div className="app4">
      <form className="formStyle4" onSubmit={handleSubmit}>
        <h3>Formulaire d'inscription</h3>
        {inputs.map((input) => (
          <Input2
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div>
         <label>
            SEXE:<br/>
         </label>
         <div id='butS'><button id='butSvalue'>HOMME</button>  <button id='butSvalue'>FEMME</button></div>
      </div>
    
      
    <div>
      <label>Type de sang:<br/><br/></label>
      <select placeholder="veillez choisir un type">
     <option>B-</option>
     <option>B+</option>
     <option>AB+</option>
     <option>AB-</option>
     <option>A-</option>
     <option>A+</option>
     <option>O-</option>
     <option>O+</option>
   </select>
   <div/>
   </div>
        <button id="#butt">Envoyer</button>
      </form>
    </div>
  </div>
  );
};

export default Registration;
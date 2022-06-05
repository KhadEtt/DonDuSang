import React from "react";
import "./registrat.css";
import {useNavigate}  from "react-router-dom";
import './createrendezvous.css';
import { Formik, Form,Field,ErrorMessage} from "formik";
import Footer from "./Footer/footer";
import * as Yup from "yup";
import axios from "axios";
import TextField  from './TextField';




function ModifyRegistration() {
 
      const onSubmit = (data) => {
        axios.post("http://localhost:3001/register", data).then(() => {
          console.log("IT WORKED");
        });
      }
      const validationSchema = Yup.object({
        Prenom: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        Nom: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        CIN: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Confirm password is required'),
        Sexe: Yup.string()
          .required('Required'),
        BloodType: Yup.string()
          .required('Required'),
        Poids: Yup.number().required('Required'),
        CodePostal: Yup.number().required('Required'),
        Age: Yup.number().required('Required'),
      });
      const initialValues = {
        id:"",
        Nom:"",
        prenom:"",
        age:"",
        cin:"",
        sexe:"",
        email:"",
        password:"",
        confirm: "",
        CodePostal: "",
        poids:"",
        bloodtype: ""
      };

  
  return (
    /*<div className="scroll4">
    <div className="app4">*/
      <form className="formStyle4" >
        <h3>Formulaire d'inscription</h3>
        <div className="formInput">
        <Formik
       
       onSubmit={onSubmit}
       initialValues={initialValues}
       validationSchema={validationSchema}
     >

{formik => (
        <div>
        
          <Form>
          <TextField label="id" name="id" type="Number" />
          <TextField label="Prenom" name="prenom" type="text" />
            <TextField label="Nom" name="Nom" type="text" /> 
           
            <TextField label="CIN" name="cin" type="text" /><br/>
            <TextField label="Age" name="age" type="Number" /><br/>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirm" type="password" />
            <TextField label="Code Postal" name="CodePostal" type="Number" /><br/>
            <TextField label="Poids" name="poids" type="Number" /><br/>
            <Field className='input3' as="select" name="Sexe" required>
            <option className="input2" defaultValue>Choisissez votre sexe</option>
             <option className="input2" value="homme">Homme</option>
             <option className="input2" value="femme">Femme</option>
           </Field><ErrorMessage component="div" name="sexe" className="error" />
 <Field className='input3' as="select" name="bloodtype" required>
           <option defaultValue>Choisissez votre type sanguin</option>
             <option className="input2" value="AB+">AB+</option>
             <option className="input2" value="AB-">AB-</option>
             <option className="input2" value="B+">B+</option>
             <option className="input2" value="A+">A+</option>
             <option className="input2" value="B-">B-</option>
             <option className="input2" value="A-">A-</option>
             <option className="input2" value="O+">O+</option>
             <option className="input2" value="O-">O-</option>
           </Field><br/>

<ErrorMessage component="div" name="BloodType" className="error" />
            <button  type="submit">Valider</button>
          </Form>
        </div>
      )}



     </Formik>
    </div>
  </form>
/*</div>
    
     
    </div>*/
  );
}

export default ModifyRegistration;

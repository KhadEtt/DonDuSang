import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import axios from "axios";
import TextField  from './TextField';
import {useNavigate}  from "react-router-dom";
import "./demo2.css";


const Demo2 = () => {
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/connexion", data).then((response) => {
      console.log("IT WORKED");
    });
  }
  const validationSchema = Yup.object({
    
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });
  const initialValues = {
    
    Email:"",
    Password:"",
  };

  let navigate = useNavigate();
  return (
    <div className="scroll2">
    <div className="app2">
      <form className="formStyle2" >
        <h4>Connexion</h4>
        <Formik
       
       onSubmit={onSubmit}
       initialValues={initialValues}
       validationSchema={validationSchema}
     >

{formik => (
        <div>
          <Form id='formStyle'>
          
            <TextField  id='field' label="Email" name="Email" type="email" /><br/>
            <TextField  id='field' label="password" name="Password" type="password" />
          </Form>
        </div>
      )}



     </Formik>
        <div id='styleButt'>
        <button type="submit" onClick={() =>{navigate("/personalpage")}} id="button2">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Demo2;
import React from "react";
import {useNavigate}  from "react-router-dom";
import './createrendezvous.css';
import { Formik, Form} from "formik";

import * as Yup from "yup";
import axios from "axios";
import TextField  from './TextField';

function Createrendezvous() {
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/rendezvouss", data).then((response) => {
      console.log("IT WORKED");
    });
  }
  const validationSchema = Yup.object().shape({
    id: Yup.number().required('Il faut que vous choisissez une date!'),
    centre: Yup.string().min(3).max(15).required("Il faut que vous ajouter un centre de don !"),
    date: Yup.date().required('Il faut que vous choisissez une date!'),
    time: Yup.string().required('Il faut que vous choisissez un temps!!'),
    centre: Yup.string().min(3).max(15).required("Il faut que vous ajouter un centre de don !")
  });
  const initialValues = {
    id:"",
    centre: "",
    date: "",
    time:"",
    CIN:""
  };
  let navigate = useNavigate();
  return (
  <div
  className="formInput"
  id='formik'>
  
     <Formik
       
       onSubmit={onSubmit}
       initialValues={initialValues}
       validationSchema={validationSchema}
     >

{formik => (
        <div>
          <h1 >Rendez-vous</h1>
          <Form>
            <TextField label="id " name="id" type="number" /><br/>
            <TextField label="centre" name="centre" type="text" /><br/>
            <TextField label="date" name="date" type="date" /><br/>
            <TextField label="time" name="time" type="time" /><br/>
            <TextField label="CIN" name="CIN" type="text" /><br/>
            <button  type="submit">Valider</button>
            <button  type="reset">Reset</button>
          </Form>
        </div>
      )}



     </Formik>
   
 </div>
 );
}

export default Createrendezvous;

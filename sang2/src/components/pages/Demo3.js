//import { useState } from "react";
import React from "react";
import "./demo3.css";
//import Input from "./input/input";
import {useNavigate}  from "react-router-dom";
//import {NavLink} from 'react-router-dom';

const Demo3 = () => {
 /* const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
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
  
  function handleClick(){
    navigate("/registration")
  };*/
  
  let navigate = useNavigate();
  return (
    <div className="scroll3" >
        
    <div className="app3">
      <form className="formStyle3" /*onSubmit={handleSubmit}*/ >
      <div className="div0">
        <h1>Test d'éligibilité</h1></div>
        {/*{inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}*/}
        
     <br/><br/>
     
     <hr/>
     <h2 className="styleH2">Ce questionnaire est indicatif et ne remplace ni le questionnaire médical, ni l’examen médical réalisé par un médecin avant le don. Il se peut donc que, dans certaines situations, le médecin ne vous autorise pas à donner votre sang temporairement ou bien définitivement, bien que ce questionnaire en ligne donne comme résultat que vous pouvez donner. Cette décision est prise avant tout pour s’assurer que vous pouvez donner sans danger pour vous-même et pour les malades qui recevront votre sang. Il est dès lors important que vous répondiez en toute honnêteté au questionnaire ainsi qu’à l’entretien médical.
     </h2>
     <hr/>
        <div className="div1">
                     {/* header section */}
                   { /* <div className='div2'>
                         <p className='div3'>Validate Radio Input</p>
                     </div>*/}


                     {/* body section */}
                     <div>
                         <div className='div4'>
                             <div>
                                 <p className='div5'>Vous êtes âgé entre 18 et 65 ans?</p>
                             </div>
                             <div className='div6'>
                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Oui'
                                     className='div11'
                                  
                                    />{/*{...register("tradeType", { required: 'Trade type is required' }*/}
                                     <p className='div8'>Oui</p>
                                 </div>

                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Non'
                                     className='div11'
                                     /*{...register("tradeType", { required: 'Trade type is required' })}*/
                                     />
                                     <p className='div8'>Non</p>
                                 </div>

                                
                             </div>
                             <div>
                            {/* {errors.tradeType && <span className='text-sm text-red-500'>{errors.tradeType.message}</span>}*/}
                             </div>

                         </div>
                         {/*ques2*/}
                         <div className='div4'>
                             <div>
                                 <p className='div5'>Pesez-vous au moins 50 kg ?</p>
                             </div>
                             <div className='div6'>
                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Oui'
                                     className='div11'
                                  
                                    />{/*{...register("tradeType", { required: 'Trade type is required' }*/}
                                     <p className='div8'>Oui</p>
                                 </div>

                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Non'
                                     className='div11'
                                     /*{...register("tradeType", { required: 'Trade type is required' })}*/
                                     />
                                     <p className='div8'>Non</p>
                                 </div>  
                             </div>
                             <div>
                            {/* {errors.tradeType && <span className='text-sm text-red-500'>{errors.tradeType.message}</span>}*/}
                             </div>
{/*ques3*/}

{/*ques4*/}
<div className='div4'>
                             <div>
                                 <p className='div5'>Avez-vous bénéficié d’un détartrage dans les 24 dernières heures ou d’un traitement dentaire dans les 7 derniers jours ?</p>
                             </div>
                             <div className='div6'>
                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Oui'
                                     className='div11'
                                  
                                    />{/*{...register("tradeType", { required: 'Trade type is required' }*/}
                                     <p className='div8'>Oui</p>
                                 </div>

                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Non'
                                     className='div11'
                                     /*{...register("tradeType", { required: 'Trade type is required' })}*/
                                     />
                                     <p className='div8'>Non</p>
                                 </div>

                                
                             </div>
                             <div>
                            {/* {errors.tradeType && <span className='text-sm text-red-500'>{errors.tradeType.message}</span>}*/}
                             </div>

                         </div>
{/*ques5*/}
<div className='div4'>
                             <div>
                                 <p className='div5'>Avez-vous reçu une transfusion depuis le 01.01.1980 ?</p>
                             </div>
                             <div className='div6'>
                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Oui'
                                     className='div11'
                                  
                                    />{/*{...register("tradeType", { required: 'Trade type is required' }*/}
                                     <p className='div8'>Oui</p>
                                 </div>

                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Non'
                                     className='div11'
                                     /*{...register("tradeType", { required: 'Trade type is required' })}*/
                                     />
                                     <p className='div8'>Non</p>
                                 </div>

                                
                             </div>
                             <div>
                            {/* {errors.tradeType && <span className='text-sm text-red-500'>{errors.tradeType.message}</span>}*/}
                             </div>

                         </div>
{/*ques6*/}
<div className='div4'>
                             <div>
                                 <p className='div5'>Avez-vous été atteint du COVID-19 dans les 28 jours qui précèdent le don ?</p>
                             </div>
                             <div className='div6'>
                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Oui'
                                     className='div11'
                                  
                                    />{/*{...register("tradeType", { required: 'Trade type is required' }*/}
                                     <p className='div8'>Oui</p>
                                 </div>

                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Non'
                                     className='div11'
                                     /*{...register("tradeType", { required: 'Trade type is required' })}*/
                                     />
                                     <p className='div8'>Non</p>
                                 </div>

                                
                             </div>
                             <div>
                            {/* {errors.tradeType && <span className='text-sm text-red-500'>{errors.tradeType.message}</span>}*/}
                             </div>

                         </div>
{/*ques7*/}
<div className='div4'>
                             <div>
                                 <p className='div5'>Avez-vous déjà eu un cancer autre que le carcinome basocellulaire ou le carcinome in situ du col de l'utérus (CIN)?</p>
                             </div>
                             <div className='div6'>
                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Oui'
                                     className='div11'
                                  
                                    />{/*{...register("tradeType", { required: 'Trade type is required' }*/}
                                     <p className='div8'>Oui</p>
                                 </div>

                                 <div className='div7'>
                                     <input
                                     type='radio'
                                     value='Non'
                                     className='div11'
                                     /*{...register("tradeType", { required: 'Trade type is required' })}*/
                                     />
                                     <p className='div8'>Non</p>
                                 </div>

                                
                             </div>
                             <div>
                            {/* {errors.tradeType && <span className='text-sm text-red-500'>{errors.tradeType.message}</span>}*/}
                             </div>

                         </div>



















                         </div>

 <div className='div9'>
                         <button 
                         id="div10"
                         
                         onClick={() =>{navigate("/registration2")}}>
                          Valider
                         </button>
                        </div>


</div> 
                     </div>
                     
                     </form>



                     
                     {/* btn section */}
                     
                     
                 
            
  
      
        
     
    </div>
  </div>
  );
};

export default Demo3;
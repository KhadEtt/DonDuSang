import React from "react";
import ReactDOM from "react-dom";
//import "./styles.css";
class Test extends React.Component{
  constructor(props){
    super(props);
    this.state ={value:''};
    this.handlechange=this.handlechange.bind(this);
    this.handlesubmit=this.handlesubmit.bind(this);

  }
handlechange(event){
  this.setState({value:event.target.value})
}
handlesubmit(event){
alert('désolé impossible de donner votre sang :');
event.preventDefault();
}
render(){
  return(
    <form ><fieldset>
      <h1> suis-je éligible au don de sang</h1></fieldset><br/><br/> 
      <fieldset>
      <label>
        SEXE:<br/><br/>
      <button>HOMME</button>  <button>FEMME</button>
   </label></fieldset><br/>
   <fieldset>
   <label>
     POIDS :<br/><br/>
     <button onClick={this.handlesubmit}>-50</button>  <button>+50</button>
   </label></fieldset><br/>
   <fieldset>
   <label>
     AGE :<br/><br/>
     <button onClick={this.handlesubmit}>-18</button>  <button>de 18 à 70</button> <button onClick={this.handlesubmit}>+70</button>
   </label></fieldset><br/><fieldset>
   <label>TYPE DE SANG :</label><br/><br/>
   <select>
     <option>B-</option>
     <option>B+</option>
     <option>AB+</option>
     <option>AB-</option>
     <option>A-</option>
     <option>A+</option>
     <option>O-</option>
     <option>O+</option>
     
   </select></fieldset>
   </form>
  )
}
}
ReactDOM.render(<Test/>,document.getElementById('root'));
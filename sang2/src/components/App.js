import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import Donner from "./pages/Donner";
import Actualite from "./pages/Actualite";
import "./App.css";
/*import Footer from "./Footer/footer"*/
import Demo2 from "./pages/Demo2";
import Demo3 from "./pages/Demo3";
import Registration from "./pages/Registration";
import Registration2 from "./pages/Registration2";
import Inscription from "./pages/Inscription";
import New1 from "./pages/New1";
import New2 from "./pages/New2";
import New3 from "./pages/News3";
import New4 from "./pages/News4";
import New5 from "./pages/New5";
import New6 from "./pages/New6";
import NonEligible from "./pages/NonEligible";
import Administration from "./pages/administration";
import Personalpage from "./pages/Personalpage";
import Createrendezvous from "./pages/Createrendezvous";
//import RegistrationAppear from  "./pages/RegistrationAppear";
function App() {
  return (
    <div className="container" >
      <div className="scroll">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/actualite" exact element={<Actualite/>} />
          <Route path="/donner" exact element={<Donner/>} />
          <Route path="/demo" exact element={<Demo />} />
          <Route path="/demo2" exact element={<Demo2/>} />
          <Route path="/demo3" exact element={<Demo3/>} />
          <Route path="/registration" exact element={<Registration/>} />
          <Route path="/inscription" exact element={<Inscription/>} />
          <Route path="/registration2" exact element={<Registration2/>} />
          <Route path="/new1" exact element={<New1/>} />
          <Route path="/new2" exact element={<New2/>} />
          <Route path="/news3" exact element={<New3/>} />
          <Route path="/news4" exact element={<New4/>} />
          <Route path="/new5" exact element={<New5/>} />
          <Route path="/new6" exact element={<New6/>} />
          <Route path="/administration" exact element={<Administration/>} />
          <Route path="/nonEligible" exact element={<NonEligible/>} />
          <Route path="/personalpage" exact element={<Personalpage/>} />
          <Route path="/createrendezvous" exact element={<Createrendezvous/>} />
        </Routes>
        {/*<Registration/>*/}

      </BrowserRouter>
    </div>
  </div>
  );
}

export default App;


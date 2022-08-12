import React from "react"; 
import Header from "./components/Header";
import "./App.css"
import Template from "./components/Template";
import MainBody from "./components/MainBody"; 
import { BrowserRouter as Router ,Switch, Route } from "react-router-dom"; 
import Formheader from "./components/Formheader"
import Centeredtabs from "./components/Tabs";
import Question_form from "./components/Question_form";
import Userform from "./components/Userform"; 
import Survey from "./components/Survey";
import Worksheet from "./components/Worksheet";
import Save from "./components/Save";
function App() {
  return (
    <div className="app">
      <Router basename="/IITISoC-GoogleFormClone">
        <Switch>
          <Route path="/form/:id">
            <Formheader/> 
            <Centeredtabs/> 
            {/* <Question_form/>  */}
          </Route>
          <Route path="/contactinfo/:id">
           <Survey />
           
          </Route>
          <Route path="/Worksheet/:id">
           <Worksheet />
           
          </Route>
          <Route path="/Save/:id">
           <Save />
           
          </Route>
          <Route path="/response">
            <Userform/> 
            </Route> 
            <Route path="/">  
      <Header/>
      <Template/> 
      <MainBody/>                 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


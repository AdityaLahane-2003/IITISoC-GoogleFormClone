import React from "react";
import MoreVerticon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import MoreVert from "@material-ui/icons/MoreVert";
import "./Template.css";
import blank from "./blank1.png";
import party from "./pi.jpg";
import contact from "./ci.png";
import Worksheet from "./ws.png";
import uuid from "react-uuid";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Template() {

  const history = useHistory(); 
   
  function createForm(){
    var create_form_id = uuid();
    console.log(create_form_id)

    var questions_list = [{questionText:"Question", questionType:"radio", options : [{optionText:"Option 1"}], open:true, required:false}]
      axios.post(`https://localhost:9000/add_questions/${create_form_id}`, {
        "document_name":"untitled_form",
        "doc_desc":"Add Description",
        "questions":questions_list,
      })  
      history.push("/form/" + create_form_id)
};
//   const createForm = () => {
//     const id_ = uuid();
//     console.log(id_);
//     // const history = useNavigate();
//     history.push("/form/" + id_);
//     // console.log("Clicked")
//   };
  const createdForm = () => {
    const id_ = uuid();
    console.log(id_);
    // const history = useNavigate();
    history.push("/contactinfo/" + id_);
    // console.log("Clicked")
  };
  const createddForm = () => {
    const id_ = uuid();
    console.log(id_);
    // const history = useNavigate();
    history.push("/Worksheet/" + id_);
    // console.log("Clicked")
  }; 

  

  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fonatSize: "160px", color: "#202124" }}>
            Start New Form
          </span>
        </div>
        <div className="template_right">
          <div className="gallary_button">
            Template Gallary
            <UnfoldMoreIcon />
          </div>
          <IconButton>
            <MoreVerticon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="template_body">
        <div className="card" onClick={createForm}>
          <img src={blank} alt="Loading" className="card_image" />
          <p className="card_title">Blank</p>
        </div>
        <div className="card" onClick={createdForm}>
          <img src={contact} alt="Loading" className="card_image" />
          <p className="card_title">Contact Information</p>
        </div>
        <div className="card" onClick={createddForm}>
          <img src={Worksheet} alt="Loading" className="card_image" />
          <p className="card_title">Worksheet</p>
        </div>
        <div className="card">
          <img src={party} alt="Loading" className="card_image" />
          <p className="card_title">Party Invitation</p>
        </div>
      </div>
    </div>
  );
}

export default Template;

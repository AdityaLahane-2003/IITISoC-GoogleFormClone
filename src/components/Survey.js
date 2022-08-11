import React from 'react'
import "./survey.css"
import "./Survey.js"
import uuid from 'react-uuid';
import {useHistory} from "react-router-dom";
function Survey() {
	const history = useHistory(); 
    const Saveform = () => {
        const id_ = uuid();
        console.log(id_);
        // const history = useNavigate();
        history.push("/Save/" + id_);
        // console.log("Clicked")
      }; 
  return (

	  

    <div className='body'>

	<div className="forms">
		<div className="title-div">
			<h1>Survey</h1>
			<p>This is a google form. This form is created with HTML and CSS.</p>
			<p className="required">*Required</p>
		</div>

		<div className="name-div">
			<div className="name">What is your name?<span className="required">*</span></div>
			<div className="input-div"><input type="input" name="answer" placeholder="Your answer" /></div>
		</div>

		<div className="college-div">
			<div className="name">Enter  your college name.</div>
			<div className="input-div"><input type="input" name="answer" placeholder="Your answer" /></div>
		</div>

		<div className="gmail-div">
			<div className="name">Enter  your email.<span className="required">*</span></div>
			<div className="input-div"><input type="input" name="answer" placeholder="Your email" /></div>
		</div>

		<div className="mobile-div">
			<div className="name">Enter  your mobile no.</div>
			<div className="input-div"><input type="input" name="answer" placeholder="Your answer" /></div>
		</div>
 
        <div className="add-div">
			<div className="name">Enter  your Address :</div>
			<div className="input-div"><input type="input" name="answer" placeholder="Your answer" /></div>
		</div>
        
		<div onClick={Saveform}>
			<input className="btn" type="submit" name="Submit" />
		</div>

		<div className="last-div">
			<p className="never">Never submit passwords through Google Forms.</p>
			<p className="term">This content is neither created nor endorsed by Google, Report Abuse - Term of Service - Private Policy</p>
			<h2>Google Forms</h2>
		</div>
		





	</div>
	</div> 
   






	
  )
}

export default Survey

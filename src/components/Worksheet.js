import React from 'react'
import "./Worksheet.js"
import "./Worksheet.css"  
import uuid from 'react-uuid';
import {useHistory} from "react-router-dom";
// import {useHistory} from "react-router-dom"; 
// import {Button} from "@material-ui/core";

function Worksheet() {  
    const history = useHistory(); 
    const Saveform = () => {
        const id_ = uuid();
        console.log(id_);
        // const history = useNavigate();
        history.push("/Save/" + id_);
        // console.log("Clicked")
      }; 
    // function submit(){
    //     answer.map((ele)=>{
    //      post_answer_data[ele.question] = ele.answer
    //     })
        
    //    axios.post(`http://localhost:9000/student_response/${doc_name}`,{
    //        "column": quest,
    //        "answer_data" :[post_answer_data]
    //    })
     
    //    history.push(`/submitted`)
     
    //  } 

  return (
    <div className='bodys'>
        <div className='form'>

    <div>
      

  
    
      <div className="sectiona"> 
       

            <h1>
                Untitled Form
            </h1><hr/>

            {/* <p>
                <b>ash*******@gmail.com</b> <a href="https://google.com/">switch account</a>
            </p> */} 

            <p>
                The name and photo associated with your google account will be recorded when you upload files and submit this form. Your email is not part of your response. 
            </p>
        </div>

        

        <div className="sectionb">

            <label>Single Correct :<sup className="required">*</sup><br></br>
    
      <label>
	
        <input type="radio" name="myRadiobuttons" value="option 1" required  />
	
        Option 1 

    </label><br></br>
      
    <label>
	
        <input type="radio" name="myRadiobuttons" value="option 2" required />
	
        Option 2 
      
    </label><br></br>
      
    <label>
	
        <input type="radio" name="myRadiobuttons" value="option 3" required />
	
        Option 3

    </label>  <br></br>

    </label>  <br></br>
    
    </div>


<div className="sectionb">

  Your name:<sup className="required">*</sup><br></br>

    <input type="text" name="myInput" placeholder="Your answer" size="30" spellcheck required />


</div>
    
<div className="sectionb">

    <label >File upload:<sup className="required">*</sup><br></br>

    <input type="file" name="myInput" accept="image/*, .pdf" required />

    </label><br></br>

</div>

<div className="sectionb">

<label>Multiple Correct:<sup className="required">*</sup>

<label><br></br>

<input type="checkbox" name="myCheckbox" value="o" required />

Option 1 

</label><br></br>

<label>

<input type="checkbox" name="myCheckbox" value="option 2" required />

Option 2 

</label><br></br>

<label>

<input type="checkbox" name="myCheckbox" value="option 3" required />

Option 3

</label>   <br></br>

</label> <br></br>

</div>

<div className="sectionb">

    <label>Dropdown:<sup className="required">*</sup>

    <select name="dropdown" className="dropdown">

        <option value="option 1">Option 1</option>

        <option value="option 2">Option 2</option>

        <option value="option 3">Option 3</option>

      </select>

    </label><br></br>
      

</div>

<div className="container" onClick={Saveform}>

<input type="submit" name="submit" value="Submit" /> <input type="reset" value="Clear form" />

</div> 
    </div> 
    {/* <div className="user_form_submit">
              <Button  variant="contained" color="primary" onClick={submit} style={{fontSize:"14px"}}>Submit</Button>

            </div> */} 
    <div className="last-div">
			<p className="never">Never submit passwords through Google Forms.</p>
			<p className="term">This content is neither created nor endorsed by Google, Report Abuse - Term of Service - Private Policy</p>
			<h2>Google Forms</h2>
		</div>
        </div>



    </div>
  )
}

export default Worksheet

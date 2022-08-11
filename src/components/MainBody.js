import React from 'react' 
import {useState} from 'react'
import StorageIcon from "@material-ui/icons/Storage"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import FolderOpenIcon from "@material-ui/icons/FolderOpen"
import {IconButton} from "@material-ui/core"
import "./MainBody.css"
import MoreVertIcon from '@material-ui/icons/MoreVert'; 
import doc_image from "./doc1.jpg"
import axios  from 'axios'; 
import {useHistory} from 'react-router-dom';
function MainBody() { 

       const history = useHistory();

       function navigate_to(docname){
        var fname=docname.split(".");
        history.push("/form/" + fname[0])
       }
  const [files,setFiles]=useState([]); 

  async function filenames(){ 
    
    var request = await axios.get("http://localhost:9000/get_all_filenames")
    let filenames = request.data;
    setFiles(filenames)
  } 
  filenames()  
  return (
    <div className="mainbody">
      <div className="mainbody_top">
        <div className="mainbody_top_left" style={{fontSize:"16px", fontWeight:"500"}}>
            Recent Forms 
        </div>
        <div className="mainbody_top_right">
            <div className="mainbody_top_center" style={{fontSize:"14px", marginRight:"125px"}}>Owned By Anyone<ArrowDropDownIcon/></div> 
            <IconButton>
                <StorageIcon style={{fontSize:"16px", color:"black"}}/>
            </IconButton>
            <IconButton>
                <FolderOpenIcon style={{fontSize:"16px", color:"black"}}/>
            </IconButton>
        </div>

        </div>
        <div className="mainbody_docs"> 
      {  files.map((ele)=> (
          <div className="doc_card" onClick={()=>{
            navigate_to(ele)
          }} > 
                      
            <img src={doc_image} className="doc_image"/> 
            <div className="doc_card_content">
                <h5  style={{overFlow:"ellipsis"}}></h5>
                <div className="doc_content" style={{fontSize:"12px", color:"grey"}}>
                   <div className="content_left"> 
                      <StorageIcon style={{color:"white", backgroundcolor:"#6E2594", fontSize:"12px", padding:"3px", marginRight:"3px", borderRadius:"2px"}}/> 
                   </div>
                   <MoreVertIcon style={{fontSize:"16px", color:"grey"}}/> 
                </div>
            </div> 

          </div>
        ))} 
        </div>
    </div> 
  )
}

export default MainBody
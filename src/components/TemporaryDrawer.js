import React from "react"; 
import MenuIcon from "@material-ui/icons/Menu"
import {IconButton, Input, ListItemText, makeStyles} from "@material-ui/core"
import Drawer from "@material-ui/core/Drawer" 
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem"; 
import {FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"
import formimage from  "./form.png" 
import excelsheetimage from "./sheet.png"
import docimage from "./doc.png"
import slidesimage from "./slide.png"
import driveimage from "./drive.png" 
import Divider from "@material-ui/core/Divider" 
import "./Drawer.css"; 
const useStyles = makeStyles({
           listitem:{
            marginLeft:"20px", fontSize:"14px",color:"grey",fontWeight:"500"
           },
           slideImages:{
            height:"20px",width:"20px"
           }
});
function TemporaryDrawer(){ 
    const classes = useStyles();
    const [state,setState] = React.useState({
        left:false
    }) 
    const toggleDrawer =(anchor, open)=> (event) => {
        setState({...state, [anchor]: open});
    }; 
    const list = (anchor)=>(
        <div style={{width:"250px"}} role="presentation">
                 <Divider/>
        <List>
          <ListItem>
            <ListItemText style={{fontsize:"48px",marginLeft:"5px"}}>
                  <span style={{color:"blue",fontWeight:"700", fontSize:"22px", fontFamily:"'Product Sans',Arial,sans-serif"}}>G</span>
                  <span style={{color:"red",fontWeight:"500", fontSize:"22px", fontFamily:"'Product Sans',Arial,sans-serif"}}>o</span>
                  <span style={{color:"yellow",fontWeight:"500", fontSize:"22px", fontFamily:"'Product Sans',Arial,sans-serif"}}>o</span>
                  <span style={{color:"blue",fontWeight:"500", fontSize:"22px", fontFamily:"'Product Sans',Arial,sans-serif"}}>g</span>
                  <span style={{color:"green",fontWeight:"500", fontSize:"22px", fontFamily:"'Product Sans',Arial,sans-serif"}}>l</span>
                  <span style={{color:"red",fontWeight:"500", fontSize:"22px", marginRight:"10px", fontFamily:"'Product Sans',Arial,sans-serif"}}>e</span> 
                  <span style={{color:"#5f6368",fontWeight:"500", fontSize:"22px", fontFamily:"'Product Sans',Arial,sans-serif"}}>Forms</span> 
                 </ListItemText>
           
          </ListItem>
        </List>
        <Divider/> 
         <List style={{marginLeft:"06px", marginRight:"8px", marginTop:"15px"}}>
            <ListItem className="list_item">
                <img src={docimage} className={classes.slideImages}/>
                <div className={classes.listitem}>Docs</div>
            </ListItem>
            <ListItem className="list_item">
                <img src={excelsheetimage} className={classes.slideImages}/>
                <div className={classes.listitem}>Sheets</div>
            </ListItem>
            <ListItem className="list_item">
                <img src={slidesimage} className={classes.slideImages}/>
                <div className={classes.listitem}>Slides</div>
            </ListItem>
            <ListItem className="list_item">
                <img src={formimage} className={classes.slideImages}/>
                <div className={classes.listitem}>Forms</div>
            </ListItem>
        </List> 
        <Divider/> 
        <List>
            <ListItem className="list_item">
                <FiSettings/>
                <div> Settings</div>

            </ListItem>
            <ListItem className="list_item">
                <BsQuestionCircle/>
                <div> Help & Feedback</div>

            </ListItem>
        </List>
        <Divider/> 
        <List style={{marginLeft:"06px", marginRight:"8px", marginTop:"15px"}}>
            <ListItem className="list_item">
                <img src={driveimage} className={classes.slideImages}/>
                <div className={classes.listitem}>Drive</div>
            </ListItem>
            </List>
        <Divider/>

        </div> 
    )
    return(
        <div>
            <React.Fragment>

             <IconButton onClick={toggleDrawer("left",true)}>
                <MenuIcon/>
             </IconButton>
             <Drawer open={state['left']} onClose={toggleDrawer['left', false]} anchor={'left'}>
              {list('left')}

             </Drawer>
           
            </React.Fragment>
        </div>
    )
} 
export default TemporaryDrawer
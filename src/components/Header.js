import React from 'react'
import "./Header.css" 
import MenuIcon from "@material-ui/icons/Menu"
import {IconButton, Input} from "@material-ui/core"
import formimage from "../images/menu.png" 
import SearchIcon from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import Avatar from '@material-ui/core/Avatar'
import TemporaryDrawer from './TemporaryDrawer'


function Header(){
    return(
        <div className='header'>
            <div className='header_info'>
                <TemporaryDrawer/>
                 <img src={formimage} style={{height:'40px',width:'40px'}} className="form_image" alt='Loading'/>
                 <div className="info">Forms</div>
            </div>
            <div className='header_search'>
               <IconButton>
                <SearchIcon/>
               </IconButton>
                <input type="text" name="Search" placeholder="Search"/>
               
            </div>
            <div className='header_right'>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <Avatar src=""/>
                </IconButton>

            </div>
        </div> 
    )
} 
export default Header;
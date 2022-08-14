import React from "react";
import "./sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from "@mui/icons-material/Tag";
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { List } from "@mui/material";
const TwitterSidebar = () => {
  return (
    <div className="side">
     <div>
     <TwitterIcon  style={{color:'#1DA1F2' , fontSize:'50px'}}/>
     </div>
      
      <div className="sideMenu">
        <h2><HomeIcon/>
           Home
        </h2>
        <h2><EmailIcon/> Message</h2>
        <h2><NotificationsIcon/> Notification</h2>
        <h2><TagIcon />Explore</h2>
        <h2><BookmarkIcon/> Bookmarks</h2>
        <h2><ListAltIcon/> List</h2>
        <h2><PersonIcon/> Profile</h2> 
        <h2 style={{marginBottom:"20px"}}><MoreHorizIcon/> More</h2> 
        <button>Tweet</button>
      </div>
    </div>
  );
};

export default TwitterSidebar;

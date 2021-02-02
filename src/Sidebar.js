import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css";

function Sidebar() {
    const user = useSelector(selectUser);
  
    const recentItem = (topic) => (
<div className="sidebar__recentItem">
<span className="sidebar__hash">#</span>
<p>{topic}</p>
</div>
    );

    return (
    <div className="sidebar"> 
<div class="sidebar__top">
    <img src="https://www.garenta.com.tr/blog/wp-content/uploads/2018/02/akdamar-adasi.jpg" alt=""/>
    <Avatar src={user.photoUrl} className="sidebar__avatar"> {user.email[0]}
    </Avatar>
    <h2>{user.displayName}</h2>
    <h4>{user.email}</h4>
</div>
<div className="sidebar__stats">
<div className="sidebar__stat">
    <p>Who viewed you</p>
    <p className="sidebar__statNumber">1453</p>
</div>
<div className="sidebar__stat">
<p>Views on post</p>
<p className="sidebar__statNumber">1071</p>
</div>
</div>
<div className="sidebar__bottom">
    <p>Recent</p>
    {recentItem('reactjs')}
    {recentItem('python')}
    {recentItem('golang')}
    {recentItem('swift')}
    {recentItem('kotlin')}
</div>
</div>
    );  
}

export default Sidebar;

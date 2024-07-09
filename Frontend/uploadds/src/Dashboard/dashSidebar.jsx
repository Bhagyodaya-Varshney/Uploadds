import React from "react";
import "./dashboard.css";

import logout from "../assests/log-out.png";
import profile_logo from "../assests/profile_logo.jpg";

import {useNavigate} from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useState } from "react";


export function DashSideBar({showProfile}){

    const {removeTokenInLS} = useAuth(); 


    const navigate = useNavigate();
    const logoutFunc = () => {
        navigate("/");
        removeTokenInLS();
    }

    return <div className="dashSidebarMain">
        <h2 id="logo">uploadds</h2>
        <div className="dashSidebarLower">
            <img src={logout} alt="" onClick={logoutFunc}/>
            <img src={profile_logo} alt="" onClick={showProfile}/>
        </div>
    </div>
}
import React from "react";
import "./dashboard.css";

import { useState } from "react";

import { DashMidBar } from "./dashMidbar";
import { DashEndBar } from "./dashEndbar";

import { profileData } from "../hooks/profileData";

export function Dashboard() {

    const [showProile, setShowProfile] = useState(false);
    const [profileData1, setProfileData] = useState({});


    const showProfile = async() => {
        setShowProfile(!showProile);
        const res = await profileData(localStorage.getItem("token"));
        setProfileData(res[0]);
    }


    return <div className="dashMain">
        <DashMidBar showProile={showProile} setShowProfile={setShowProfile} userProfileData1={profileData1}/>
        <DashEndBar/>
    </div>
}
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './homeCSS.css';

import { HomeMidComponent } from "./homeMidComponent";

export function HomeScreen(){
    const Navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem("token")){
            Navigate("/home");
    }});

    return <div className="homeMain">
        <HomeMidComponent/>
    </div>
}
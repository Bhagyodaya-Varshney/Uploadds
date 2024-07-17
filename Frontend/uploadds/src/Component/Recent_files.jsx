import React, { useEffect, useState } from "react";
import "./component.css";



export const Recent_files = ({name,date,type}) => {
    return(
        <div className="recentFileMain">
            <h2 id="FileName">{name}</h2>
            <h2 id={`FileType${type=="JPEG" || type=="JPG"?"":"M"}`}>{type == "JPEG"?"JPG":type}</h2>
            <h2>{date}</h2>
            <button id="recentFilesActionBtn">...</button>
        </div>
    )
}
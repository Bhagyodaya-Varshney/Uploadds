import React from "react";
import "./compose.css";
import Plus from "../assests/plus.png";




export const UploadCompose = ({handleAttach}) => {
    return <div className="uploadComposeMain">
        <div className="uploadCompose">
            <div className="uploadComposeHead">
                <h2>Attach Files</h2>
                <button onClick={handleAttach} style={{cursor:"pointer"}}>❌</button>
            </div>
            <div className="uploadComposeLeft">
                <div className="uploadComposeInput">
                    <img src={Plus} alt="" />
                    <h2>Add Files</h2>
                    <input type="file" multiple />
                </div>
            </div>
        </div>
    </div>
}
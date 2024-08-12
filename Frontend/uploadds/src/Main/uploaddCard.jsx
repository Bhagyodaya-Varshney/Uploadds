import "./uploaddCard.css";
import { useState } from "react";

export const UploaddCard = () => {

    const [selectUpload , setSelectUpload] = useState(false);
    const handleCheckboxChange = () => {
        setSelectUpload(!selectUpload);
    };

    return <div className={`uploadCardMain${selectUpload?"Y":""}`}>
        <input type="checkbox" id="checkBoxId" checked={selectUpload} onChange={handleCheckboxChange}/>
        <div className="uploadcardFullNameDiv">Bhagyodaya Varshney</div>
        <div className="uploadCardSubjectDiv">Your Otp for Verification</div>
        <div className="uploadCardBodyDiv">-1254</div>
        <div className="uploadCardTimeStampDiv">12:50</div>
        <div className="hoverIcon"><h1>🗑️</h1></div>
    </div>
}
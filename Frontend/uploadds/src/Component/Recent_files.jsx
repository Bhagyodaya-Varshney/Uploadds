import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./component.css";
import { ShowFile } from "../ShowFile/showFile";

export const Recent_files = ({ _id, name, date, type }) => {
  const [showBtn, setShowBtn] = useState(false);
  const [showFile, setShowFile] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShowBtn(!showBtn);
    setShowFile(!showFile);
  };

  const showBtnHandler = (e) => {
    e.preventDefault();
    setShowBtn(!showBtn);
  };

  const closeFileHandler = () => {
    setShowFile(false);
  };

  return (
    <div className="recentFileMain">
      <h2 id="FileName">{name}</h2>
      <h2 id={`FileType${type === "JPEG" || type === "JPG" ? "" : "M"}`}>
        {type === "JPEG" ? "JPG" : type}
      </h2>
      <h2>{date}</h2>
      <div className="buttonWrapper">
        <button id="recentFilesActionBtn" onClick={showBtnHandler}>...</button>
        {showBtn && (
          <div className="recentFilesActionDiv">
            <button onClick={handleShow}>View</button>
            <button>Delete</button>
          </div>
        )}
        {showFile && <ShowFile id={_id} onClose={closeFileHandler} />}
      </div>
    </div>
  );
};

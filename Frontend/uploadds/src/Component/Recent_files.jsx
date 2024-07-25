import React, { useState } from "react";
import "./component.css";
import { ShowFile } from "../ShowFile/showFile";
import { HandleRecentFileDelete } from "../hooks/HandleRecentFileDelete";
import { HandleRecentFileDownload } from "../hooks/HandleRecentFileDownload";
import toast from "react-hot-toast";

export const Recent_files = ({ _id, name, date, type }) => {
  const [showBtn, setShowBtn] = useState(false);
  const [showFile, setShowFile] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShowBtn(!showBtn);
    setShowFile(!showFile);
  };

  const handleShare = (e) =>{
    e.preventDefault();
    setShowShare(!showShare);
    setShowBtn(!showBtn);
  }

  const handleDelete = async() => {
    const message = await HandleRecentFileDelete(_id);
    toast.success(message);
    setShowBtn(!showBtn);
    window.location.reload();
  }

  const handleDownload = async() => {
    await HandleRecentFileDownload(_id);
    setShowBtn(!showBtn);
  }

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
            <button onClick={handleShare}>Share</button>
            <button onClick={handleDownload}>Download</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
        {showFile && <ShowFile id={_id} onClose={closeFileHandler} />}
        {showShare && <div className="shareDiv">Share</div>}
      </div>
    </div>
  );
};

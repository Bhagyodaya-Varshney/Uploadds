import React, { useState } from "react";
import "./compose.css";
import { Btn } from "../Component/Btn";
import right from "../assests/right.png";
import attach from "../assests/attach.png";
import { UploadCompose } from "./uploadCompose";

export const Compose = ({ showComposeHandler }) => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [showAttach, setShowAttach] = useState(false);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleAttach = () => setShowAttach(!showAttach);

  const handleSend = () => {
    console.log("Sending message with files:", files);
    console.log("Message body:", message);
  };

  return (
    <div className="composeMain">
      <div className="composeHead">
        New Uploadds <button onClick={showComposeHandler}>❌</button>
      </div>
      <div className="composeTo">
        To:
        <input type="text" />
      </div>
      <div className="composeSub">
        <input type="text" placeholder="Subject:" />
      </div>
      <div className="composeSub">
        <input type="password" placeholder="Password:" />
      </div>
      <div className="composeBody">
        <textarea
          id="textArea"
          placeholder="Type your message here..."
          onChange={(e) => setMessage(e.target.value)}
        />
        {
          showAttach && <UploadCompose handleAttach={handleAttach}/>
        }
      </div>
      <div className="composeBtn">
        <Btn text={"Send"} width={"30%"} height={"80%"} onClick={handleSend} />
        <img src={attach} alt="Attach" onClick={handleAttach}/>
        <img src={right} alt="Send" onClick={handleSend} />
      </div>
    </div>
  );
};

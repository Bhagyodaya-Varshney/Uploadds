import "./main.css";
import { useState } from "react";
import inbox from "../assests/inbox.png";
import compose from "../assests/compose.png";
import sent from "../assests/sent.png";
import rotate from "../assests/rotate.png";
import upload from "../assests/upload.png";

import { UploadMain } from "../UploadPage/uploadMain";
import { Compose } from "../compose/compose";
import { UploaddCard } from "./uploaddCard";

export const MainLower = () => {
  const [showCompose, setShowCompose] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [showInbox, setShowInbox] = useState(false);


  const showComposeHandler = () => {
    setShowCompose(!showCompose);
  };

  const showUploadHandler = () => {
    setShowUpload(true);
    setShowInbox(false);
  };

  const showInboxHandler = () => {
    setShowInbox(true);
    setShowUpload(false);
  }

  return (
    <div className="mainLower">
      <div className="mainLowerSide1">
        <div>
          <div className="iconDiv">
            <img src={compose} alt="" onClick={showComposeHandler} />
          </div>
          <img src={inbox} alt="" id="inboxIcon"  onClick={showInboxHandler}/>
          <img src={sent} alt="" id="inboxIcon" />
          <img src={upload} alt="" id="inboxIcon" onClick={showUploadHandler} />
        </div>
      </div>
      {showUpload ? (
        <UploadMain />
      ) : (
        <div className="mainLowerSide2">
          <div className="mainLowerNav">
            <div className="mainLowerNavStart">
              <input type="checkbox" id="mainLowerNavCheckbox" />
              <img src={rotate} alt="" id="mainLowerNavImg" />
            </div>
          </div>
          <UploaddCard />
          <UploaddCard />
          <UploaddCard />
          <UploaddCard />
          <UploaddCard />
        </div>
      )}
      {showCompose ? <Compose showComposeHandler={showComposeHandler} /> : null}
    </div>
  );
};

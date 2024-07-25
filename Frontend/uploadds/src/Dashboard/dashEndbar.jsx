import React from "react";
import "./dashboard.css";
import { Input } from "../Component/Input";
import { Btn } from "../Component/Btn";
import { handlePasswordFileDownload,handlePasswordFileDownload1 } from "../hooks/handlePasswordFileDownload";
import { Recent_files } from "../Component/Recent_files";

export function DashEndBar() {
  const [DLink, setDLink] = React.useState("");
  const [DPassword, setDPassword] = React.useState("");
  const [showPassInput, setShowPassInput] = React.useState(false);
  const [showPassDownloadBtn, setShowPassDownloadBtn] = React.useState(false);

  const handleDownload = async () => {
    await handlePasswordFileDownload(DLink, DPassword);
  };
  const handleDownload1 = async () => {
    await handlePasswordFileDownload1(DLink);
  };
  const showPasswordInput = () => {setShowPassInput(true);setShowPassDownloadBtn(true);};

  return (
    <div className="dashEndbarMain">
      <h2 id="dashEndBarHead-End">Download</h2>
      <Input
        id={"dEBDL"}
        label={"Download Link"}
        variant={"outlined"}
        width={"100%"}
        type={"link"}
        set={setDLink}
        value={DLink}
      />
      {showPassInput ? (
        <Input
          id={"dEBDL"}
          label={"Password"}
          variant={"outlined"}
          width={"100%"}
          type={"password"}
          set={setDPassword}
          value={DPassword}
        />
      ) : null}
      {showPassDownloadBtn ? (
        <Btn
          text={"Download"}
          label={"Download"}
          width={"100%"}
          height={"50px"}
          margin={"10px 0px"}
          onClick={handleDownload}
        />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Btn
            id={"dEBBtn"}
            text={"Download"}
            width={"48%"}
            height={"7%"}
            onClick={handleDownload1}
          />
          <Btn
            id={"dEBBtn1"}
            text={"Password"}
            width={"48%"}
            height={"7%"}
            onClick={showPasswordInput}
          />
        </div>
      )}
      <div className="loadingSignDiv"></div>
      <h2 id="dashEndBarHead">Recent Downloads</h2>
      <div className="recentDownloadDiv">
        <div className="recentDownloadDivBar">
          <h2>Name</h2>
          <h2>Size</h2>
          <h2>Action</h2>
        </div>
        <Recent_files />
        <Recent_files />
        <Recent_files />
      </div>
    </div>
  );
}

import React from "react";
import "./dashboard.css";
import { Input } from "../Component/Input";
import { Btn } from "../Component/Btn";
import { handlePasswordFileDownload } from "../hooks/handlePasswordFileDownload";
import { Recent_files } from "../Component/Recent_files";

export function DashEndBar() {
  const [DLink, setDLink] = React.useState("");
  const [DPassword, setDPassword] = React.useState("");

  const handleDownload = async () => {
    await handlePasswordFileDownload(DLink, DPassword);
  };

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
      <Input
        id={"dEBP"}
        label={"Password"}
        variant={"outlined"}
        width={"100%"}
        type={"password"}
        set={setDPassword}
        value={DPassword}
      />
      <Btn
        id={"dEBBtn"}
        text={"Download"}
        width={"100%"}
        height={"7%"}
        onClick={handleDownload}
      />
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

import React, { useEffect, useState } from "react";
import "./dashboard.css";
import fileImg from "../assests/file.png";
import Img1 from "../assests/Img1.png";
import { Btn } from "../Component/Btn";
import { Profile } from "../Profile/profile";
import { Recent_Upload } from "../RecentUpload/recent_upload";
import { handleFilePassword } from "../hooks/handleFilePassword";
import { handleFileUpload } from "../hooks/handleFileUpload";
import { Recent_files } from "../Component/Recent_files";
import toast from "react-hot-toast";
import { handleRecentUpload } from "../hooks/handleRecentUploads";

export function DashMidBar({ showProile, setShowProfile, userProfileData1 }) {
  const [isImage, setIsImage] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState();
  const [password, setPassword] = useState("");
  const [generateLink, setGenerateLink] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);
  const [recentUploadsData, setRecentUploadsData] = useState([]);
  const [showRecentFile, setShowRecentFile] = useState(true);

  const recentUploads = async () => {
    const res = await handleRecentUpload(localStorage.getItem("token"));
    if (res) {
      setRecentUploadsData(res);
    }
  };

  useEffect(() => {
    recentUploads();
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files && files.length > 0) {
      const fileType = files[0].type;
      if (
        fileType.startsWith("image/") ||
        fileType.startsWith("application/")
      ) {
        setIsImage(true);
        setFileName(files[0].name);
        setFile(files[0]);
      }
    }
    setIsDragOver(false);
  };

  const handleSelectFile = (e) => {
    e.preventDefault();
    const files = Array.from(e.target.files);
    if (files && files.length > 0) {
      const fileType = files[0].type;
      if (
        fileType.startsWith("image/") ||
        fileType.startsWith("application/") ||
        fileType.startsWith("video/")
      ) {
        setIsImage(true);
        setFileName(files[0].name);
        setFile(files[0]);
      }
    }
  };

  const handleDownloadLink = async (e) => {
    e.preventDefault();
    const res = await handleFilePassword(
      file,
      password,
      localStorage.getItem("token")
    );
    if (res) {
      setDownloadLink(res);
      setGenerateLink(true);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const res = await handleFileUpload(file, localStorage.getItem("token"));
    if (res) {
      setIsImage(false); // Reset state after successful upload
      window.location.reload(); // Reload to reflect changes
    }
  };

  const handlePassCross = () => {
    setPassword("");
  };

  const handleCross = () => {
    setIsImage(false);
    setFileName("");
    setIsPassword(false);
    setGenerateLink(false);
  };

  const IsPassFunc = () => {
    setIsPassword(!isPassword);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to Clipboard");
  };

  const handleViewAllClick = () => {
    setShowRecentFile(!showRecentFile); // Toggle showRecentUploads state
  };

  return (
    <div className="dashMidbarMain">
      {showProile ? (
        <Profile userProfileData1={userProfileData1} />
      ) : showRecentFile ? (
        <div className="dashMidbarMainDiv">
          <h2 id="dashEndBarHead">Quick Access</h2>
          <div className="QuickAccesDiv">
            <div
              className={`fileArea ${isDragOver ? "dragOver" : ""}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
            >
              <div className="dragDropDiv">
                <img src={fileImg} alt="" />
                <h1>Drag and Drop File</h1>
              </div>
              <h4>OR</h4>
              <div className="selectImgDiv">
                {isImage ? (
                  <div className="fileName">
                    {fileName.length > 30
                      ? fileName.slice(0, 30) + "..."
                      : fileName}{" "}
                    | <button onClick={handleCross}>❌</button>
                  </div>
                ) : (
                  <label className="FileInputLabel">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      multiple={true}
                      required
                      onChange={handleSelectFile}
                    />
                    Select File to Upload
                  </label>
                )}
                <h4>After selecting file please provide below Action</h4>
              </div>
              {isImage ? (
                <div className="selectStep">
                  <Btn
                    text="Upload"
                    width="48%"
                    height="2rem"
                    onClick={handleUpload}
                  />
                  <Btn
                    text="Provide Password"
                    width="48%"
                    height="2rem"
                    onClick={IsPassFunc}
                  />
                </div>
              ) : null}
            </div>
            {isPassword ? (
              <div className="anotherArea">
                <div className={`passwordDiv${isImage ? "M" : ""}`}>
                  <div>
                    <input
                      type={`${isImage ? "password" : "hidden"}`}
                      id="passwordInput"
                      placeholder="Password ..."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      style={{ opacity: `${isImage ? "1" : "0"}` }}
                      onClick={handlePassCross}
                    >
                      ❌
                    </button>
                  </div>
                  <button
                    style={{
                      opacity: `${isImage ? "1" : "0"}`,
                      background: "black",
                    }}
                    onClick={handleDownloadLink}
                  >
                    Generate Link
                  </button>
                </div>
                <div className={`linkDiv${generateLink ? "M" : ""}`}>
                  <h2 style={{ opacity: `${generateLink ? "1" : "0"}` }}>
                    Download Link for File:
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      opacity: `${generateLink ? "1" : "0"}`,
                      background: "white",
                      padding: "0.5rem",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <h3>{downloadLink}</h3>
                    <button
                      onClick={() => copyToClipboard(downloadLink)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      📄
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <img src={Img1} alt="" className="Img1" />
            )}
          </div>
          <h2 id="dashEndBarHead">Recent Uploads</h2>
          <div className="RecentFile">
            <div className="recentFileNameingDiv">
              <h2>Name</h2>
              <h2>Type</h2>
              <h2>Last Modified</h2>
              <h2>Action</h2>
            </div>
            {recentUploadsData && recentUploadsData.length > 0 ? (
              recentUploadsData
                .slice(0, 3)
                .map((data) => (
                  <Recent_files
                    _id={data._id}
                    name={data.originalName.slice(0, 18) + "..."}
                    type={data.originalName
                      .split(".")
                      [data.originalName.split(".").length - 1].toUpperCase()}
                    date={new Date(data.createdAt)
                      .toLocaleString()
                      .slice(0, 9)}
                  />
                ))
            ) : (
              <p>No recent uploads found.</p>
            )}
            {recentUploadsData.length > 0 ? (
              <button id="ViewAllBtn" onClick={handleViewAllClick}>
                View All
              </button>
            ) : null}
          </div>
        </div>
      ) : (
        <Recent_Upload
          recentUplodData={recentUploadsData}
          handleViewAllClick={handleViewAllClick}
        />
      )}
    </div>
  );
}

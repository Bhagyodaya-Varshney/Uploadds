import "./upload.css";
import { useState, useEffect } from "react";
import { Btn } from "../Component/Btn";
import Plus from "../assests/plus.png";

import { handleFileUpload } from "../hooks/handleFileUpload";
import { Recent_files } from "../Component/Recent_files";
import { handleRecentUpload } from "../hooks/handleRecentUploads";

export const UploadMain = () => {
  const [files, setFiles] = useState([]);
  const [showUploadDiv, setShowUploadDiv] = useState(false);
  const [recentUploadsData, setRecentUploadsData] = useState([]);

  const handleShowUploadDiv = () => setShowUploadDiv(!showUploadDiv);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    if (selectedFiles.length + files.length <= 5) {
      setFiles([...files, ...selectedFiles]);
    } else {
      alert("You can only upload up to 5 files.");
    }
  };

  const recentUploads = async () => {
    const res = await handleRecentUpload(localStorage.getItem("token"));
    if (res) {
      setRecentUploadsData(res);
    }
  };

  useEffect(() => {
    recentUploads();
  }, []);

  const handleUpload = async () => {
    for (const file of files) {
      await handleFileUpload(file, localStorage.getItem("token"));
    }
    setFiles([]);
    setShowUploadDiv(false);
  };

  const removeFile = (index) => setFiles(files.filter((_, i) => i !== index));

  const truncateFileName = (name) =>
    name.length > 20 ? name.substring(0, 20) + "..." : name;

  const getFileType = (file) => {
    const extension = file.name.split(".").pop().toUpperCase();
    return extension;
  };

  const formatFileSize = (size) => {
    if (size < 1024) return Math.round(size) + " B";
    else if (size < 1024 * 1024)
      return Math.round((size / 1024).toFixed(1)) + " KB";
    else if (size < 1024 * 1024 * 1024)
      return Math.round((size / (1024 * 1024)).toFixed(1)) + " MB";
    return Math.round((size / (1024 * 1024 * 1024)).toFixed(1)) + " GB";
  };

  return (
    <div className="uploadMain">
      <div className="uploadHeadNav">
        <h2 id="dashEndBarHead">Recent Uploads</h2>
        <Btn
          text={"Upload Files"}
          height={"60%"}
          width={"10%"}
          onClick={handleShowUploadDiv}
        />
      </div>
      {showUploadDiv && (
        <div className="uploadDiv">
          <button onClick={handleShowUploadDiv}>❌</button>
          <div className="upload">
            <div className="uplaodInput">
              <img src={Plus} alt="" />
              <h2>Add Files</h2>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                disabled={files.length >= 5}
              />
            </div>
            <div className="fileList">
              {files.map((file, index) => (
                <div key={index} className="fileItem">
                  <span className="fileType">{getFileType(file)}</span>
                  <span className="fileName">
                    {truncateFileName(file.name)}
                  </span>
                  <div className="fileItemDiv">
                    <button onClick={() => removeFile(index)}>❌</button>
                    <span className="fileSize">
                      {formatFileSize(file.size)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {files.length > 0 && (
              <Btn
                text={"Upload"}
                height={"40px"}
                width={"100%"}
                onClick={handleUpload}
              />
            )}
          </div>
        </div>
      )}
      <div className="RecentFile">
        <div className="recentFileNameingDiv">
          <h2 id="FileNameHead">Name</h2>
          <h2 id="FileTypeHead">Type</h2>
          <h2 id="FileDateHead">Last Modified</h2>
          <h2 id="FileActionHead">Action</h2>
        </div>
        {recentUploadsData && recentUploadsData.length > 0 ? (
          recentUploadsData
            .map((data) => (
              <Recent_files
                _id={data._id}
                name={data.originalName.slice(0, 18) + "..."}
                type={data.originalName
                  .split(".")
                  [data.originalName.split(".").length - 1].toUpperCase()}
                date={new Date(data.createdAt).toLocaleString().slice(0, 9)}
              />
            ))
        ) : (
          <p>No recent uploads found.</p>
        )}
      </div>
    </div>
  );
};

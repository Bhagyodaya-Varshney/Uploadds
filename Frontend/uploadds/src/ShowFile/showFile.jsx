import React, { useEffect, useState } from "react";
import "./showFile.css";
import { Loading } from "../Component/loading";
import { FetchShowFile } from "../hooks/FetchShowFile";

export const ShowFile = ({ id, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [fileData, setFileData] = useState(null);
  const [error, setError] = useState(null);

  const handleFileCross = (e) => {
    e.preventDefault();
    onClose();
  };

  const fetchFile = async () => {
    try {
      const res = await FetchShowFile(id);
      if (res) {
        setFileData(res);
      } else {
        setError("Failed to fetch file data");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFile();
  }, [id]);

  const renderFile = () => {
    if (!fileData) {
      return <p>No file data available</p>;
    }

    const { originalName, path } = fileData;
    const fileUrl = `http://localhost:4000/${path}`;
    const fileType = originalName.split(".").pop().toLowerCase();

    switch (fileType) {
      case "jpeg":
      case "jpg":
      case "png":
        return (
          <img
            src={fileUrl}
            alt={originalName}
            style={{ maxWidth: "100%", height: "100%" }}
          />
        );
      case "pdf":
        return (
          <object
            data={fileUrl}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              Your browser does not support PDFs.{" "}
              <a href={fileUrl}>Download the PDF</a>.
            </p>
          </object>
        );
      case "mp4":
      case "webm":
        return (
          <video controls style={{ maxWidth: "100%" }}>
            <source src={fileUrl} type={`video/${fileType}`} />
            Your browser does not support the video tag.
          </video>
        );
      case "mp3":
      case "ogg":
        return (
          <audio controls>
            <source src={fileUrl} type={`audio/${fileType}`} />
            Your browser does not support the audio element.
          </audio>
        );
      case "docx":
        return (
          <a href={fileUrl} download className="file-download">
            Download {originalName.split(".").slice(0, -1).join(".")}
          </a>
        );
      default:
        return (
          <a href={fileUrl} download>
            {originalName}
          </a>
        );
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="showFileMain">
      <div className="show-file-container">
        <div className="fileDetails">
          <h1 className="file-title">
            {fileData.originalName.split(".").slice(0, -1).join(".")}
          </h1>
          <button onClick={handleFileCross}>❌</button>
        </div>
        <div className="file-content">{renderFile()}</div>
      </div>
    </div>
  );
};

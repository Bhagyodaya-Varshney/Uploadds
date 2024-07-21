import React from "react";
import "./recentUpload.css";
import { motion } from "framer-motion";
import { Recent_files } from "../Component/Recent_files";

export function Recent_Upload({ recentUplodData, handleViewAllClick }) {
  return (
    <motion.div
      className="recentUploadMain"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div id="recentUploadHeadDiv">
        <h2 id="dashEndBarHead">Recent Uploads</h2>
        <button onClick={handleViewAllClick}>❌</button>
      </div>
      <div className="recentFileNameingDiv">
        <h2>Name</h2>
        <h2>Type</h2>
        <h2>Last Modified</h2>
        <h2>Action</h2>
      </div>
      <div id="b">
        {recentUplodData && recentUplodData.length > 0
          ? recentUplodData.map((data) => (
              <Recent_files
                _id={data._id}
                name={data.originalName.slice(0, 18) + "..."}
                type={data.originalName
                  .split(".")
                  [data.originalName.split(".").length - 1].toUpperCase()}
                date={new Date(data.createdAt).toLocaleString().slice(0, 9)}
              />
            ))
          : ""}
      </div>
    </motion.div>
  );
}

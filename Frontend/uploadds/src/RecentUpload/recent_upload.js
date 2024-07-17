import React from "react";
import { Recent_files } from "../Component/Recent_files";

export function Recent_Upload({ recentUplodData }) {
  return (
    <div className="recentUploadMain">
      <h2 id="dashEndBarHead">Recent Uploads</h2>
      {recentUplodData && recentUplodData.length > 0
        ? recentUplodData.map((data) => (
            <Recent_files
              name={data.originalName.slice(0, 18) + "..."}
              type={data.originalName
                .split(".")
                [data.originalName.split(".").length - 1].toUpperCase()}
              date={new Date(data.createdAt).toLocaleString().slice(0, 9)}
            />
          ))
        : ""}
    </div>
  );
}

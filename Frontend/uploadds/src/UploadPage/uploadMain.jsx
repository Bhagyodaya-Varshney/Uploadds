import "./upload.css";
import file from "../assests/file.png";
import folder from "../assests/folder.png";

export const UploadMain = () => {
  return (
    <div className="uploadMain">
      <div className="uploadUpperMain">
        <div className="uploadFile">
          <img src={file} alt="" />
          <div className="divider"></div>
          <div className="uplaodFileChild">
            <h2>Drag and Drop File to Upload</h2>
            <h3>PDF, JPG, PNG, MP4, MP3, DOCX and Many More...</h3>
          </div>
        </div>
        <div className="uploadFolder">
          <img src={folder} alt="" />
          <div className="divider"></div>
          <div className="uplaodFolderChild">
            <h2>Drag and Drop Folder to Upload</h2>
            <h3>Only for Premium Member</h3>
          </div>
        </div>
      </div>
      <h2 id="dashEndBarHead">Recent Uploads</h2>
      <div className="RecentFile">
        <div className="recentFileNameingDiv">
          <h2>Name</h2>
          <h2>Type</h2>
          <h2>Last Modified</h2>
          <h2>Action</h2>
        </div>
      </div>
    </div>
  );
};

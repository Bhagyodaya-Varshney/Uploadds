import FileUploadModel from "../models/uploadFile.js";
import FileModel from "../models/fileModel.js";
import bcrypt from "bcrypt";

export const fileDownloadController = async (req, res) => {
  const { DPassword } = req.body;

  try {
    const file = await FileModel.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    if (file.password && !(await bcrypt.compare(DPassword, file.password))) {
      return res.status(401).json({ message: "Password is incorrect" });
    }

    file.downloadCount++;
    await file.save();

    req.on("aborted", () => {
      console.log("Request aborted by the client");
    });

    res.download(file.path, file.originalName, (err) => {
      if (err) {
        console.error(err);
        if (!res.headersSent) {
          return res
            .status(500)
            .json({ message: "Internal error occurred 😞" });
        }
      }
    });
  } catch (e) {
    console.error(e);
    if (!res.headersSent) {
      return res.status(500).json({ message: "Internal error occurred 😞" });
    }
  }
};


export const fileDownloadController1 = async (req, res) => {

  try {
    const file = await FileUploadModel.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    file.downloadCount++;
    await file.save();

    req.on("aborted", () => {
      console.log("Request aborted by the client");
    });

    res.download(file.path, file.originalName, (err) => {
      if (err) {
        console.error(err);
        if (!res.headersSent) {
          return res
            .status(500)
            .json({ message: "Internal error occurred 😞" });
        }
      }
    });
  } catch (e) {
    console.error(e);
    if (!res.headersSent) {
      return res.status(500).json({ message: "Internal error occurred 😞" });
    }
  }
};

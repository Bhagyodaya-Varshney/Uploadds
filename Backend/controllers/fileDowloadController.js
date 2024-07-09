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
      return res.status(401).json({ message: "Password is Incorrect" });
    }

    file.downloadCount++;
    await file.save();
    console.log("1");
    return res.download(file.path, file.originalName, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Error Occur😞" });
      }
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal Error Occur😞" });
  }
};

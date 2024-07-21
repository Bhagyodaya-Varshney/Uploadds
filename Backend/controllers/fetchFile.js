import FileModel from "../models/fileModel.js";
import FileUploadModel from "../models/uploadFile.js";

export const fetchFile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await FileModel.findById(id) || await FileUploadModel.findById(id);

    if (!file) {
      return res.status(404).send("File not found");
    }
    return res.json(file);
  } catch (e) {
    res.status(500).send("Server error");
  }
};

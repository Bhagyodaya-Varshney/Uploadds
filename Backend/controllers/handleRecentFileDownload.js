import FileModel from "../models/fileModel.js";
import FileUploadModel from "../models/uploadFile.js";

export const handleRecentFileDownloadController = async (req, res) => {
    try {
        const file = await FileModel.findById(req.params.id) || await FileUploadModel.findById(req.params.id);

        if (!file) {
            return res.status(404).json({ message: "File Not Found" });
        }

        res.download(file.path, file.originalName, (err) => {
            if (err) {
                console.error(`Error downloading file: ${err.message}`);
                res.status(500).json({ message: "Internal Error Occurred 😞" });
            }
        });
    } catch (e) {
        console.error(`Internal server error: ${e.message}`);
        return res.status(500).json({ message: "Internal Error Occurred 😞" });
    }
};

import FileModel from "../models/fileModel.js";
import FileUploadModel from "../models/uploadFile.js";

export const recentFileDeleteController = async (req, res) => {
    const id = req.params.id;
    try {
        const fileDeleteResult = await FileModel.deleteOne({ "_id": id });
        const uploadFileDeleteResult = await FileUploadModel.deleteOne({ "_id": id });

        if (fileDeleteResult.deletedCount === 0 && uploadFileDeleteResult.deletedCount === 0) {
            return res.status(404).json({ message: "File Not Found 😞" });
        }

        return res.status(200).json({ message: "File Deleted Successfully" });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: "Internal Error Occurred 😞" });
    }
};

import express from "express";
import multer from "multer";
import {
  loginController,
  registerController,
} from "../controllers/userControllers.js";
import { userProfileController } from "../controllers/userProfileController.js";
import { userChangePassword } from "../controllers/userChangePassword.js";
import {
  FileController,
  FileUploadController,
} from "../controllers/fileController.js";
import {
  fileDownloadController,
  fileDownloadController1,
} from "../controllers/fileDowloadController.js";
import { handleRecentFileController } from "../controllers/handleRecentFileController.js";
import { fetchFile } from "../controllers/fetchFile.js";
import { recentFileDeleteController } from "../controllers/recentFileDeleteController.js";
import { handleRecentFileDownloadController } from "../controllers/handleRecentFileDownload.js";
import { ForgetPasswordController } from "../controllers/forgetPasswordController.js";
import { otpController } from "../controllers/otpController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/login", loginController);
router.post("/register", registerController);
router.post("/userProfile", userProfileController);
router.post("/changePassword", userChangePassword);
router.post("/passUpload", upload.single("file"), FileController);
router.post("/upload", upload.single("file"), FileUploadController);
router.post("/download/:id", fileDownloadController);
router.post("/download1/:id", fileDownloadController1);
router.post("/handleRecentUpload", handleRecentFileController);
router.get("/file/:id", fetchFile);
router.post("/:id/recentDelete", recentFileDeleteController);
router.post("/:id/recentDownload", handleRecentFileDownloadController);
router.post("/forgetPassword", ForgetPasswordController);
router.post("/otp", otpController);

export default router;

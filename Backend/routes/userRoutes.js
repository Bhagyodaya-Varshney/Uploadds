import express from "express";
import multer from "multer";

import { loginController,registerController } from "../controllers/userControllers.js";
import { userProfileController } from "../controllers/userProfileController.js";
import { userChangePassword } from "../controllers/userChangePassword.js";
import { FileController } from "../controllers/fileController.js";
import { FileUploadController } from "../controllers/fileController.js";
import { fileDownloadController } from "../controllers/fileDowloadController.js";
import { handleRecentFileController } from "../controllers/handleRecentFileController.js";

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

router.post("/login",loginController);
router.post("/register",registerController);
router.post("/userProfile",userProfileController);
router.post("/changePassword",userChangePassword);
router.post("/passUpload", upload.single("file"), FileController);
router.post("/upload", upload.single("file"), FileUploadController);
router.post("/download/:id",fileDownloadController);
router.post("/handleRecentUpload",handleRecentFileController);


export default router;
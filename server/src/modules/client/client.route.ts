import multer from "multer";
import express, { Request, Response } from "express";
import { findClientsHandler, registerClientHandler } from "./client.controller";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null, "./uploads/");
  },

  filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: any) => {
  if (file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/", upload.single("imageUrl"), registerClientHandler);

router.get("/", findClientsHandler);

export default router;

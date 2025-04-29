import express from "express";
import { addService, deleteService } from "../controllers/serviceController.js";

const router = express.Router();
router.post("/", addService);
router.delete("/:id", deleteService);

export default router;

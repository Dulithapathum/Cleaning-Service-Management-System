import express from "express";
import {
  addService,
  deleteService,
  getServices,
} from "../controllers/serviceController.js";

const router = express.Router();
router.get("/", getServices);
router.post("/", addService);
router.delete("/:id", deleteService);

export default router;

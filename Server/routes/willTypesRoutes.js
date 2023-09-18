import express from "express";
import { getAllWillTypes, getUser } from "../controllers/willTypeController.js";

const router = express.Router();

// Request handlers
router.get("/", getAllWillTypes);
router.post("/user", getUser);

export default router;

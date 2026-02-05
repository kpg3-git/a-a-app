import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
  updateUser,
  partialUpdateUser,
  deleteUser,
  resetPassword
} from "../controllers/authController.js";

import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// AUTH ROUTES 
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);  

// PROTECTED ROUTES 
router.get("/me", verifyToken, getMe);
router.put("/update", verifyToken, updateUser);
router.patch("/update", verifyToken, partialUpdateUser);
router.delete("/delete", verifyToken, deleteUser);

export default router;

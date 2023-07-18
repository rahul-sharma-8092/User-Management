import express from "express";
import { userRegister, userLogin } from "../controller/user.controller.js";

const router = express.Router();

// User Registration
router.post("/register", userRegister);

// User Login
router.post("/login", userLogin);

export default router;

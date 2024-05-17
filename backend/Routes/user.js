import express from "express";
import { Profile, register } from "../controller/user.js";
import { login } from "../controller/user.js";
import { Auth } from "../middleware/auth.js";

const router = express.Router();

router.post('/register',register);

router.post ('/login',login)

router.get ('/user',Auth,Profile)

export default router;



import express from "express"
import {userRegister} from "../controllers/user.controller.js"

const router = express.Router()
router.route("/register").get(userRegister)

export default router
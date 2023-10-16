import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  loginUser,
} from "../controllers/User.js";
import { verifyUser } from "../middleware/auth.js";
const router = express.Router();

router.route("").post(createUser).get(getUsers);

router.route("/login").post(loginUser);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;

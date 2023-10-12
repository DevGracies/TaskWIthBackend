import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/User.js";

const router = express.Router();

router.route("").post(createUser).get(getUsers);

router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

export default router;

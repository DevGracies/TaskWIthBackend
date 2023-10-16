import JWT from "jsonwebtoken";
import UserModel from "../models/User";
import httpStatus from "http-status";
import { config } from "../config/config";

//authentication via bearer token

export const verifyUser = (res, req, next) => {
  try {
    if (
      !req.headers ||
      !req.headers.authorization ||
      !req.headers.authorization.includes("Bearer")
    ) {
      res.status(httpStatus.BAD_REQUEST).json({
        error: "error",
        message: "Not Authorized, No token",
      });
      return;
    }
  } catch (error) {}
};

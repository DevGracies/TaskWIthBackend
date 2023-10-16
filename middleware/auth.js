import JWT from "jsonwebtoken";
import UserModel from "../models/User";
import httpStatus from "http-status";
import { config } from "../config/config";

//authentication via bearer token

export const verifyUser = async (res, req, next) => {
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
    //get the token
    const token = req.headers.authorization.split(" ")[1];
    //verify the action
    const decoded = JWT.verify(token, config.jwt.jwt_secret);
    const user = await UserModel.findById({ _id: decoded.id });
    if (!user) {
      res.status(httpStatus.BAD_REQUEST).json({
        error: "error",
        message: "User not found",
      });
    }
    //attach the user to the rq object
    req.user = user;
    next();
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      error: "error",
      message: error.message,
    });
  }
};

import httpStatus from "http-status";
import UserModel from "../models/User.js";
import { generateCode } from "../utils/generateUniqueCode.js";
import { serializeUser } from "../utils/serializeUser.js";
import { generateToken } from "../utils/jwt-token.js";
import bcrypt from "bcrypt";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    //confirm that email exist indb
    const userExist = await UserModel.findOne({ email: email });
    if (!userExist) {
      res.status(httpStatus.NOT_FOUND).json({
        status: "error",
        payload: "User does not exist, please register",
      });
      return;
    }

    //check that the supplied password matched the existing password for the account in db

    const decodeRes = await bcrypt.compare(password, userExist.password);
    if (!decodeRes) {
      res.status(httpStatus.FORBIDDEN).json({
        status: "error",
        payload: "Credential does not match",
      });
      return;
    }

    res.status(httpStatus.OK).json({
      status: "success",
      payload: serializeUser(userExist),
      token: generateToken(userExist._id, userExist.email),
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      status: "error",
      payload: error.message,
    });
  }
};

export const createUser = (req, res) => {
  res.status(httpStatus.OK).json({
    status: "success",
    payload: "User created",
  });
};

export const getUsers = (req, res) => {
  res.status(httpStatus.OK).json({
    status: "success",
    payload: "Users",
  });
};

export const getUser = (req, res) => {
  res.status(httpStatus.OK).json({
    status: "success",
    payload: "User",
  });
};

export const updateUser = (req, res) => {
  res.status(httpStatus.OK).json({
    status: "success",
    payload: "Update user",
  });
};

export const deleteUser = (req, res) => {
  res.status(httpStatus.OK).json({
    status: "success",
    payload: "delete User",
  });
};

// export const createUser = async (req, res) => {
//   const { firstName, lastName, email, password, phoneNumber } = req.body;

//   try {
//     const user = await UserModel.create({
//       firstName,
//       lastName,
//       email,
//       password,
//       phoneNumber,
//       userCode: generateCode(6),
//     });
//     res.status(httpStatus.OK).json({
//       status: "success",
//       payload: user,
//     });
//   } catch (err) {
//     res.status(httpStatus.BAD_REQUEST).json({
//       status: "error",
//       payload: err.message,
//     });
//   }
// };

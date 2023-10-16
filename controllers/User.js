import httpStatus from "http-status";
import UserModel from "../models/User.js";
import { generateCode } from "../utils/generateUniqueCode.js";
import { serializeUser } from "../utils/serializeUser.js";
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

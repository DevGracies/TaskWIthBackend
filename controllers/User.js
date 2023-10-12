import httpStatus from "http-status";
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

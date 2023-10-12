import mongoose from "mongoose";

export const dbConnect = () => {
  const connection = mongoose.connect(process.env.MONGO_URI);
  return connection;
};
// a schema is a template og wtiting gb. magoes os an interface of mangodb

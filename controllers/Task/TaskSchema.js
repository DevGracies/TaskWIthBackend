import Joi from "joi";

export const createTaskShema = Joi.object({
  desc: Joi.string().required(),
});

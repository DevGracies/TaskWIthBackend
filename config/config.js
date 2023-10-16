import Joi from "joi";
import { dotenv } from "dotenv";

dotenv.config({});

const envValidation = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(9000),
    API_KEY: Joi.string().required(),
    MONGO_URL: Joi.string().required(),
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRT: Joi.string().required(),
  })
  .unknown();

const { value: envVar, error } = envValidation
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${errorr.message}`);
}

export const config = {
  env: envVar.NODE_ENV,
  port: envVar.PORT,
  api_key: envVar.API_KEY,
  mangodb: {
    db_url: envVar.MONGO_URL,
  },
};

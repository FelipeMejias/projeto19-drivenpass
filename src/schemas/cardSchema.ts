import Joi from "joi";
import { CardBody } from "../services/cardService.js";

export const schema=Joi.object<CardBody>({
  title: Joi.string().required(),
  number: Joi.string().required(),
  expirationDate: Joi.string().required(),
  password: Joi.string().required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().required()
})
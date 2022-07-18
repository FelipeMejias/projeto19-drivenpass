import Joi from "joi";
import { WifiBody } from "../services/wifiService.js";

export const schema=Joi.object<WifiBody>({
    title:Joi.string().required(),
    name:Joi.string().required(),
    password:Joi.string().required()
})
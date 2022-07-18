import Joi from "joi";
import { UserData } from "../services/userService.js";

export const schema=Joi.object<UserData>({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})
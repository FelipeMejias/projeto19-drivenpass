import Joi from "joi";
import { CredentialBody } from "../services/credentialService.js";

export const schema=Joi.object<CredentialBody>({
    title :Joi.string().required(),
    url :Joi.string().required(),
    username :Joi.string().required(),
    password :Joi.string().required()
})
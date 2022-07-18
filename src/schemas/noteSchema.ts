import Joi from "joi";
import { NoteBody } from "../services/noteService.js";

export const schema=Joi.object<NoteBody>({
    title:Joi.string().required(),
    text:Joi.string().required()
})
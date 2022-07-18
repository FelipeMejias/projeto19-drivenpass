import Joi from "joi";
import { NoteBody } from "../services/noteService.js";

export const schema=Joi.object<NoteBody>({
    title:Joi.string().max(50).required(),
    text:Joi.string().max(1000).required()
})
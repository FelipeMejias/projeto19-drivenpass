import { Router } from "express";
import { deleteNote, getAllNotes, getNote, postNote } from "../controllers/noteController.js";
import { checkOwner } from "../middlewares/checkOwner.js";
import { validateBody } from "../middlewares/validateBody.js";
import { validateToken } from "../middlewares/validateToken.js";
import { noteRepository } from "../repositories/noteRepository.js";
import { schema } from "../schemas/noteSchema.js";

const noteRouter = Router();

noteRouter.post('/note', validateToken , validateBody(schema) , postNote )
noteRouter.get('/note/:id', validateToken , checkOwner(noteRepository) , getNote )
noteRouter.get('/note', validateToken , getAllNotes )
noteRouter.delete('/note/:id', validateToken , checkOwner(noteRepository) , deleteNote )

export default noteRouter;
import { Router } from "express";
import { deleteCredential, getAllCredentials, getCredential, postCredential } from "../controllers/credentialController.js";
import { checkOwner } from "../middlewares/checkOwner.js";
import { validateBody } from "../middlewares/validateBody.js";
import { validateToken } from "../middlewares/validateToken.js";
import { credentialRepository } from "../repositories/credentialRepository.js";
import { schema } from "../schemas/credentialSchema.js";

const credentialRouter = Router();

credentialRouter.post('/credential', validateToken , validateBody(schema) , postCredential )
credentialRouter.get('/credential/:id', validateToken , checkOwner(credentialRepository) , getCredential )
credentialRouter.get('/credential', validateToken , getAllCredentials )
credentialRouter.delete('/credential/:id', validateToken , checkOwner(credentialRepository) , deleteCredential )

export default credentialRouter;
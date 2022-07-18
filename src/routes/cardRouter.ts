import { Router } from "express";
import { deleteCard, getAllCards, getCard, postCard } from "../controllers/cardController.js";
import { checkOwner } from "../middlewares/checkOwner.js";
import { validateBody } from "../middlewares/validateBody.js";
import { validateToken } from "../middlewares/validateToken.js";
import { cardRepository } from "../repositories/cardRepository.js";
import { schema } from "../schemas/cardSchema.js";

const cardRouter = Router();

cardRouter.post('/card', validateToken , validateBody(schema) , postCard )
cardRouter.get('/card/:id', validateToken , checkOwner(cardRepository) , getCard )
cardRouter.get('/card', validateToken , getAllCards )
cardRouter.delete('/card/:id', validateToken , checkOwner(cardRepository) , deleteCard )

export default cardRouter;
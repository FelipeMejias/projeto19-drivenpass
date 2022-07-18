import { Router } from "express";
import { deleteWifi, getAllWifis, getWifi, postWifi } from "../controllers/wifiController.js";
import { checkOwner } from "../middlewares/checkOwner.js";
import { validateBody } from "../middlewares/validateBody.js";
import { validateToken } from "../middlewares/validateToken.js";
import { wifiRepository } from "../repositories/wifiRepository.js";
import { schema } from "../schemas/wifiSchema.js";

const wifiRouter = Router();

wifiRouter.post('/wifi', validateToken , validateBody(schema) , postWifi )
wifiRouter.get('/wifi/:id', validateToken , checkOwner(wifiRepository) , getWifi )
wifiRouter.get('/wifi', validateToken , getAllWifis )
wifiRouter.delete('/wifi/:id', validateToken , checkOwner(wifiRepository) , deleteWifi )

export default wifiRouter;
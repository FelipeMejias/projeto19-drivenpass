import { Request, Response } from "express";
import { cardService } from "../services/cardService.js";

export async function postCard(req: Request, res: Response) {
    const {userId}=res.locals
    const body = req.body
    await cardService.post({...body,userId})
    res.sendStatus(201)
}
export async function getAllCards(req: Request, res: Response) {
  
}
export async function getCard(req: Request, res: Response) {
  
}
export async function deleteCard(req: Request, res: Response) {
    const {item}=res.locals
    await cardService.erase(item.id)
    res.sendStatus(200)
}
import { Request, Response } from "express";
import { CardBody, cardService } from "../services/cardService.js";

export async function postCard(req: Request, res: Response) {
    const {userId}=res.locals
    const body:CardBody = req.body
    await cardService.post({...body,userId})
    res.sendStatus(201)
}

export async function getCard(req: Request, res: Response) {
    const {item}=res.locals
    const card = await cardService.get(item)
    res.send(card)
}

export async function getAllCards(req: Request, res: Response) {
    const {userId}=res.locals
    const cards=await cardService.getAll(userId)
    res.send(cards)
}

export async function deleteCard(req: Request, res: Response) {
    const {item}=res.locals
    await cardService.erase(item.id)
    res.sendStatus(200)
}
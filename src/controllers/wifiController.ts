import { Request, Response } from "express";
import { wifiService } from "../services/wifiService.js";

export async function postWifi(req: Request, res: Response) {
    const {userId}=res.locals
    const body = req.body
    await wifiService.post({...body,userId})
    res.sendStatus(201)
}
export async function getWifi(req: Request, res: Response) {
  
}
export async function getAllWifis(req: Request, res: Response) {
  
}
export async function deleteWifi(req: Request, res: Response) {
    const {item}=res.locals
    await wifiService.erase(item.id)
    res.sendStatus(200)
}
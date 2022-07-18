import { Request, Response } from "express";
import { credentialService } from "../services/credentialService.js";

export async function postCredential(req: Request, res: Response) {
    const {userId}=res.locals
    const body = req.body
    await credentialService.post({...body,userId})
    res.sendStatus(201)
}
export async function getCredential(req: Request, res: Response) {
  
}
export async function getAllCredentials(req: Request, res: Response) {
  
}
export async function deleteCredential(req: Request, res: Response) {
    const {item}=res.locals
    await credentialService.erase(item.id)
    res.sendStatus(200)
}
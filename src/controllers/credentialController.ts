import { Request, Response } from "express";
import { CredentialBody, credentialService } from "../services/credentialService.js";

export async function postCredential(req: Request, res: Response) {
    const {userId}=res.locals
    const body:CredentialBody = req.body
    await credentialService.post({...body,userId})
    res.sendStatus(201)
}

export async function getCredential(req: Request, res: Response) {
    const {item}=res.locals
    const credential = await credentialService.get(item)
    res.send(credential)
}

export async function getAllCredentials(req: Request, res: Response) {
    const {userId}=res.locals
    const credentials=await credentialService.getAll(userId)
    res.send(credentials)
}

export async function deleteCredential(req: Request, res: Response) {
    const {item}=res.locals
    await credentialService.erase(item.id)
    res.sendStatus(200)
}
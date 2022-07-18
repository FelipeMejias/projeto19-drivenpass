import { Request, Response } from "express";
import { noteService } from "../services/noteService.js";

export async function postNote(req: Request, res: Response) {
    const {userId}=res.locals
    const body = req.body
    await noteService.post({...body,userId})
    res.sendStatus(201)
}
export async function getNote(req: Request, res: Response) {
  
}
export async function getAllNotes(req: Request, res: Response) {
  
}
export async function deleteNote(req: Request, res: Response) {
    const {item}=res.locals
    await noteService.erase(item.id)
    res.sendStatus(200)
}
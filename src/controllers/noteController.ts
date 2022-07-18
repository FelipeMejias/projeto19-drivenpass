import { Request, Response } from "express";
import { NoteBody, noteService } from "../services/noteService.js";

export async function postNote(req: Request, res: Response) {
    const {userId}=res.locals
    const body:NoteBody = req.body
    await noteService.post({...body,userId})
    res.sendStatus(201)
}

export async function getNote(req: Request, res: Response) {
    const note=res.locals.item
    res.send(note)
}

export async function getAllNotes(req: Request, res: Response) {
    const {userId}=res.locals
    const notes=await noteService.getAll(userId)
    res.send(notes)
}

export async function deleteNote(req: Request, res: Response) {
    const {item}=res.locals
    await noteService.erase(item.id)
    res.sendStatus(200)
}
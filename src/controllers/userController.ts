import { Request, Response } from "express";
import { UserData, userService } from "../services/userService.js";

export async function postSignUp(req: Request, res: Response) {
    const data :UserData = req.body
    await userService.signUp(data)
    res.sendStatus(201)
}
export async function postSignIn(req: Request, res: Response) {
    const data :UserData = req.body
    const response = await userService.signIn(data)
    res.send(response)
}
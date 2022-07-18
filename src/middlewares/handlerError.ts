import { NextFunction, Request, Response } from "express";

export function handleError(error:any, req: Request, res: Response, next: NextFunction) {
  console.log(error)
  if (error.type==='unauthorized')return res.status(401).send(error.message)
  if (error.type==='bad request')return res.status(422).send(error.message)
  if (error.type==='not found')return res.status(404).send(error.message)
  return res.sendStatus(500);
}
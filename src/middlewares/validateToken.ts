import { NextFunction, Request, Response } from "express";
import { sessionRepository } from "../repositories/sessionRepository.js";

export async function validateToken( req: Request, res: Response, next: NextFunction) {
  const {token}=req.headers
  if(typeof token!=='string')throw{type:'bad request',message:'token must be a string'}
  token.replace('Bearer ','')
  const session=await sessionRepository.find(token)
  if(!session )throw{type:'unauthorized',message:'token not valid'}
  res.locals.userId=session.userId
  next()
}
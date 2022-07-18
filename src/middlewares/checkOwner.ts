import { NextFunction, Request, Response } from "express";

export function checkOwner(repository:any) {
  return async(req: Request, res: Response, next: NextFunction) => {
    const {id}=req.params
    const item= await repository.find(parseInt(id))
    if (!item) throw {type:'not found',message:'this id do not match any item'}
    const {userId}=res.locals
    if (userId!==item.userId) throw{type:'unauthorized',message:'item do not match this user'}
    delete item.userId
    res.locals.item=item
    next();
  };
}
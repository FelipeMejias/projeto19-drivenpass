import { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";

export function validateBody(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const {error} = schema.validate(req.body);
    if (error) throw {type:'bad request',message:'data do not match this type'}
    next();
  };
}
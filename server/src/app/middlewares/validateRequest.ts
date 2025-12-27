import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
import catchAsync from '../utils/catchAsync';

const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body,"reqbody")
    const validateData = await schema.parseAsync({
      body: req.body,
      cookies: req?.cookies

    });
    console.log(req.body,validateData,'===============>>')
    req.body = validateData.body;
    next();
  });
};
export default validateRequest;

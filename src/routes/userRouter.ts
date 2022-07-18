import { Router } from "express";
import { postSignIn, postSignUp } from "../controllers/userController.js";
import { validateBody } from "../middlewares/validateBody.js";
import { schema } from "../schemas/userSchema.js";

const userRouter = Router();

userRouter.post('/signup',validateBody(schema),postSignUp)

userRouter.post('/signin',validateBody(schema),postSignIn)

export default userRouter;
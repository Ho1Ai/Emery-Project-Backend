import { Router } from "express";
import commentController from "../controller/comments.controller.js";
const commentRouter = new Router();

commentRouter.post('/comment', commentController.appendComment);
commentRouter.get('/comment/id', commentController.getComments)

export default commentRouter
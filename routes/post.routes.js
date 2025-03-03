import { Router } from "express";
import postController from "../controller/post.controller.js";
const postRouter = new Router()

postRouter.post('/post', postController.createPost)
postRouter.get('/post', postController.getPosts)
postRouter.get('/post/id', postController.getOnePost)

export default postRouter
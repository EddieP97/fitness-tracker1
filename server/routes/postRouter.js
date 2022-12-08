import { Router } from 'express';

import {createPost } from '../controllers/post.js';
import auth from '../middleware/auth.js';

const postRouter = Router();
postRouter.post('/', auth, createPost);
export default postRouter;
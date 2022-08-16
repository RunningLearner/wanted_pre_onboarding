import { Router } from 'express';
import * as posts from './posts.routes.js';

const router = Router();

router.use(posts.path, posts.router);

export default router;
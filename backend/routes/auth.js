import Router from 'express';

const router = Router();
import * as authController from '../controllers/auth.js';
import { protectRoute } from '../middlewares/auth.js';

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.put('/profile', protectRoute, authController.updateProfile);

export default router;
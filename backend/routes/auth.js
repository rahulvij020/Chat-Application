import Router from 'express';

const router = Router();
import * as authController from '../controllers/auth.js';
import { protectRoute } from '../middlewares/auth.js';

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/profile', protectRoute, authController.getProfile);
router.put('/profile/:id', protectRoute, authController.updateProfile);

export default router;
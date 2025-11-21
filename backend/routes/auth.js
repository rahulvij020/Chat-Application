import Router from 'express';

const router = Router();
import * as authController from '../controllers/auth.js';
import { protectRoute } from '../middlewares/auth.js';
import { upload } from '../lib/multer.js';

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/profile', protectRoute, authController.getProfile);
router.put('/profile/:id', protectRoute, upload.single('avatar'), authController.updateProfile);

export default router;
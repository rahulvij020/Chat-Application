import Router from 'express';
const router = Router();
import * as messageController from '../controllers/message.js';
import { protectRoute } from '../middlewares/auth.js';

router.post('/send/:id', protectRoute, messageController.sendMessage);
router.get('/contacts', protectRoute, messageController.getAllUsers);
router.get('/chats', protectRoute, messageController.getAllChats);
router.get('/:id', protectRoute, messageController.getMessages);
router.delete('/delete/:id', protectRoute, messageController.deleteMessage);

export default router;
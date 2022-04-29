import express from 'express';
import MessageController from './controllers/MessageController';

const router = express.Router();

/**
 * Map routes to controller methods
 */

// Image
router.post('/message', MessageController.post);
router.get('/messages', MessageController.list);

export default router;

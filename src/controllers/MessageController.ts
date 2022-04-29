import { Request, Response } from 'express';
import asyncHandler from '../utils/asyncHandler';
import { createMessage, getMessages } from '../services/MessageService'

export interface MessagePostRequestBody {
    content: string;
    userId: number
}

export interface MessageGetRequestQuery {
    page?: number;
    size?: number;
}

export default {
    post: asyncHandler(async (req: Request, res: Response) => {
        const { content, userId } = req.body
        if (!content || userId) {
            return res.status(400).json({ error: `Missing content or userId body parameters` });
        }
        const messageData: MessagePostRequestBody = { content, userId }
        const message = await createMessage(messageData)
        return res.status(200).json(message);
    }),
    list: asyncHandler(async (req: Request, res: Response) => {
        const { page, size } = req.query
        const query: MessageGetRequestQuery = { page: (page as any), size: (size as any) }
        const response = await getMessages(query)
        return res.status(200).json(response);
    })
};

import { Message } from '../db/models/Message';
import { MessagePostRequestBody, MessageGetRequestQuery } from '../controllers/MessageController'

export async function createMessage(messageData: MessagePostRequestBody) {
  console.log(messageData.content)
  console.log(Buffer.byteLength(messageData.content, 'utf8'));
  const message = await Message.create(messageData)
  return message
}


export async function getMessages(query: MessageGetRequestQuery) {
  let messages = [];

  if (query.size) {
    const limit = Number(query.size)
    const offset = query.page ? Number(query.page) * Number(query.size) : 0
    messages = await Message.findAll({
      limit,
      offset,
      order: [
        ['createdAt', 'DESC']
      ]
    })
  } else {
    messages = await Message.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    })
  }

  return messages
}
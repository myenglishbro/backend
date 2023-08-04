import messageModel from "../models/messages.model.js"

export default class MessagesManager {
    getMessages = async () => {
      try {
        return await messageModel.find().lean().exec();
      } catch (error) {
        return error;
      }
    }
  
    createMessage = async (message) => {
      if (message.user.trim() === '' || message.message.trim() === '') {
          // Evitar crear mensajes vacíos
          return null;
      }
  
      try {
          return await messageModel.create(message);
      } catch (error) {
          return error;
      }
  }
  

  deleteAllMessages = async () => {
    try {
        console.log("Deleting all messages...");
        const result = await messageModel.deleteMany({});
        console.log("Messages deleted:", result);
        return result;
    } catch (error) {
        console.error("Error deleting messages:", error);
        return error;
    }
}

  }
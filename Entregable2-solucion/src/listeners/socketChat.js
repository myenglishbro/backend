
import MessagesManager from "../dao/managers/messageManagerMongo.js";
const messagesManager = new MessagesManager();


const socketChat = (socketServer) => {
    socketServer.on("connection",async(socket)=>{

      socket.on("mensaje", async (info) => {
          // Guardar el mensaje utilizando el MessagesManager
          console.log(info)
          await messagesManager.createMessage(info);
          // Emitir el mensaje a todos los clientes conectados
          socketServer.emit("chat", await messagesManager.getMessages());
        })
        socket.on("clearchat", async () => {
          // Borrar todos los mensajes utilizando el MessagesManager
          await messagesManager.deleteAllMessages();
          // Emitir a todos los clientes para notificar que el chat ha sido vaciado
          socketServer.emit("chatCleared");
      });
      
    
    })
};

export default socketChat;
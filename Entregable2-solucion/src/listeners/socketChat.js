
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
      });
    })
};

export default socketChat;
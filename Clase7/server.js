//Esta línea importa el módulo http, que es un módulo integrado en Node.js
// que proporciona funcionalidad para crear servidores HTTP.
const http = require("http")

//esto se ejecutara cuando alguien ejecute alguna peticion alservido
const server = http.createServer((request,response) => {
  console.log("Alguien me hizo una peticion")
  response.end("Hola mundo")
});

//le indico el puerto por donde escuchara el servidor
server.listen(8080, () => {
  console.log('El servidor está escuchando en el puerto 8080');
});
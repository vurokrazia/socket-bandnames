// Server Model: Contiene todo el servidor de express + socket.io configurado
const Server = require('./models/server'); // Increase to 8 GB

// Paquete para leer y establecer las variables de entorno
require('dotenv').config();


// Inicializar la instancia del server
const server = new Server();

// Ejecutar el server
server.execute();
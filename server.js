const http = require('http'); //adiciona o http ao projeto
const port = process.env.PORT || 3000; //cria uma porta 3000 como padrão
const app = require('./app')

const server = http.createServer(app);

server.listen(port);
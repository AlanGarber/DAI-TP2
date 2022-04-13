import express from 'express'
import PizzaController from './src/controllers/pizzaController'

const server = express();
const puerto = 2548;

server.use(express.json());
server.use('pizza',pizzaController);

server.listen(puerto, () => {
    console.log(`This is a server on the port ${puerto}`);
})

console.log(server);


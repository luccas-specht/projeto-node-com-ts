/**
 * 1 -> com TS não há mais necessidade de usar const e require("express")
 * 2 -> apenas com o import já funciona
 */

import express from 'express';

/**
 * Caso não adicionamos as libs externas como dependencia de desenvolvimento o TS não consegue saber quais são os metodos, tipos etc que aquela lib exporta
 * Um warning bem comum que nos é apresentado é esse: `npm i --save-dev @types/express`
 * então, sempre que nós quisermos saber os tipos daquela biblioteca, nós precisamos instalar outra biblioteca(a biblioteca com Tipagem 😀)
 */

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'grymio cai' });
});

app.listen(3333, () => {
  console.log('Server started in port: 3333 🚀');
});

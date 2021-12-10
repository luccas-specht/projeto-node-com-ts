"use strict";
/**
 * 1 -> com TS não há mais necessidade de usar const e require("express")
 * 2 -> apenas com o import já funciona
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
/**
 * Caso não adicionamos as libs externas como dependencia de desenvolvimento o TS não consegue saber quais são os metodos, tipos etc que aquela lib exporta
 * Um warning bem comum que nos é apresentado é esse: `npm i --save-dev @types/express`
 * então, sempre que nós quisermos saber os tipos daquela biblioteca, nós precisamos instalar outra biblioteca(a biblioteca com Tipagem 😀)
 */
const app = (0, express_1.default)();
app.get('/', (res, resp) => {
    return resp.json({ message: 'grymio cai' });
});
app.listen(3333, () => {
    console.log('Server started in port: 3333 🚀');
});

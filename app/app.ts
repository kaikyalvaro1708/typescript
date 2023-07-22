import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event =>{
    event.preventDefault(); //evita que a página recarregue
    controller.adiciona();
});
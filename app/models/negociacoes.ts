import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    // Lista e tipo da lista
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    // somente para a leitura
    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}
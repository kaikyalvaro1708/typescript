export class Negociacoes {
    constructor() {
        // Lista e tipo da lista
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // somente para a leitura
    lista() {
        return this.negociacoes;
    }
}

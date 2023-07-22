export class Negociacao{
    // Atributos que só podem ser mudados pelo construtor ou pela class
    #data;
    #quantidade;
    #valor;

    // Atribui valores através do constructor
    constructor(data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    // Atributo get para podemos acessar em app.js
    get data(){
        return this.#data;
    }
    get quantidade(){
        return this.#quantidade;
    }
    get valor(){
        return this.#valor;
    }
    get volume(){
        return this.#quantidade * this.#valor;
    }
}
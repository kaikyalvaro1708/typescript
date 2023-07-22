export class Negociacao{
    // Atributos que só podem ser mudados pelo construtor ou pela class
    private _data: Date; // tipo da variável
    private _quantidade: number;
    private _valor: number;

    // Atribui valores através do constructor
    constructor(data: Date, quantidade: number, valor:number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // Atributo get para podemos acessar em app.js
    get data(): Date{
        return this._data;
    }
    get quantidade(): number{
        return this._quantidade;
    }
    get valor(): number{
        return this._valor;
    }
    get volume(): number{
        return this._quantidade * this._valor;
    }
}
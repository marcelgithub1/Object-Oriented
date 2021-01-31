//Declarando classe cliente
export class Client{
    name;
    _cpf;
    _rg;

    //Encapsulamento
    get cpf(){
        return this._cpf;
    };

    get rg(){
        return this._rg;
    };

    //Constructor
    constructor(name, cpf, rg){
        this.name = name;
        this._cpf = cpf;
        this._rg = rg;
    };
};
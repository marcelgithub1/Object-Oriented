//Declarando classe cliente
export class Client{
     //Constructor
     constructor(name, cpf, rg, password){
        this.name = name;
        this._cpf = cpf;
        this._rg = rg;
        this._password = password;
    };

    authentication(){
        return true;
    };

    //Encapsulamento
    get cpf(){
        return this._cpf;
    };

    get rg(){
        return this._rg;
    };   
};
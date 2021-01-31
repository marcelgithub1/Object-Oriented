import { Client } from "./Client.js";

//Declarando classe conta corrente
export class CheckingCount {
    static countAcc = 0;
    agency;
    _client;
    //Atributo Privado
    _value = 0;

    //Encapsulamento 

    set client(newClient){
        if(newClient instanceof Client){
        this._client = newClient;
        }
    };

    get client(){
        return this._client;
    };

    get value(){
        return this._value;
    };

    // Constructor

    constructor(client, agency){
        this._client = client;
        this.agency = agency;
        CheckingCount.countAcc += 1;
    };


    //    ** Metodos **

    //Metodo Deposito
    deposit(money){
        if(money <= 0) return  console.log(`Valor ${money} é inválido.`);
        this._value += money;
        return 
        //console.log(`Você depositou ${money}, saldo atual: ${this._value}`);        
    };

    //Metodo Saque
    withdraw(money){
        if(this._value >= money){
            this._value -= money;
            //console.log(`Você sacou ${money} e seu saldo atual é ${this._value}.`)
            return money;
        }else {    
            console.log('Você não possue saldo suficente;')
        }
    };

    //Metodo Transferência
    transfer(money, account){ 
        const moneyTransf = this.withdraw(money);
        account.deposit(moneyTransf);
        return moneyTransf;
    }
};
import { Account } from "./Account.js";

//Declarando classe conta corrente
export class CheckingAccount extends Account {
    // Constructor
     constructor(balance, client, agency){        
         super(0, client, agency);
        CheckingAccount.countAcc += 1;
    };

    //Contador de contas
    static countAcc = 0;

    //Metodo Saque com 10% de desconto sobreescrevendo o metodo saque da Account.js
    withdraw(money){
        let rate = 1.1;
        return this._withdraw(money, rate);
    };
};

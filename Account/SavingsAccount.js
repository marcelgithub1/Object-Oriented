import { Account } from "./Account.js";

export class SavingAccount extends Account{
    
    //Constructor
    constructor(balance, client, agency){
        super(balance, client, agency);
    };

    widthdraw(money){
        let rate = 1.02;
        this._withdraw(money, rate);
    };
};
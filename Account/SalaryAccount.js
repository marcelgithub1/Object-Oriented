import { Account } from "./Account.js";

export class SalaryAccount extends Account {
    constructor (balance, client, agency){
        super(balance, client, agency);
    };

    withdraw(money){
        let rate = 1.01;
        return this._withdraw(money, rate);
    };
};
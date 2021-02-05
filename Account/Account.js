//Classe Conta [Abstrata]
export class Account {
    //Constructor
    constructor(balance, client, agency){
        if(this.constructor == Account){
            throw new Error ("Ação não permitida. [Erro ao criar conta.]")
        }
        this._balance = balance;
        this._client = client;
        this._agency = agency;   
    };

    //Encapsulamento
    set client(newClient){
        if(newClient instanceof Client){
        this._client = newClient;
        };
    };

    get client(){
        return this._client;
    };

    get value(){
        return this._value;
    };

    //    ** Metodos **
    //Metodo Deposito
    deposit(money){
        if(money <= 0) return  console.log(`Valor ${money} é inválido.`);
        this._balance += money;
        return        
    };

    //Metodo Saque
    withdraw(money){
        throw new Error("Solitação errada!");
    };

    //Metodo saque privado
    _withdraw(money, rate){
        const balanceWithdrew = rate * money;
        if(this._balance >= balanceWithdrew){
            this._balance -= balanceWithdrew;            
            return balanceWithdrew;
        };

        return console.log('Você não possui saldo suficente;')
    };

    //Metodo Transferência
    transfer(money, account){ 
        const moneyTransf = this.withdraw(money);
        account.deposit(moneyTransf);
        return moneyTransf;
    };
};
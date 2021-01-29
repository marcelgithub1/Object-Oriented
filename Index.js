//Declarando classe cliente
class Client{
    name;
    cpf;
    rg;
};
//Declarando classe conta corrente
class CheckingCount {
    agency;
    //private attribute
    _value = 0;

    //Metodo Deposito
    deposit(money){
        if(money <= 0) return  console.log(`Valor ${money} é inválido.`);
        this._value += money;
        console.log(`Você depositou ${money}, saldo atual: ${this._value}`);        
    };

    //Metodo Saque
    withdraw(money){
        if(this._value >= money){
            this._value -= money;
            console.log(`Você sacou ${money} e seu saldo atual é ${this._value}.`)
            return money;
        }else {    
            console.log('Você não possue saldo suficente;')
        }
    };
};

const client1 = new Client();
client1.name = 'Marcelo';
client1.cpf = 43322214093;
client1.rg = 8462134896;

const countClient1 = new CheckingCount
countClient1.agency = 2410;
countClient1.value = 0;

countClient1._value += 5000;
var wdrawMoney = countClient1.withdraw(50);
countClient1.deposit(-500);
//Declarando classe conta corrente
export class CheckingCount {
    agency;
    //Atributo Privado
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
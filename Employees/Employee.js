export class Employee {
    constructor(name, salary, cpf){
        this._name = name;
        this._salary = salary;
        this._cpf = cpf;

        this._bonus = 1;
        this._password;
    };

    authentication(password){ 
        return password == this._password;
    };

    signUpPass(password){
        this._password = password;
    };
};
import { Client } from "./Client.js";
import { Manager } from "./Employees/Manager.js";
import { Ceo } from "./Employees/Ceo.js"
import { Authentication } from "./Authentication.js";

//criando novo funcionario e Cliente
const diretor = new Ceo("Marcelo", 10000, 61521356413);
const gerente = new Manager("João", 7000, 68963248752);
const cliente = new Client("Lais", 789456123, 86453213215, "231");
diretor.signUpPass("Ola");
gerente.signUpPass("322");

//Autenticando o usuario
const logado = Authentication.login(diretor, "Ola");
const testelog = Authentication.login(gerente, "322");
const tesclient = Authentication.login(cliente, "231");

//Retorno de True ou False na autenticação
console.log(logado);
console.log(testelog);
console.log(tesclient);
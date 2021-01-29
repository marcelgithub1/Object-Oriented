import{Client} from "./Client.js";
import{CheckingCount} from "./CheckingCount.js";

const client1 = new Client();
client1.name = 'Marcelo';
client1.cpf = 43322214093;
client1.rg = 8462134896;

const client2 = new Client();
client2.name = 'Manuella';
client2.cpf = 33347722114;
client2.rg = 2234123234;

const countMarcelo = new CheckingCount();
countMarcelo.client = client1;
countMarcelo.agency = 302;
console.log(countMarcelo);

const countManu = new CheckingCount();
countManu.client = client2;
countManu.agency = 2410;
console.log(countManu);

console.log(client1);
console.log(client2);

countMarcelo._value += 5000;
console.log(countMarcelo);
countMarcelo.transfer(10000, countManu);
console.log(countMarcelo);
console.log(countManu);
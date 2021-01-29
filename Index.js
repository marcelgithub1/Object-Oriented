import{Client} from "./Client.js";
import{CheckingCount} from "./CheckingCount.js";

const client1 = new Client();
client1.name = 'Marcelo Augusto';
client1.cpf = 43322214093;
client1.rg = 8462134896;

const countClient1 = new CheckingCount
countClient1.agency = 2410;
countClient1.value = 0;

countClient1._value += 5000;
var wdrawMoney = countClient1.withdraw(50);
countClient1.deposit(-500);
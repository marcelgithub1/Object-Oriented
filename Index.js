import{Client} from "./Client.js";
import{CheckingCount} from "./CheckingCount.js";

const client1 = new Client('Marcelo', 43322214093, 8462134896);

const client2 = new Client('Manuella', 33347722114, 2234123234);

const countMarcelo = new CheckingCount(client1, 302);

const countManu = new CheckingCount(client2, 2410);

//Visualizando no console a conta Marcelo
console.log(countMarcelo);
//Visualizando no console a conta Manuella
console.log(countManu);
//Visualizando no console o contador
console.log(CheckingCount.countAcc);

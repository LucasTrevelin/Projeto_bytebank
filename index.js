import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente("Ricardo", 1112233309);  // criação de cliente1
const cliente2 = new Cliente("Alice", 8882233309);  // criação de cliente2

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001); //criação de conta corrente


const conta2 = new ContaCorrente(cliente2, 102);

contaCorrenteRicardo.depositar(500); // Operação dentro da conta corrente - depósito;

contaCorrenteRicardo.transferir(200, conta2); // // Operação dentro da conta corrente - transferência (conta com funções depósito e saque, p/ mais detalhes, consultar ContaCorrente.js);

console.log(conta2.numeroDeContas);
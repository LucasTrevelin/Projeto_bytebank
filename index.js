import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js"; 
import { ContaSalario } from "./ContaSalario.js";


const cliente1 = new Cliente("Ricardo", 1112233309);  // criação de cliente1

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001); //criação de conta corrente
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(100);

contaCorrenteRicardo.depositar(500); // Operação dentro da conta corrente - depósito;
contaCorrenteRicardo.sacar(100); // // Operação dentro da conta corrente - saque;

console.log(contaSalario);
console.log(contaCorrenteRicardo);



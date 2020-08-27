// Classe abstrata (não é para ser instanciada diretamente, é para ser herdada)
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta diretamente, pois é uma classe abstrata");
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;

        
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Método abstrato
    sacar(valor){         // crianto um método (função) da classe, com valor como atributo da classe
        throw new Error("Método sacar da conta é abstrato")
    }

        _sacar(valor, taxa){
            const valorSacado = taxa * valor;
            if(this._saldo >= valorSacado){
                this._saldo -= valorSacado;
                return valorSacado;
            }
            return 0;
        }



    depositar(valor){
        if (valor <= 0){
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
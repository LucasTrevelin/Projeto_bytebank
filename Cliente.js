export class Cliente{ //Criando uma classe


    constructor(nome, cpf){
        this.nome = nome
        this._cpf = cpf;
    }
    
    get cpf(){
        return this._cpf;
    }

}
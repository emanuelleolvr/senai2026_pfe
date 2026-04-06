class Jogador {
    #nome;
    #numero;

constructor(nome, numero) {
    this.#nome = nome;
    this.#numero = numero;
}

    treinar() {
        return '3 vezes na semana';
    };
    getNome(){
        return this.#nome;
    };
    getNumero(){
        return this.#numero;
    };
}
class JogadorFutebol extends Jogador{
    #peDominante;
    #totalGols;

    constructor(peDominante, totalGols, nome, numero) {
        super(nome,numero);
        this.#peDominante = peDominante;
        this.#totalGols = totalGols;
    };
    driblar(){
        return 'Tomou uma caneta';
    };
    fazerGol(qtdGols){
        return this.#totalGols += qtdGols
    };
    mostrar(){
        return 'O jogador ' + super.getNome() + ' número ' + super.getNumero() + ' pé dominante ' + this.#peDominante + ' tem ' + this.#totalGols + ' gols.';

    }
}

class JogadorfutebolAmericano extends Jogador{
    #listajogadas;
    #jardasConquistadas;
    constructor(nome, numero, listajogadas, jardasconquistadas){
        super(nome,numero);
        this.#listajogadas=listajogadas;
        this.#jardasConquistadas=jardasconquistadas;
    }
    fazerTouchDown(){
        return 'O jogador número' + super.getNumero()+'fez TouchDown'
    }
    bloquear(){
        return ' O jogador realizou um bloqueio'
    }
    correrJardas(valor){
        this.#jardasConquistadas += valor;
        return this.#jardasConquistadas;
    }
}

class JogadorBasquete extends Jogador{
    #alturaSalto;
    #totalCestas;
    constructor(nome, numero,alturaSalto,totalCestas){
        super(nome,numero);
        this.#alturaSalto=alturaSalto;
        this.#totalCestas=totalCestas;
    }
    arremessar(){
        return 'O jogador  ' + super.getNome() + ' e ' + super.getNumero() + 'arremessou a bola.'
    }
    fazerEnterrada(){
        this.#totalCestas ++;
        return 'Enterrada realizada com sucesso!'
    }
}


const jogador = new JogadorFutebol ('Esquerdo',20,'Manu',7);
jogador.fazerGol(2);
console.log(jogador.mostrar());
const jogadoramericano=new JogadorfutebolAmericano('manu', 10, 20,130);
console.log(jogadoramericano.fazerTouchDown());
const jogadorbasquete= new JogadorBasquete('pierre', 6, 1.34, 20);
console.log(jogadorbasquete.arremessar());

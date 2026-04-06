class Estudante{
    nome;
    #ra;
    #cpf;

    constructor(nome,ra,cpf){
        this.nome=nome;
        this.#ra=ra;
        this.#cpf=cpf;
    }
}

const Emanuele= new Estudante('Emanuele', 3234, 454645789);
console.log(Emanuele);
class Pessoa{
    nome;// atributo público
    #cpf='57176239844'; // atributo privado

    //metodos getter e setter
    setCpf(valor){
        this.#cpf=valor;
    }
    getCpf(){
        return this.#cpf;
    }
}

const estudante=new Pessoa();// instancia do objeto Pessoa
estudante.nome='Emanuele';// acesso ao atributo público nome
estudante.setCpf(2324232432);//acesso ao atributo privado cpf
console.log('O cpf é: '+ estudante.getCpf());
console.log(estudante.nome);
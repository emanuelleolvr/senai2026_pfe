class Carro{
    //atributos
    modelo='S10 cabine dupla';
    marca='Chevrolet';
    ano=2025;
    valor=200000;

    //métodos
    mover(){
        console.log('Estou me movendo!');
    }
    mostrar(){
        console.log('O carro é: ' + this.modelo+ ' '+ this.marca+' '+ this.ano+ ' '+ this.valor)
    }
}

//Intanciei a classe=mesma coisa que criar o objeto
const caminhonete=new Carro();
caminhonete.mover();// utilizar métodos
caminhonete.mostrar();
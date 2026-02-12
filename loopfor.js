//for(let i=1; i<11; i++){
    //console.log(i);
//}

//for(let i=10; i>0; i--){
    //console.log(i);
//}

//for(let i=1; i<=10; i++){
    //console.log(" 9 x " + i + "=" + (9*i));
//}


//Exercício 1
function calcularPontuacaoFinal(pontosBase) {
    let dividido = pontosBase / 2;
    let final = dividido ** 2;

    console.log("Pontuação final:", final);
}

//calcularPontuacaoFinal(10);

//Exercício 2

const prompt = require('prompt-sync')()
let idade=Number(prompt("Digite aqui sua idade: "));
if(idade>=18){
    console.log("O usuário é maior de idade");
}else if(idade>=16){
    console.log("O usuário tem idade suficiente para pegar livros emprestados");
}else{
    console.log(" O usuário não pode pegar livros")
}

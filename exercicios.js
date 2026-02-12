//Exercíico 4
/*let hoje=new Date()
console.log("Dia:", hoje.getDate());
console.log("Mês:", hoje.getMonth() + 1); 
console.log("Ano:", hoje.getFullYear());*/

//Exercício 5
/*const prompt = require('prompt-sync')()
 let Nascimento = Number(prompt("Digite seu ano de nascimento: "));
 let anoAtual = new Date().getFullYear();

 let idade = anoAtual - Nascimento;

 console.log("Você tem", idade, "anos.");*/

//Exercício 6

/*let hoje = new Date(2026, 1, 5);


let fimAno = new Date(2026, 11, 31);

let diferenca = fimAno - hoje;

let dias = Math.ceil(diferenca / (1000 * 60 * 60 * 24));

console.log("Faltam", dias, "dias para o fim do ano.");*/

//Exercício 7
/*const prompt = require('prompt-sync')()
let numero = Number(prompt("Digite um número decimal: "));

console.log("Arredondado:", Math.round(numero));*/

//Exercício 8
/*const prompt = require('prompt-sync')()
let numeroUsuario = Number(prompt("Digite um número de 1 a 10: "));

let aleatorio = Math.floor(Math.random() * 10) + 1;

console.log("Número gerado:", aleatorio);

if (numeroUsuario === aleatorio) {
    console.log("São iguais!");
} else {
    console.log("São diferentes!");
}*/

//Exercício 9
/*const prompt = require('prompt-sync')()
let numero = Number(prompt("Digite um número: "));

console.log("Raiz quadrada:", Math.sqrt(numero));*/
//Exercício 10
/*onst prompt = require('prompt-sync')()
let nome = prompt("Digite seu nome completo: ");

console.log(nome.toUpperCase());
console.log(nome.toLowerCase());*/

//Exercício 11
/*const prompt = require('prompt-sync')()
let palavra = prompt("Digite uma palavra: ");

console.log("Primeiras 3:", palavra.slice(0, 3));
console.log("Últimas 3:", palavra.slice(-3));*/

//Exercício 12
const prompt = require('prompt-sync')()
let nome = prompt("Digite seu nome: ");

console.log("Quantidade de caracteres:", nome.length);

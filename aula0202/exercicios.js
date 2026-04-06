//Exercício 1
let nome=0
function cumprimento(nome){
   console.log('Olá,', nome)
}
//cumprimento('Emanuele');

//let a=0;
//let b=0;

//Exercício 2
const somar=function(a,b){
    console.log('A soma dos números é ' +(num1+num2));
}
//somar(14,12);

//Exercício 3
let nota1=10;
let nota2=9;
let nota3=3;
let soma=(nota1+nota2+nota3);
let resultado=soma/3;
//console.log(' A média aritimética é: ' + resultado);

//Exercício 4
//const prompt = require('prompt-sync')()
//let numero=Number(prompt('Digite um número: '))
//if(numero%2===0){
    //console.log('O número é par');
//}else{
    //console.log('O número é ímpar');
//}


//Exercício 5
//const prompt = require('prompt-sync')();

let numero1 = Number(prompt('Digite um numero: '));
let numero2 = Number(prompt('Digite um segundo numero: '));

if (numero1 === numero2) {
    console.log(`Os números são iguais (${numero1}).`);
} else if (numero1 === 0 || numero2 === 0) {
    console.log("Pelo menos um dos números é igual a zero.");
} else if (numero1 > numero2) {
    console.log(`O primeiro número (${numero1}) é maior que o segundo (${numero2}).`);
} else {
    console.log(`O segundo número (${numero2}) é maior que o primeiro (${numero1}).`);
}

//Exercício 6
const prompt = require('prompt-sync')();
let idade = Number(prompt("Digite a idade: "));

if (idade < 12) {
    console.log("criança");
} else if (idade < 18) {
    console.log("adolescente");
} else if (idade < 60) {
    console.log("adulto");
} else {
    console.log("idoso");
}

//Exercício 7
//const prompt = require('prompt-sync')();
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));
let op = prompt("Digite a operação (+, -, *, /):");

//let resultado;

if (op === "+") {
    resultado = num1 + num2;
} else if (op === "-") {
    resultado = num1 - num2;
} else if (op === "*") {
    resultado = num1 * num2;
} else if (op === "/") {
    resultado = num1 / num2;
} else {
    console.log("Operação inválida");
}

if (resultado !== undefined) {
    console.log("Resultado:", resultado);
}

//Exercício 8

//const prompt = require('prompt-sync')();
let nota = Number(prompt("Digite a nota (0 a 100):"));

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("e");
} else {
    console.log("v");
}

//Exercício 9

//const prompt = require('prompt-sync')();
let preco = Number(prompt("Digite o preço:"));
let cupom = prompt("Digite o cupom (BRONZE, PRATA, OURO):").toUpperCase();

let desconto = 0;

if (cupom === "BRONZE") {
    desconto = 0.05;
} else if (cupom === "PRATA") {
    desconto = 0.10;
} else if (cupom === "OURO") {
    desconto = 0.15;
} else {
    desconto = 0; // sem desconto
}

let precoFinal = preco - (preco * desconto);

console.log("Preço final:", precoFinal);

//Exercício 10


//const prompt = require('prompt-sync')();
let peso = Number(prompt("Digite o peso (kg):"));
let altura = Number(prompt("Digite a altura (m):"));

let imc = peso / (altura ** 2);

console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
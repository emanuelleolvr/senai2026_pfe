//Função Padrão 
function cumprimento(nome){
   console.log('Seja bem-vinda(o)!', nome)
}

//cumprimento('Emanuele');

//Função anônima
const somar=function(num1,num2){
    console.log('A soma dos números é ' +(num1+num2));
}
//somar(14,12);

//Função de seta

const subtrair=(num1,num2)=>{
    console.log('A subtração dos números é '+(num1-num2));
}
subtrair(14,12);


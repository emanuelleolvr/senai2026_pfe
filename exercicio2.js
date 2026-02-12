const calcular=function(num1,num2,opercao){
    if(opercao=='+'){
        console.log('A soma dos números é: '+ (num1+num2));
    }else if(opercao=='-'){
        console.log('A subtração dos números é : '+ (num1-num2));
    }else if(opercao=='*'){
        console.log('A multiplicação dos números é : '+ (num1*num2));
    }else if(opercao=='/'){
        console.log('A divisão dos número é: ' + (num1/num2));
    }else{
        console.log('Operação inválida')
    }
}
calcular(14,12,"+");

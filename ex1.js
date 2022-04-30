//1. Escreva funções que implementam as quatro operações aritméticas. Todas elas devem
//receber dois valores numéricos como parâmetro e devolver o valor de sua respectiva
//operação. Faça a implementação usando a palavra function para todas elas.


function soma (a,b) {
    return a+b
}

function subtra (a,b) {
    return a-b
}

function div (a,b) {
    if (b==0) {
        return 'Nao pode ter divisao por 0' 
    }
    return a/b
}

function multi (a,b) {
    return a*b
}

console.log('soma: '+ soma(2, 6));
console.log('subtracao: '+ subtra(10, 8));
console.log('divisao: '+ div(60, 4));
console.log('multiplicacao: '+ multi(11, 11));
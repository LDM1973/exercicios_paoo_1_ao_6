//const soma = (a,b) => {
//    return a + b
//}
//console.log(soma(1,1));
//2. Refaça o exercício 1 usando arrow functions.



const soma = (a,b) => a + b

const subtra = (a,b) => a - b

const div = (a,b) => { 
    if (b==0) {
    return 'Nao pode ter divisao por 0' 
    }
    return a/b
}

const multi = (a,b) => a * b

console.log('soma: '+ soma(2, 6));
console.log('subtracao: '+ subtra(10, 8));
console.log('divisao: '+ div(60, 4));
console.log('multiplicacao: '+ multi(11, 11));
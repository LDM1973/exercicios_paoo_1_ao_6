//3. Crie um objeto JSON que abriga todas as operações do exercício 2.

let calculadora = {
     soma: (a, b) => a + b,
     subtracao: (a, b) => a - b,
     divisao: (a, b) => { 
         if (b==0) {
         return 'Nao pode ter divisao por 0' 
         }
         return a/b
     },
     multiplicacao: (a, b) => a * b
 }
 console.log('soma: '+ calculadora.soma(1,1));
 console.log('subtracao: '+ calculadora.subtracao(1,1));
 console.log('divisao: '+ calculadora.divisao(1,0));
 console.log('multiplicacao: '+ calculadora.multiplicacao(1,1));


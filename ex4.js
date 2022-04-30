const readlineSync = require('readline-sync');

let calculadora = {
    soma: (a, b) => a + b,
    subtra: (a, b) => a - b,
    div: (a, b) => a / b,
    multi: (a, b) => a * b
}

let opcao;

do {
    opcao = readlineSync.question('Digite uma das opcoes\n 1- Soma\n 2- Subtracao\n 3- Multiplicacao\n 4- Divisao\n 5- Sair\n');
    switch (opcao) {
        case "1":
            console.log(`soma: ${calculadora.soma(3, 4)}\n`);
            break;

        case "2":
            console.log(`Subtracao: ${calculadora.subtra(10, 8)}\n`);
            break;


        case "3":
            console.log(`Divisao:  ${calculadora.div(20, 4)}\n`)
            break;

        case "4":
            console.log(`multiplicacao: ${calculadora.multi(11, 11)}\n`)
            break;

        case "5":
            console.log("Saindo...");
            break;

        default:
            console.log("Por favor digite uma opcao valida");
    }

} while (opcao != 5)







































































































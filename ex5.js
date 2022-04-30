require('dotenv').config();
const axios = require('axios').default;

const readlineSync = require('readline-sync');



const searchTemps = (lat, long) => {
    return new Promise ((resolve, reject) => {
        axios.get(process.env.WEATHER_API, {
            params: {
                lat: lat,
                lon: long,
                appid: process.env.API_KEY,
                units: process.env.UNITS
            }
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
}


const loop = () => {
    var opcao;

    opcao = readlineSync.question('Bem vindo!\n\nPara comecar, por favor digite uma das opcoes abaixo para:\n\n1- Buscar a temperatura pela Latitude e Longitude\n2- Sair\n');
    switch (opcao) {
        case '1':   
        
            let lat = readlineSync.question('Digite a Latitude: ');
            let long = readlineSync.question('Digite a Longitude: ');
            
             searchTemps(lat, long)
                .then((response) => {
                    console.log(`A temperatura do lugar indicado é: ${response.data.main.temp}\n`);
                    loop()
                }).catch((error) => {
                    console.log('Erro ao buscar temperatura');
                    loop()
                });
            
            break;

        case '2':
            console.log("Saindo");
            break;

        default:
            console.log("Por favor, digite uma opção valida"); 
            loop()
            break;
    }
}
loop()
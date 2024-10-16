let dataInicial = "2024-01-01";
let dataFinal = "2024-12-31";

function diferencaEntreDatas(dataComeco, dataFim) {
    return new Date(dataFim) - new Date(dataComeco);
}

let diasAteAlgo = diferencaEntreDatas(dataInicial,dataFinal);
console.log(diasAteAlgo);

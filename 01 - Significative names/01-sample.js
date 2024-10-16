function acharNumerosPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]);
        }
    }
    return pares;
}

let numerosParaAvaliar = [1, 2, 3, 4, 5, 6];
let listaPares = acharNumerosPares(numerosParaAvaliar);
console.log(listaPares);

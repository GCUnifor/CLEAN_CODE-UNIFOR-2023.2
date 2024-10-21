function calcularFrete(distancia) {
    const valorPorKilometro = 10
    return distancia * valorPorKilometro;
}
const distanciaAvaliada = 50
const frete = calcularFrete(distanciaAvaliada);
console.log(`O valor do frete é: ${frete}`);

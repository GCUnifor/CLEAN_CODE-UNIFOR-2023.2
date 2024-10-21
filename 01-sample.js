function calcularDesconto(preco) {
    const taxaDesconto = 0.15
    return preco - (preco * taxaDesconto);
}
const valorPedido = 100
const precoFinal = calcularDesconto(valorPedido);
console.log(`Preço com desconto: ${precoFinal}`);

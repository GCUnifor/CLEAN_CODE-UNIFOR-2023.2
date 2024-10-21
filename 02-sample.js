function verificarSePodeDirigir(idade) {
    const maioridade = 18
    if (idade >= maioridade) {
        return 'Pode dirigir';
    } else {
        return 'Não pode dirigir';
    }
}
const idadeavaliada = 16
console.log(verificarSePodeDirigir(idadeavaliada));

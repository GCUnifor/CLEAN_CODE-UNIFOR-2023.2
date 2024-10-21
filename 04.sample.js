function tentarLogin(senha) {
    let tentativas = 0;
    const senhaCorreta = '12345';
    const  limiteTentativas = 3
    while (tentativas < limiteTentativas) {
        if (senha === senhaCorreta) {
            return 'Login efetuado com sucesso!';
        }
        tentativas++;
    }

    return 'Tentativas de login excedidas.';
}
var senhaEntrada = '123'
console.log(tentarLogin(senhaEntrada));

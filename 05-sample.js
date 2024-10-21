function calcularSalarioFuncionario(horasTrabalhadas, valorHora, cargo) {
    const salarioBase = horasTrabalhadas * valorHora;
    const bonusGerente = 1000;
    const bonusSupervisor = 500;
    const bonusBase = 200;
    let salarioComBonus;
    if (cargo === 'gerente') {
        salarioComBonus = salarioBase + bonusGerente;
    } else if (cargo === 'supervisor') {
        salarioComBonus = salarioBase + bonusSupervisor;
    } else {
        salarioComBonus = salarioBase + bonusBase;
    }
    let desconto = 300
    const salarioComDesconto = salarioComBonus - desconto;
    let tetoImpostoDeRenda = 5000
    let taxaTetoImposto = 0.27
    let medioImpostoDeRenda = 3000
    let taxaMedioImposto = 0.18
    let taxaBaseImposto = 0.11
    let salarioFinal;
    if (salarioComDesconto > tetoImpostoDeRenda) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaTetoImposto);
    } else if (salarioComDesconto > medioImpostoDeRenda) {
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaMedioImposto);
    } else {
        salarioFinal = salarioComDesconto - (salarioComDesconto * taxaBaseImposto);
    }

    return salarioFinal;
}

const salario = calcularSalarioFuncionario(160, 25, 'gerente');
console.log(`O salário final é: ${salario}`);

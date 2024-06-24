//3. Crie um programa que simule uma carteira de dinheiro. Este programa vai precisar ter uma carteira contendo saldo, transações de entrada e saídas. Ou seja, será um objeto com estas propriedades. Depois crie uma função para lançar uma entrada e uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar um erro ou avisar.


export interface Carteira {
    saldo: number;
    entradas: number[];
    retiradas: number[];
}

export function novaEntrada(carteira: Carteira, entrada: number) {
    carteira.entradas.push(entrada);
    carteira.saldo += entrada;
    console.log(`Foi depositado: ${entrada}`)
}

export function novaRetirada(retirada: number, carteira: Carteira) {
    carteira.retiradas.push(retirada);
    carteira.saldo -= retirada;
    console.log(carteira)
}

// export function exibirCarteira() {
//     console.log(carteira)
// }
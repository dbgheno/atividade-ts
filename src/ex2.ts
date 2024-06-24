// 2. Crie uma função que receba uma lista de objetos contendo nota e peso, realize a média das notas considerando o peso.
// Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado


export interface Nota {
    nota: number;
    peso: number;
}

export function calcularMedia2(notas: Nota[]): number {
    let soma = 0;
    let somaPeso = 0;

    for (const nota of notas) {
        soma += nota.nota * nota.peso;
        somaPeso += nota.peso;
    }

    return soma / somaPeso;

} 



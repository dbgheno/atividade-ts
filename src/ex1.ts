// 1. Crie uma função que receba 2 números e retorne um objeto contendo a média e também um indicador boolean de aprovado/reprovado. Considere aprovado com média >= 6.

interface Resultado {
    media: number;
    aprovado: boolean;
}

export function calcularMedia(nota1: number, nota2: number): Resultado {

    const media = (nota1 + nota2) / 2;

    let aprovado = true;

    if (media < 6) {
        aprovado = false;
    }

    return {
        media: media,
        aprovado //acima a chave está com propriedade atribuída e aqui não atribuí pois varia´vel de mesmo nome é entendida automaticamente como a propriedade de uma chave.
    }
}
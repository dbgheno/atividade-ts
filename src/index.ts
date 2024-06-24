// imports
import { calcularMedia } from "./ex1";
import { calcularMedia2, Nota } from "./ex2";
import { Carteira, novaEntrada, novaRetirada } from "./ex3";
import { Product, products, getProducts, newProduct, showProduct, updateProduct, deleteProduct } from "./ex4";


// Ex 1.
const resultado = calcularMedia(5, 8);
console.log(`Ex 1:`);
console.log(resultado)


// Ex 2.
const notas: Nota[] = [
    { nota: 10, peso: 3 },
    { nota: 9, peso: 3 },
    { nota: 8, peso: 4 },
];
console.log(`Ex 2:`);
console.log(calcularMedia2(notas));


// Ex 3.
const carteira1: Carteira = {
    saldo: 500,
    entradas: [],
    retiradas: []
}
console.log(`Ex 3:`);
console.log(carteira1);
novaEntrada(carteira1, 100);
console.log(carteira1);


// Ex 4.
getProducts();

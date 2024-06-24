// 4. Crie um programa para cadastrar, listar e excluir produtos de uma lista com tipagem de Produto.

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

export const products:any[] = [];

export function getProducts() {
    console.log(products);
}

export function newProduct(product:Product){
    product.id = products.length + 1;
    product.name = product.name;
    product.price = product.price;
    product.category = product.category;

    products.push(product);
}

export function showProduct(productId:number){
    const i = products.findIndex((product:Product) => product.id === productId);
    if (i === -1) { console.log('Produto não encontrado'); return; }
    console.log(products[i]);
}

export function updateProduct(productId:number, product:Product){
    const i = products.findIndex((product:Product) => product.id === productId);
    if (i === -1) { console.log('Produto não encontrado'); return; }

    products[i].name = product.name;
    products[i].price = product.price;
    products[i].category = product.category;

    console.log(products[i]);
}

export function deleteProduct(productId:number){
    const i = products.findIndex((product:Product) => product.id === productId);
    if (i === -1) { console.log('Produto não encontrado'); return; }

    console.log(`O produto ${products[i].name} foi excluído`);

    products.splice(i,1);
}
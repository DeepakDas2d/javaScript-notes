let product = {
    name: 'tshirt',
    price: 450,
    size: 'M',
}
let product2 = {
    name: 'tshirt',
    price: 450,
    size: 'M',
}
let product3 = {
    name: 'tshirt',
    price: 450,
    size: 'S',
}

function isIdenticalProduct(product1, product2) {
    if(typeof product1 !== 'object' && typeof product2 !=='object'){
        console.warn("Parameter passed was not an object");
        return false;
    } else if( product1 == product2){
        return true;
    }else if(
        product1.name === product2.name &&
        product1.price === product2.price &&
        product1.size === product2.size){
            return true
        } else{
            return false
        }

}


console.log(isIdenticalProduct(product, "hello"));
console.log(isIdenticalProduct(product, product2));
console.log(isIdenticalProduct(product2, product3));
console.log(isIdenticalProduct(product, product3));
console.log(isIdenticalProduct(product, product));
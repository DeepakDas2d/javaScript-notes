let product = {
    name: 'Tshirt',
    price: 500,
    rating: {
        stars: 4.5,
        noReviews: 600,
    },
};

console.log(typeof product);
console.log(product);

let strProduct = JSON.stringify(product);
console.log(strProduct);
console.log(typeof strProduct);

let objProduct = JSON.parse(strProduct)
console.log(objProduct)
console.log(typeof objProduct)
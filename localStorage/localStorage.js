let product = {
    name: 'Tshirt',
    price: 500,
    rating: {
        stars: 4.5,
        noReviews: 600,
    },
};

localStorage.setItem("product",JSON.stringify(product));

let getProduct = JSON.parse(localStorage.getItem("product"));
console.log(getProduct)

localStorage.removeItem("product");
localStorage.setItem("product",JSON.stringify(product));
localStorage.clear()
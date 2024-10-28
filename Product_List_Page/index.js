let products = [
    {
        product: "Laptop",
        price: "$999.99",
        description: "A high performance laptop for work and gaming",
        image: <img src= "./images.html/image1.png" alt="Phone" width="500" />
    },
    {
        product: "Smartphone",
        price: "$499.99",
        description: "A high performance phone with a great camera and fast processing",
        image: <img src="./images/phone.jpg" alt="Phone" width="500" />
    },
    {
        product: "Headphones",
        price: "$149.99",
        description: "Noise cancelling headphones for immersive sound",
        image: <img src="./images/headphones.webp" alt="Phone" width="500" />
    },
];


function displayProducts() {
    const productList = document.getElementById('products');

    productList.innerHTML = '';

    products.forEach(product => {
        let productDiv = document.createElement('div');
        let product = document.createElement('h2');
        let Price = document.createElement('p');
        let description = document.createElement('p');
        let Image = document.createElement('img');

        product.textContent = products.products;
        Price.textContent = products.price;
        description = products.description
        Image.src = products.image;

        productDiv.appendChild(product);
        productDiv.appendChild(price);
        productDiv.appendChild(description);
        productDiv.appendChild(image);

        products.appendChild(productDiv);
    });
}
document.getElementById('load-products-btn').addEventListener('click', displayProducts);
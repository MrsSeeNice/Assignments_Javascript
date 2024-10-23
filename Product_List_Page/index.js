let products = [
    {
        name: "Laptop",
        price: "$999.99",
        description: "A high performance laptop for work and gaming",
        image: "image1.jpg"
    },
    {
        name: "Smartphone",
        price: "$499.99",
        description: "A high performance phone with a great camera and fast processing",
        image: "image2.jpg"
    },
    {
        name: "Headphones",
        price: "$149.99",
        description: "A high-quality headphones with noise cancellation and Bluetooth connectivity",
        image: "image3.jpg"
    }
];

function displayProducts() {
    const productList = document.getElementById('product-list'); // Get the product-list div


    productList.innerHTML = '';

    products.forEach(product => {
 
        const productDiv = document.createElement('div');
        const productName = document.createElement('h2');
        const productPrice = document.createElement('p');
        const productImage = document.createElement('img');

        productName.textContent = product.name;
        productPrice.textContent = product.price;
        productImage.src = product.image; // This should be a valid image URL

        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productImage);

        productList.appendChild(productDiv);
    });
}

document.getElementById('load-products-btn').addEventListener('click', displayProducts);

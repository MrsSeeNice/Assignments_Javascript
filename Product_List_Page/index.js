let products = [
    {
        product: "Laptop",
        price: "$999.99",
        description: "A high performance laptop for work and gaming",
        image: "./images/image-1.jpg"
    },
    {
        product: "Smartphone",
        price: "$499.99",
        description: "A high performance phone with a great camera and fast processing",
        image: "./images/image-2.jpg"
    },
    {
        product: "Headphones",
        price: "$149.99",
        description: "Noise cancelling headphones for immersive sound",
        image: "./images/image-3.jpg"
    },
];


function displayProducts() {
    const productList = document.getElementById('products');
    productList.innerHTML = ''; 
    products.forEach(item => {
        let productDiv = document.createElement('div');

        let productName = document.createElement('h2');
        productName.textContent = item.product; 

        let price = document.createElement('p');
        price.textContent = item.price; 

        let description = document.createElement('p');
        description.textContent = item.description; 

        let image = document.createElement('img');
        image.src = item.image; 
        image.alt = item.product;
        productDiv.appendChild(productName);
          productDiv.appendChild(price);
          productDiv.appendChild(description);
          productDiv.appendChild(image);
          productList.appendChild(productDiv);
      });
  }
  
  document.getElementById('load-products-btn').addEventListener('click', displayProducts);
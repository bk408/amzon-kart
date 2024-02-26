// Fetch the data from API endpoint

async function fetchProductsData() {
  // using try & catch method

  try {
    const response = await fetch("https://fakestoreapi.com/products");

    // Condition check for data

    if (!response.ok) {
      throw new Error("No data Found, Please try after some time");
    }

    // convert response into json

    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error(error);
  }
}

function displayData(products) {
  const productContainer = document.getElementById("content");

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.innerHTML = `
                   <div class="products">
                   <div class="product-card">

                    <h2 class="product-title">${product.title}</h2>
                    <p class="product-price">Price: $${product.price}</p>
                    <p class="product-description">Description: ${product.description}</p>
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    </div>
                    </div>
                `;

    productContainer.appendChild(productElement);
  });
}

fetchProductsData();

// product-detail.js
import { menuArray } from "./data.js";
import { addToCart } from "./cart.js";

// Function to get query parameters from the URL
function getQueryParams() {
  const params = {};
  const queryString = window.location.search.substring(1); // Remove the '?' character
  const queries = queryString.split("&");

  queries.forEach((query) => {
    const [key, value] = query.split("=");
    params[key] = decodeURIComponent(value);
  });

  return params;
}

// Get the product ID from the URL
const params = getQueryParams();
const productId = parseInt(params.id);

if (productId) {
  // Find the product in the menuArray
  const product = menuArray.find((item) => item.id === productId);

  if (product) {
    // Render the product details
    renderProductDetails(product);
  } else {
    // Handle product not found
    console.error("Product not found");
    document.body.innerHTML = "<h1>Product not found</h1>";
  }
} else {
  // Handle missing product ID
  console.error("Product ID not specified");
  document.body.innerHTML = "<h1>Product ID not specified</h1>";
}

// Function to render product details into the HTML
function renderProductDetails(product) {
  // Update product image
  const productImage = document.getElementById("product-image");
  const productImageContainer = productImage ? productImage.parentElement : null;
  
  if (productImage && product.imageUrl) {
    productImage.src = product.imageUrl;
    productImage.alt = product.name;
  } else if (productImage && productImageContainer) {
    // Remove the image element
    productImage.remove();
    // Apply margin-top to the container of the image
    productImageContainer.style.marginTop = "-30px";
  }
  
  // Update product name
  const productName = document.getElementById("product-name");
  if (productName) {
    productName.textContent = product.name;
  }

  // Update product description
  const productDescription = document.getElementById("product-description");
  if (productDescription) {
    productDescription.textContent = product.description;
  }

  // Update price
  const productPrice = document.getElementById("product-price");
  if (productPrice) {
    productPrice.textContent = `₽ ${product.price}`;
  }

  // Update rating if available (assuming product has a `rating` property)
  const productRating = document.getElementById("product-rating");
  if (productRating && product.additionalInformation) {
    const ratingInfo = product.additionalInformation.find(
      (info) => info.label === "Rating"
    );
    if (ratingInfo) {
      productRating.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <span><strong class="text-dark">${ratingInfo.value}</strong> - 20 Reviews</span>
      `;
    }
  }

  // Render Add Ons
  const addOnsContainer = document.getElementById("add-ons-list");
  const fallbackImageUrl = "assets/images/faviconMain/androidchrome192.png"; // Replace with your fallback image URL
  
  if (addOnsContainer && product.addOns) {
    addOnsContainer.innerHTML = product.addOns
      .map((addOn) => {
        const imageUrl = addOn.imageUrl || fallbackImageUrl; // Use fallback image if imageUrl is missing
        return `
          <li>
            <div class="mini-modal">
              <div class="dz-media">
                <img src="${imageUrl}" alt="${addOn.name}">
              </div>
              <div class="dz-content">
                <p class="title">${addOn.name}</p>
                <div class="form-check search-content">
                  <label for="add-on-${addOn.id}" class="price-label">₽${addOn.price}</label>
                  <input class="form-check-input add-on-checkbox" type="checkbox" value="${addOn.id}" data-price="${addOn.price}" data-name="${addOn.name}" data-image="${imageUrl}">
                </div>
                <div class="btn-quantity style-1 m-t5">
                  <input id="addon-quantity-${addOn.id}" type="number" value="1" min="1" disabled>
                </div>
              </div>
            </div>
          </li>
        `;
      })
      .join("");
  }
  
  
  // Add event listener to enable/disable quantity input when checkbox is toggled
  document.querySelectorAll(".add-on-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const quantityInput = document.getElementById(
        `addon-quantity-${checkbox.value}`
      );
      quantityInput.disabled = !checkbox.checked;
      if (!checkbox.checked) {
        quantityInput.value = 1; // Reset quantity if unchecked
      }
    });
  });
  

  // Render Additional Information
  const additionalInfoTable = document.getElementById("additional-info-table");
  if (additionalInfoTable && product.additionalInformation) {
    additionalInfoTable.innerHTML = product.additionalInformation
      .map((info) => {
        if (info.label === "Rating") {
          // Handle rating display with stars
          const fullStars = Math.floor(info.value);
          const halfStar = info.value % 1 >= 0.5 ? 1 : 0;
          const emptyStars = 5 - fullStars - halfStar;
          let starsHtml = "";

          for (let i = 0; i < fullStars; i++) {
            starsHtml += '<i class="fas fa-star text-secondary"></i> ';
          }
          if (halfStar) {
            starsHtml += '<i class="fas fa-star-half-alt text-secondary"></i> ';
          }
          for (let i = 0; i < emptyStars; i++) {
            starsHtml += '<i class="far fa-star text-secondary"></i> ';
          }

          return `
            <tr>
              <td>${info.label}</td>
              <td><span class="rating-bx">${starsHtml}</span></td>
            </tr>
          `;
        } else {
          return `
            <tr>
              <td>${info.label}</td>
              <td>${info.value}</td>
            </tr>
          `;
        }
      })
      .join("");
  }

  // Handle "Add To Cart" button click
  const addToCartBtn = document.getElementById("add-to-cart-btn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      addProductToCart(product);
      alert("Товар добавлен в корзину!");
    });
  }

  // Handle "Buy Now" button click
  const buyNowBtn = document.getElementById("buy-now-btn");
  if (buyNowBtn) {
    buyNowBtn.addEventListener("click", () => {
      addProductToCart(product);
      // Redirect to checkout page
      window.location.href = "checkout.html";
    });
  }
}

// Function to add product (and selected add-ons) to cart
function addProductToCart(product) {
  const quantityInput = document.getElementById("product-quantity");
  const quantity = parseInt(quantityInput.value) || 1;

  // Clone the product object to avoid modifying the original
  const productToAdd = { ...product, quantity };

  // Get selected add-ons with quantities
  const selectedAddOns = Array.from(
    document.querySelectorAll(".add-on-checkbox:checked")
  ).map((checkbox) => {
    const quantity = parseInt(
      document.getElementById(`addon-quantity-${checkbox.value}`).value
    );
    return {
      id: checkbox.value,
      name: checkbox.dataset.name,
      price: parseFloat(checkbox.dataset.price),
      quantity: quantity,
      imageUrl: checkbox.dataset.image,
    };
  });

  // If there are add-ons, add them to the product
  if (selectedAddOns.length > 0) {
    productToAdd.addOns = selectedAddOns;
  }

  // Add the product to the cart
  addToCart(productToAdd);
}


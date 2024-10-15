// cart.js
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

// Global cart array to store items
let cart = [];

// Function to save cart to localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to load cart from localStorage
function loadCartFromLocalStorage() {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    cart = JSON.parse(cartData);
  }
}

// Function to add an item to the cart
function addToCart(item) {
  // Check if the item is already in the cart
  const existingItem = cart.find(
    (cartItem) =>
      cartItem.id === item.id &&
      JSON.stringify(cartItem.addOns) === JSON.stringify(item.addOns)
  );

  if (existingItem) {
    // If the item is already in the cart with the same add-ons, increase its quantity
    existingItem.quantity += item.quantity;
  } else {
    // If the item is not in the cart, add it with a unique UUID
    cart.push({ ...item, uuid: uuidv4() });
  }

  // Save the updated cart to localStorage
  saveCartToLocalStorage();

  // Update the cart UI to reflect the changes
  updateCartUI();
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
  // Filter out the item with the specified UUID from the cart array
  cart = cart.filter((cartItem) => cartItem.uuid !== itemId);

  // Save the updated cart to localStorage
  saveCartToLocalStorage();

  // Update the cart UI to reflect the changes
  updateCartUI();
}

// Function to update the quantity of an item in the cart
function updateItemQuantity(itemId, newQuantity) {
  // Find the item in the cart based on its UUID
  const item = cart.find((cartItem) => cartItem.uuid === itemId);

  if (item) {
    // Update the item's quantity, ensuring it's at least 1
    item.quantity = newQuantity > 0 ? newQuantity : 1;
  }

  // Save the updated cart to localStorage
  saveCartToLocalStorage();

  // Update the cart UI to reflect the changes
  updateCartUI();
}

// Function to update the cart UI in the header and the cart section
function updateCartUI() {
  // Get elements from the DOM for the cart list and cart items section
  const cartList = document.querySelector(".cart-list");
  const cartItemsSection = document.querySelector("#cart-items");

  // Calculate the total number of items and the total price
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // Update the item count displayed in the header
  const cartBtnBadge = document.querySelector(".cart-btn .badge");
  const cartCountElement = document.querySelector("#cart-count");

  if (cartBtnBadge) {
    cartBtnBadge.textContent = cartItemCount;
  }
  if (cartCountElement) {
    cartCountElement.textContent = `(${cartItemCount})`;
  }

  // Generate the HTML for the items in the cart dropdown (in the header)
  if (cartList) {
    cartList.innerHTML = cart
      .map(
        (item) => `
          <li class="cart-item">
              <div class="media">
                  <div class="media-left">
                      <a href="product-detail.html?id=${item.id}">
                          <img alt="/" class="media-object" src="${item.imageUrl}" />
                      </a>
                  </div>
                  <div class="media-body">
                      <h6 class="dz-title">
                          <a href="product-detail.html?id=${item.id}" class="media-heading">${item.name}</a>
                      </h6>
                      <span class="dz-price">₽ ${item.price}</span>
                      <span class="item-close" data-id="${item.uuid}">&times;</span>
                  </div>
              </div>
          </li>
        `
      )
      .join("");

    // Append total price and buttons at the bottom of the cart dropdown
    cartList.insertAdjacentHTML(
      "beforeend",
      `
        <li class="cart-item text-center d-flex justify-content-between">
            <h6 class="text-primary mb-0">Итого:</h6>
            <h6 class="text-primary mb-0">₽ ${cartTotal.toFixed(2)}</h6>
        </li>
        <li class="text-center d-flex">
 
            <a href="checkout.html" class="btn btn-outline-primary w-100 d-block btn-hover-1">
                <span>ЗАКАЗАТЬ</span>
            </a>
        </li>
      `
    );
  }

  // Generate the HTML for the items in the cart section (sidebar)
  if (cartItemsSection) {
    cartItemsSection.innerHTML = cart
      .map(
        (item) => `
          <div class="cart-item style-1">
              <div class="dz-media">
                  <img src="${item.imageUrl}" alt="${item.name}" />
              </div>
              <div class="dz-content">
                  <div class="dz-head">
                      <h6 class="title mb-0">${item.name}</h6>
                      <a href="javascript:void(0);" class="remove-item" data-id="${
                        item.uuid
                      }">
                          <i class="fa-solid fa-xmark text-danger"></i>
                      </a>
                  </div>
                  <div class="dz-body">
                      <div class="btn-quantity style-1">
                          <span class="input-group-btn-vertical">
                              <button class="btn btn-default bootstrap-touchspin-down" type="button" data-id="${
                                item.uuid
                              }">
                                  <i class="ti-minus"></i>
                              </button>
                              <input type="text" value="${
                                item.quantity
                              }" readonly />
                              <button class="btn btn-default bootstrap-touchspin-up" type="button" data-id="${
                                item.uuid
                              }">
                                  <i class="ti-plus"></i>
                              </button>
                          </span>
                      </div>
                      <h5 class="price text-primary mb-0">₽ ${(
                        item.price * item.quantity
                      ).toFixed(2)}</h5>
                  </div>
              </div>
          </div>
        `
      )
      .join("");

    // Update total price in the sidebar
    const itemTotalElement = document.querySelector("#item-total");
    const cartTotalElement = document.querySelector("#cart-total");

    if (itemTotalElement) {
      itemTotalElement.textContent = `₽ ${cartTotal.toFixed(2)}`;
    }
    if (cartTotalElement) {
      cartTotalElement.textContent = `₽ ${(cartTotal + 8.5).toFixed(2)}`; // Adjust as needed
    }
  }

  // Add event listeners to remove buttons in both the header and sidebar
  document.querySelectorAll(".item-close").forEach((button) => {
    button.addEventListener("click", (e) => {
      const itemId = e.target.dataset.id;
      removeFromCart(itemId);
    });
  });

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (e) => {
      const itemId = e.target.dataset.id;
      removeFromCart(itemId);
    });
  });

  // Add event listeners to the quantity increase buttons
  document.querySelectorAll(".bootstrap-touchspin-up").forEach((button) => {
    button.addEventListener("click", (e) => {
      const itemId = e.currentTarget.dataset.id;
      const item = cart.find((cartItem) => cartItem.uuid === itemId);
      if (item) {
        updateItemQuantity(itemId, item.quantity + 1);
      }
    });
  });

  // Add event listeners to the quantity decrease buttons
  document.querySelectorAll(".bootstrap-touchspin-down").forEach((button) => {
    button.addEventListener("click", (e) => {
      const itemId = e.currentTarget.dataset.id;
      const item = cart.find((cartItem) => cartItem.uuid === itemId);
      if (item) {
        updateItemQuantity(itemId, item.quantity - 1);
      }
    });
  });
}

// Load the cart from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  loadCartFromLocalStorage();
  updateCartUI();
});

export { addToCart, removeFromCart, updateCartUI };

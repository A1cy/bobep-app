// checkout.js

// Function to load cart from localStorage
function loadCartFromLocalStorage() {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    return JSON.parse(cartData);
  } else {
    return [];
  }
}

// Function to render the order summary
function renderOrderSummary(cart) {
  const orderSummaryBody = document.getElementById("order-summary");

  if (!orderSummaryBody) return;

  // Clear existing content
  orderSummaryBody.innerHTML = "";

  let subtotal = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="product-item-img">
        <img src="${item.imageUrl}" alt="${item.name}" width="50">
      </td>
      <td class="product-item-name">
        ${item.name} ${item.addOns ? "(with add-ons)" : ""} x ${item.quantity}
      </td>
      <td class="product-price">₽ ${itemTotal.toFixed(2)}</td>
    `;

    orderSummaryBody.appendChild(row);
  });

  // Calculate taxes and total
  const taxes = subtotal * 0.1; // Assuming 10% tax rate
  const total = subtotal + taxes;

  // Update the totals in the table
  document.getElementById("order-subtotal").textContent = `₽ ${subtotal.toFixed(
    2
  )}`;
  document.getElementById("order-taxes").textContent = `₽ ${taxes.toFixed(2)}`;
  document.getElementById("order-total").textContent = `₽ ${total.toFixed(2)}`;
}

// Function to handle form submission
function handlePlaceOrder(event) {
  // Prevent default form submission
  event.preventDefault();

  // Collect form data
  const billingForm = document.querySelector(".shop-form");
  const formData = new FormData(billingForm);

  // Convert form data to an object
  const customerInfo = {};
  formData.forEach((value, key) => {
    customerInfo[key] = value;
  });

  // Get cart data
  const cart = loadCartFromLocalStorage();

  // Create order object
  const order = {
    customerInfo,
    cart,
    orderDate: new Date().toLocaleString(),
    orderId: generateOrderId(),
  };

  // Save order to localStorage (you might want to send it to a server instead)
  localStorage.setItem("lastOrder", JSON.stringify(order));

  // Clear the cart
  localStorage.removeItem("cart");

  // Show a confirmation message
  alert("Спасибо за ваш заказ!");

  // Show the print invoice button
  const printInvoiceBtn = document.getElementById("print-invoice-btn");
  if (printInvoiceBtn) {
    printInvoiceBtn.style.display = "inline-block";
  }

  // Optionally, redirect to a confirmation page
  // window.location.href = "order-confirmation.html";
}

// Function to generate a random order ID
function generateOrderId() {
  return Math.floor(Math.random() * 1000000);
}

// Function to print the invoice
function printInvoice() {
  const orderData = localStorage.getItem("lastOrder");
  if (!orderData) {
    alert("No order data available for printing.");
    return;
  }

  const order = JSON.parse(orderData);

  // Create a new window for the invoice
  const invoiceWindow = window.open(
    "",
    "Print Invoice",
    "height=600,width=800"
  );

  // Build the invoice HTML
  invoiceWindow.document.write(`
    <html>
      <head>
        <title>Invoice - Order #${order.orderId}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { text-align: center; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          table, th, td { border: 1px solid #000; }
          th, td { padding: 8px; text-align: left; }
          .total { font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>Invoice</h1>
        <p><strong>Order ID:</strong> ${order.orderId}</p>
        <p><strong>Order Date:</strong> ${order.orderDate}</p>
        <h2>Customer Information</h2>
        <p>
          ${order.customerInfo["dzFirstName"] || ""} ${
    order.customerInfo["dzLastName"] || ""
  }<br>
          ${order.customerInfo["dzOther[Address]"] || ""}<br>
          ${order.customerInfo["dzOther[Town/City]"] || ""}, ${
    order.customerInfo["dzOther[State/County]"] || ""
  } ${order.customerInfo["Postcode/Zip"] || ""}<br>
          ${order.customerInfo["dzEmail"] || ""}<br>
          ${order.customerInfo["dzPhoneNumber"] || ""}
        </p>
        <h2>Order Summary</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
  `);

  let subtotal = 0;

  order.cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    invoiceWindow.document.write(`
      <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>₽ ${item.price.toFixed(2)}</td>
        <td>₽ ${itemTotal.toFixed(2)}</td>
      </tr>
    `);
  });

  const taxes = subtotal * 0.1; // Assuming 10% tax rate
  const total = subtotal + taxes;

  invoiceWindow.document.write(`
          </tbody>
        </table>
        <p class="total"><strong>Subtotal:</strong> ₽ ${subtotal.toFixed(2)}</p>
        <p class="total"><strong>Taxes:</strong> ₽ ${taxes.toFixed(2)}</p>
        <p class="total"><strong>Total:</strong> ₽ ${total.toFixed(2)}</p>
        <p>Thank you for your purchase!</p>
      </body>
    </html>
  `);

  invoiceWindow.document.close();
  invoiceWindow.focus();
  invoiceWindow.print();
}

// Event listener for "Place Order Now" button
document
  .getElementById("place-order-btn")
  .addEventListener("click", handlePlaceOrder);

// Event listener for "Print Invoice" button
document
  .getElementById("print-invoice-btn")
  .addEventListener("click", printInvoice);

// On page load, render the order summary
document.addEventListener("DOMContentLoaded", () => {
  const cart = loadCartFromLocalStorage();
  renderOrderSummary(cart);
});

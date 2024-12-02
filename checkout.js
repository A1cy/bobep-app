// checkout.js
const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",

});
// Function to load cart from localStorage
function loadCartFromLocalStorage() {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    return JSON.parse(cartData);
  } else {
    return [];
  }
}

function calculateDeliveryFee(subtotal) {
  if (subtotal >= 3000) {
    return 0; // Free delivery for orders 3000 ₽ and above
  } else if (subtotal >= 2500) {
    return 75; // Delivery fee of 75 ₽ for orders between 2500 and 2999 ₽
  } else if (subtotal >= 2000) {
    return 100; // Delivery fee of 100 ₽ for orders between 2000 and 2499 ₽
  } else {
    return 150; // Base delivery fee for orders below 2000 ₽
  }
}

function renderOrderSummary(cart) {
  const orderSummaryBody = document.getElementById("order-summary");

  if (!orderSummaryBody) return;

  // Clear existing content
  orderSummaryBody.innerHTML = "";

  let subtotal = 0;

  cart.forEach((item) => {
    const validPrice = isNaN(item.price) ? 0 : item.price; // Validate price
    const itemTotal = validPrice * item.quantity;
    subtotal += itemTotal;

    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="product-item-img">
        <img src="${item.imageUrl}" alt="${item.name}" width="50">
      </td>
      <td class="product-item-name">
        ${item.name} x ${item.quantity}
      </td>
      <td class="product-price">₽ ${itemTotal.toFixed(2)}</td>
    `;

    orderSummaryBody.appendChild(row);
  });

  // Calculate and display totals
  const deliveryFee = calculateDeliveryFee(subtotal);
  const total = subtotal + deliveryFee;

  document.getElementById("order-subtotal").textContent = `₽ ${subtotal.toFixed(
    2
  )}`;
  document.getElementById(
    "order-delivery-fee"
  ).textContent = `₽ ${deliveryFee.toFixed(2)}`;
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

 

function printInvoice() {
  const orderData = localStorage.getItem("lastOrder");
  if (!orderData) {
    alert("No order data available for printing.");
    return;
  }

  const order = JSON.parse(orderData);

  // Calculate subtotal
  let subtotal = 0;
  order.cart.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  // Calculate delivery fee
  const deliveryFee = calculateDeliveryFee(subtotal);
  const total = subtotal + deliveryFee;

  // Create a new window for the invoice
  const invoiceWindow = window.open(
    "",
    "Распечатать счет-фактуру",
    "height=800,width=600"
  );

  // Build the invoice HTML
  invoiceWindow.document.write(`
    <html>
      <head>
        <title>Invoice - Order #${order.orderId}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          h1 { text-align: center; }
          .logo { text-align: center; margin-bottom: 20px; }
          .logo img { max-width: 150px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          table, th, td { border: 1px solid #000; }
          th, td { padding: 8px; text-align: left; }
          .total { font-weight: bold; }
          .text-right { text-align: right; }
        </style>
      </head>
      <body>
        <div class="logo">
          <img src="${
            window.location.origin
          }/assets/images/faviconMain/androidchrome192.png" alt="Logo">
        </div>
        <h1>Счёт</h1>
        <p><strong>Номер заказа:</strong> ${order.orderId}</p>
        <p><strong>Дата заказа:</strong> ${order.orderDate}</p>
        <h2>Информация о клиенте</h2>
        <p>
          ${order.customerInfo["dzFirstName"] || ""} ${
    order.customerInfo["dzLastName"] || ""
  }<br>
          ${order.customerInfo["dzOther[Address]"] || ""}<br>
          ${order.customerInfo["dzEmail"] || ""}<br>
          ${order.customerInfo["dzPhoneNumber"] || ""}
        </p>
        <h2>Заказ</h2>
        <table>
          <thead>
            <tr>
              <th>Продукт</th>
              <th>Дополнения</th>
              <th>Количество</th>
              <th>Цена</th>
              <th>Всего</th>
            </tr>
          </thead>
          <tbody>
  `);

  order.cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;

    // Calculate add-ons total
    let addOnsTotal = 0;
    let addOnsText = "";
    if (item.addOns && item.addOns.length > 0) {
      addOnsText = item.addOns
        .map((addOn) => {
          addOnsTotal += addOn.price;
          return `${addOn.name} (₽${addOn.price.toFixed(2)})`;
        })
        .join(", ");
    } else {
      addOnsText = "Нет";
    }

    // Include add-ons price in item total
    const totalPrice = (item.price + addOnsTotal) * item.quantity;

    invoiceWindow.document.write(`
      <tr>
        <td>${item.name}</td>
        <td>${addOnsText}</td>
        <td class="text-right">${item.quantity}</td>
        <td class="text-right">₽ ${(item.price + addOnsTotal).toFixed(2)}</td>
        <td class="text-right">₽ ${totalPrice.toFixed(2)}</td>
      </tr>
    `);
  });

  invoiceWindow.document.write(`
          </tbody>
        </table>
        <table>
          <tr>
            <td>Подытог:</td>
            <td class="text-right">₽ ${subtotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Стоимость доставки:</td>
            <td class="text-right">₽ ${deliveryFee.toFixed(2)}</td>
          </tr>
          <tr>
            <td class="total">Итого:</td>
            <td class="text-right total">₽ ${total.toFixed(2)}</td>
          </tr>
        </table>
        <p>Спасибо за Ваш выбор!</p>
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

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const orderForm = document.getElementById("orderForm");
const formMessage = document.getElementById("formMessage");

orderForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const product = document.getElementById("product").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !product) {
    formMessage.textContent = "Please fill in your name, phone number and order type.";
    return;
  }

  const text =
    `Hello Cozy Bakes by Wardah!%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Order: ${encodeURIComponent(product)}%0A` +
    `Details: ${encodeURIComponent(message || "No additional details.")}`;

  // Replace 230XXXXXXXX with the bakery's real WhatsApp number.
  const whatsappNumber = "230553912224";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

  formMessage.textContent = "Your order request is ready. Opening WhatsApp...";

  setTimeout(() => {
    window.open(whatsappUrl, "_blank");
  }, 500);
});

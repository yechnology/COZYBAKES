document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const active = mainNav.classList.toggle("active");
            menuToggle.setAttribute("aria-expanded", active);
        });

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => mainNav.classList.remove("active"));
        });
    }

    // Set Current Copyright Year
    const yearEl = document.getElementById("year");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // WhatsApp Order Handler
    const orderForm = document.getElementById("orderForm");
    const formMessage = document.getElementById("formMessage");

    if (orderForm) {
        orderForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const product = document.getElementById("product").value;
            const dietary = document.getElementById("dietary").value;
            const message = document.getElementById("message").value.trim();

            if (!name || !phone || !product) {
                formMessage.style.color = "var(--error)";
                formMessage.textContent = "Please fill in your name, phone number, and selected product.";
                return;
            }

            const whatsappText =
                `*NEW ORDER REQUEST - Cozy Bakes*%0A%0A` +
                `👤 *Name:* ${encodeURIComponent(name)}%0A` +
                `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
                `🧁 *Item:* ${encodeURIComponent(product)}%0A` +
                `🌾 *Preference:* ${encodeURIComponent(dietary)}%0A` +
                `📝 *Details:* ${encodeURIComponent(message || "None provided")}`;

            const phoneNum = "230553912224";
            const targetUrl = `https://wa.me/${phoneNum}?text=${whatsappText}`;

            formMessage.style.color = "var(--pink-soft)";
            formMessage.textContent = "Opening WhatsApp to send your request...";

            setTimeout(() => {
                window.open(targetUrl, "_blank", "noopener,noreferrer");
                formMessage.textContent = "";
            }, 600);
        });
    }
});

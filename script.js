
// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

// CLOSE MENU AFTER CLICKING LINK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});

// SET MINIMUM BOOKING DATE

const dateInput = document.getElementById("date");

const today = new Date();
const localDate = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
].join("-");

dateInput.min = localDate;

// BOOKING FORM

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const brand = document.getElementById("brand").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const model = document.getElementById("model").value.trim();
    const problem = document.getElementById("problem").value.trim();

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const message = `
*NEW MOBILE REPAIR APPOINTMENT*

Name: ${name}
Phone: ${phone}
Brand: ${brand}
Device Model: ${model || "Not specified"}
Service: ${service}
Date: ${date}
Problem: ${problem || "Not specified"}

Please confirm my appointment.
`;

    // REPLACE WITH YOUR WHATSAPP BUSINESS NUMBER
    const businessNumber = "919876543210";

    const whatsappURL =
        "https://wa.me/" + businessNumber +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});

// WHATSAPP FLOAT BUTTON

const whatsappBtn = document.getElementById("whatsappBtn");

// REPLACE WITH YOUR BUSINESS NUMBER
whatsappBtn.href = "https://wa.me/919876543210";
whatsappBtn.target = "_blank";
whatsappBtn.rel = "noopener noreferrer";

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".service-card, .process-card, .testimonial-card, .contact-card, .about-content"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });

}

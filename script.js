// script.js (Updated with WhatsApp integration + original features)

document.addEventListener("DOMContentLoaded", () => {
  const inquireButtons = document.querySelectorAll(".inquire-btn");
  const inquiryForm = document.getElementById("inquiry-form");
  const phoneForm = document.getElementById("phone-form");
  let selectedService = "our services";

  // Handle Inquire button click → scroll to form and set selected service
  inquireButtons.forEach(button => {
    button.addEventListener("click", () => {
      selectedService = button.getAttribute("data-service") || "our services";
      inquiryForm.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Handle phone form submission and redirect to WhatsApp
  if (phoneForm) {
    phoneForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const phoneInput = document.getElementById("phone-number").value.trim();

      if (phoneInput) {
        const message = `Hi, I'm interested in ${selectedService}. My number is ${phoneInput}`;
        const whatsappURL = `https://wa.me/254797956649?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
        phoneForm.reset();
      }
    });
  }

  // Handle Contact button click
  const contactBtn = document.querySelector(".contact-btn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      alert("Thanks for reaching out to BuildPro!\nWe'll get back to you as soon as possible.");
    });
  }

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

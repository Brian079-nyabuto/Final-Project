// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Handle Inquire button clicks
  const inquireButtons = document.querySelectorAll(".inquire-btn");
  inquireButtons.forEach(button => {
    button.addEventListener("click", () => {
      const service = button.getAttribute("data-service");
      alert(`Thank you for your interest in ${service}.\nOur team will contact you shortly!`);
    });
  });

  // Handle Contact button click
  const contactBtn = document.querySelector(".contact-btn");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      alert("Thanks for reaching out to BuildPro!\nWe'll get back to you as soon as possible.");
    });
  }

  // Optional: Smooth scrolling for navigation links
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
    document.querySelectorAll('.inquire-btn').forEach(button => {
    button.addEventListener('click', () => {
      const service = button.getAttribute('data-service');
      const phone = prompt(`Enter your phone number to inquire about ${service}:`);

      if (phone) {
        alert(`Thank you! We'll contact you at ${phone} about ${service}.`);
        // You can also send this to a server here using fetch() or 

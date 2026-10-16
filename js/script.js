"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
      });
    });
  }

  // This form is not connected to a delivery service.
  // Clearly tell users that no enquiry has been sent.
  const form = document.querySelector("#enquiry-form");
  const status = document.querySelector("#form-status");

  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent =
        "The form is not connected to a secure message-delivery service yet. No message has been sent. Please use the contact email shown in the footer for now.";
    });
  }
});
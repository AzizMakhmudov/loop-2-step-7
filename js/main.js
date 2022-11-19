var elHamburger = document.querySelector("[data-hamburger]");
var elContact = document.querySelector("[data-contact]");
elHamburger.addEventListener("click", function (evt) {
  elContact.classList.toggle("contact-box__for--js");
});
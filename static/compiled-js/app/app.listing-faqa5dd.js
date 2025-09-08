"use strict";

app.globals.listingFaq = {
  toggleQuestion: function (id) {
    document.getElementById("faq-".concat(id, "-icon")).classList.toggle("rotate-90");
    document.getElementById("faq-".concat(id, "-answer")).classList.toggle("hidden");
  },
  firstScrollHandler: function () {
    document.removeEventListener('scroll', app.globals.listingFaq.firstScrollHandler);
    document.querySelectorAll(".faq-answer").forEach(el => {
      el.classList.add("hidden");
    });
    document.querySelectorAll(".faq-icon").forEach(el => {
      el.classList.add("rotate-90");
    });
  }
};
app.init.listingFaq = function () {
  document.addEventListener('scroll', app.globals.listingFaq.firstScrollHandler);
};
"use strict";

app.globals.disclaimer = {
  events: ["click", "mouseover", "scroll", "keydown"],
  showModal: function () {
    const modal = document.getElementById("disclaimer");
    const body = document.querySelector('body');
    const self = app.globals.disclaimer;
    self.events.forEach(function (event) {
      window.removeEventListener(event, self.showModal, false);
    });
    body.classList.add("overflow-hidden");
    modal.classList.remove("hidden");
    const acceptBtn = document.getElementById('accept-btn');
    acceptBtn.onclick = function () {
      if (navigator.cookieEnabled && window.Cookies) {
        window.Cookies.set('simpleeshow', true, {
          expires: 365
        });
        document.querySelector('body').classList.remove("overflow-hidden");
        modal.classList.add("hidden");
      }
    };
  }
};
app.init.disclaimer = function () {
  if (navigator.cookieEnabled && window.Cookies) {
    if (!window.Cookies.get('simpleeshow')) {
      app.globals.disclaimer.events.forEach(function (event) {
        window.addEventListener(event, app.globals.disclaimer.showModal, false);
      });
    }
  }
};
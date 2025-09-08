"use strict";

app.globals.mobilemenu = {
  toggleMobileMenu: function () {
    const mobileMenu = document.getElementById("MobNav");
    const body = document.querySelector('body');
    mobileMenu.classList.toggle("h-[calc(100dvh-3.5rem)]");
    body.classList.toggle("overflow-hidden");
    body.classList.toggle("md:overflow-auto");
  }
};
app.init.mobilemenu = function () {
  document.getElementById('mobileMenu').addEventListener("click", app.globals.mobilemenu.toggleMobileMenu);
};
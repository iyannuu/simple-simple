"use strict";

app.globals.frequentsearches = {
  toggleMobileFreqSearch: function () {
    const mobileFreqSearch = document.getElementById('mobileFreqSearch');
    mobileFreqSearch.classList.toggle("invisible");
    const body = document.querySelector('body');
    body.classList.toggle("overflow-hidden");
    body.classList.toggle("lg:overflow-auto");
  }
};
app.init.frequentsearches = function () {
  const mobileFreqSearchOpen = document.getElementById('mobileFreqSearchOpen');
  if (mobileFreqSearchOpen) {
    mobileFreqSearchOpen.addEventListener('click', app.globals.frequentsearches.toggleMobileFreqSearch);
  }
  const mobileFreqSearchClose = document.getElementById('mobileFreqSearchClose');
  if (mobileFreqSearchClose) {
    mobileFreqSearchClose.addEventListener('click', app.globals.frequentsearches.toggleMobileFreqSearch);
  }
};
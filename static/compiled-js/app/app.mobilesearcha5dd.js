"use strict";

app.globals.mobilesearch = {
  toggleMobileSearch: function () {
    const mobileSearch = document.getElementById('mobileSearch');
    if (mobileSearch.classList.contains("invisible")) {
      mobileSearch.classList.remove("invisible");
      document.querySelector('body').classList.add("overflow-hidden", "md:overflow-auto");
    } else {
      mobileSearch.classList.add("invisible");
      document.querySelector('body').classList.remove("overflow-hidden", "md:overflow-auto");
    }
  }
};
app.unset.mobilesearch = function () {};
app.init.mobilesearch = function () {
  document.querySelectorAll('.toggle-mobile-search').forEach(e => {
    e.addEventListener("click", app.globals.mobilesearch.toggleMobileSearch);
  });
};
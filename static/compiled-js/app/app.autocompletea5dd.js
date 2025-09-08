"use strict";

app.globals.autocomplete = {
  closeAutocomplete: function () {
    const autocompleteMenu = document.querySelector('.location-menu');
    if (autocompleteMenu) {
      autocompleteMenu.remove();
    }
  },
  onGeoClick: function (e) {
    document.querySelectorAll('input[name="location-id"]').forEach(elem => {
      elem.value = e.getAttribute('data-id');
    });
    document.querySelectorAll('input[name="geo-location-input"]').forEach(elem => {
      elem.value = e.innerText;
    });
    this.closeAutocomplete();
  }
};
app.unset.autocomplete = function () {
  //
};
app.init.afterAjax.autocomplete = function () {
  const obj = app.globals.autocomplete;

  // handles the click on the document, hiding the menu.
  document.addEventListener('click', obj.closeAutocomplete);
};
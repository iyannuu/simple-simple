"use strict";

/**
 *  Initialize back button behavior and click on ad link.
 */

app.globals.adbox = {
  adBoxClick: function (elem) {
    if (isSessionStorageEnabled()) {
      const backData = {
        id: elem.getAttribute('data-id'),
        backUrl: window.location.href
      };
      window.sessionStorage.setItem('backData', JSON.stringify(backData));
    }
    window.location.href = elem.getAttribute('data-location');
  }
};
app.init.AdBox = function () {
  if (isSessionStorageEnabled()) {
    window.sessionStorage.removeItem('backData');
  }
};
"use strict";

app.globals.numberInput = {
  validateNumberInput: el => {
    if (!new RegExp("^[0-9]*$").test(el.value)) {
      el.value = el.value.slice(0, el.value.length - 1);
    }
  }
};
"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var n = 0, F = function () {}; return { s: F, n: function () { return n >= r.length ? { done: !0 } : { done: !1, value: r[n++] }; }, e: function (r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function () { t = t.call(r); }, n: function () { var r = t.next(); return a = r.done, r; }, e: function (r) { u = !0, o = r; }, f: function () { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
app.globals.filters = {
  closeFiltersModal: () => {
    document.querySelector('body').classList.remove("overflow-hidden", "md:overflow-auto");
    document.getElementById('filtersModal').classList.add('hidden');
  },
  openFiltersModal: () => {
    document.querySelector('body').classList.add("overflow-hidden", "md:overflow-auto");
    document.getElementById('filtersModal').classList.remove('hidden');
  },
  toggleElements: (element, toggleId) => {
    document.getElementById(toggleId).classList.toggle('hidden');
    var _iterator = _createForOfIteratorHelper(element.children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        const child = _step.value;
        child.classList.toggle('hidden');
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },
  resetFilters: () => {
    document.querySelectorAll("#filtersModal input[type='checkbox']").forEach(el => {
      el.checked = false;
    });
    document.querySelectorAll("#filtersModal input[type='text']").forEach(el => {
      el.value = '';
    });
  },
  validateAge: () => {
    let errors = false;
    const ageValidationError = document.getElementById('age-validation-error');
    const ageRangeValidationError = document.getElementById('age-range-validation-error');
    ageValidationError.classList.remove('text-red-700');
    ageRangeValidationError.classList.add('hidden');
    const fromAgeEl = document.getElementById('fromAge');
    const toAgeEl = document.getElementById('toAge');
    fromAgeEl.classList.remove('text-red-700', 'ring-red-300');
    toAgeEl.classList.remove('text-red-700', 'ring-red-300');
    const fromAge = parseInt(fromAgeEl.value);
    const toAge = parseInt(toAgeEl.value);
    const minAge = parseInt(fromAgeEl.getAttribute("data-minAge"));
    if (fromAge < minAge) {
      fromAgeEl.classList.add('text-red-700', 'ring-red-300');
      ageValidationError.classList.add('text-red-700');
      errors = true;
    }
    if (toAge < minAge) {
      toAgeEl.classList.add('text-red-700', 'ring-red-300');
      ageValidationError.classList.add('text-red-700');
      errors = true;
    }
    if (fromAge > toAge) {
      ageRangeValidationError.classList.remove('hidden');
      fromAgeEl.classList.add('text-red-700', 'ring-red-300');
      toAgeEl.classList.add('text-red-700', 'ring-red-300');
      errors = true;
    }
    return errors;
  },
  disableNullFields: () => {
    document.querySelectorAll("#filtersModal input").forEach(el => {
      if (el.value === '') {
        el.disabled = true;
      }
    });
  }
};
app.init.filters = function () {
  if (document.querySelectorAll("#filtersModal .no-priority input[name='nationality'][checked]").length > 0 && document.getElementById('showNationality').length > 0) {
    document.getElementById('showNationality').click();
  }
  const filterForm = document.getElementById('filterForm');
  if (filterForm) {
    filterForm.addEventListener('submit', e => {
      if (app.globals.filters.validateAge()) {
        e.preventDefault();
      }
      // To remove empty params in the query string
      app.globals.filters.disableNullFields();
    });
  }
};
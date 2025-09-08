"use strict";

app.globals.header = {
  resetMobileSearchFilter: function () {
    document.querySelectorAll('#desktopSearch input[type="text"], input[name="location-id"]').forEach(e => e.value = "");
    document.querySelectorAll('#desktopSearch input[type="checkbox"]').forEach(e => e.checked = false);
    document.querySelectorAll('#mobileSearch input[type="text"]').forEach(e => e.value = "");
    document.querySelectorAll('#mobileSearch input[type="checkbox"]').forEach(e => e.checked = false);
  },
  backToListing: function () {
    const headerContainer = document.getElementById("headerContainer");
    const listingUrl = headerContainer.getAttribute("data-listing-url");
    const adID = headerContainer.getAttribute("data-ad-id");
    const backData = isSessionStorageEnabled() ? window.sessionStorage.getItem("backData") : null;
    let prevUrl;
    if (!backData) {
      prevUrl = listingUrl;
    } else {
      const backDataObj = JSON.parse(backData);
      if (backDataObj.id === adID) {
        prevUrl = backDataObj.backUrl;
      } else {
        prevUrl = listingUrl;
      }
    }
    if (prevUrl === document.referrer) {
      window.history.back();
    } else {
      window.location.href = prevUrl;
    }
  },
  closeDesktopSearch: function () {
    const desktopSearch = document.getElementById("desktopSearch");
    if (desktopSearch.classList.contains("invisible")) {
      return;
    }
    document.getElementById('openDesktopSearch').classList.remove('scale-x-250', 'scale-y-150', 'translate-y-20', 'opacity-0', 'invisible');
    document.getElementById('headerOverlay').classList.add('hidden');
    const headerContainer = document.getElementById('headerContainer');
    if (["Dark", "Medium"].includes(headerContainer.getAttribute('data-type'))) {
      headerContainer.classList.remove('bg-white');
    }
    headerContainer.classList.remove('pb-20');
    desktopSearch.classList.add('invisible');
    desktopSearch.classList.remove('opacity-100');
    if (app.globals.autocomplete) {
      app.globals.autocomplete.closeAutocomplete();
    }
    const openFiltersButton = document.getElementById('openFilters');
    if (openFiltersButton) {
      openFiltersButton.classList.remove('opacity-0', 'invisible');
    }
  },
  openDesktopSearch: function () {
    document.getElementById('openDesktopSearch').classList.add('scale-x-250', 'scale-y-150', 'translate-y-20', 'opacity-0', 'invisible');
    document.getElementById('headerOverlay').classList.remove('hidden');
    const headerContainer = document.getElementById('headerContainer');
    if (["Dark", "Medium"].includes(headerContainer.getAttribute('data-type'))) {
      headerContainer.classList.add('bg-white');
    }
    headerContainer.classList.add('pb-20');
    document.getElementById('desktopSearch').classList.remove('invisible');
    document.getElementById('desktopSearch').classList.add('opacity-100');
    const openFiltersButton = document.getElementById('openFilters');
    if (openFiltersButton) {
      openFiltersButton.classList.add('opacity-0', 'invisible');
    }
  },
  focusSearch: function (inputID) {
    const locationPrompt = document.getElementById("locationPrompt");
    if (locationPrompt) {
      locationPrompt.classList.add("hidden");
    }
    const locationInput = document.getElementById(inputID);
    locationInput.classList.remove("hidden");
    locationInput.focus();
    // Workaround to have the cursor on last char
    const val = locationInput.value;
    locationInput.value = '';
    locationInput.value = val;
  },
  clearLocation: function (inputID) {
    app.globals.header.focusSearch(inputID);
    document.querySelectorAll('input[name="geo-location-input"]').forEach(e => e.value = "");
    document.querySelectorAll('input[name="location-id"]').forEach(e => e.value = "");
    const mobileLocationClear = document.getElementById("mobileLocationClear");
    if (mobileLocationClear) {
      mobileLocationClear.classList.add("hidden");
    }
  },
  toggleMobileLocationInput: function () {
    if (document.getElementById("mobileLocationInput").value === "") {
      document.getElementById("mobileLocationClear").classList.add("hidden");
    } else {
      document.getElementById("mobileLocationClear").classList.remove("hidden");
    }
  },
  /**
   * Back to choose payment method for mobile version, used in navbar custom mobile
   */
  backToCheckoutChooseMobile: function () {
    let paymentFormIsOpen = false;
    document.querySelectorAll(".payment-form").forEach(e => {
      if (!e.classList.contains("hidden")) {
        paymentFormIsOpen = true;
        return;
      }
    });
    if (paymentFormIsOpen) {
      // Function is in the checkout page.
      backToCheckoutChoose();
    } else {
      window.history.back();
    }
  }
};
app.unset.header = function () {};
app.init.header = function () {
  const obj = app.globals.header;
  const headerContainer = document.getElementById("headerContainer");
  const templateName = headerContainer.getAttribute("data-template");
  const selectedLocation = headerContainer.getAttribute("data-selected-location");
  document.getElementById('mobileSearchResetFilter').addEventListener("click", obj.resetMobileSearchFilter);
  document.getElementById('mobileLocationInput').addEventListener("click", obj.toggleMobileLocationInput);
  document.getElementById('clearMobileSearchLocation').addEventListener("click", function () {
    obj.clearLocation("mobileLocationInput");
  });
  document.querySelectorAll(".back-to-checkout-choose").forEach(e => {
    e.addEventListener("click", obj.backToCheckoutChooseMobile);
  });
  if (templateName === "ad/ad_detail") {
    document.getElementById('headerOverlay').addEventListener("click", obj.closeDesktopSearch);
    document.querySelectorAll(".back-to-listing").forEach(e => {
      e.addEventListener("click", obj.backToListing);
    });
  }
  if (templateName === "listing") {
    document.getElementById('openDesktopSearch').addEventListener("click", obj.openDesktopSearch);
    document.getElementById('headerOverlay').addEventListener("click", obj.closeDesktopSearch);
    if (selectedLocation) {
      document.getElementById('clearDesktopSearchLocation').addEventListener("click", function () {
        obj.clearLocation("desktopLocationInput");
      });
      document.getElementById('locationPrompt').addEventListener("click", function () {
        obj.focusSearch("desktopLocationInput");
      });
    }
  }
  window.addEventListener("scroll", function () {
    const headerContainer = document.getElementById("headerContainer");
    const stickyBack = document.getElementById("stickyBackBtn");
    const header = document.getElementById("header");
    if (window.scrollY > header.offsetHeight - parseInt(getComputedStyle(header).paddingBottom)) {
      headerContainer.classList.add('shadow-sm');
      if (templateName === "ad/ad_detail") {
        stickyBack.classList.remove("hidden");
      }
      if (templateName === "home") {
        headerContainer.classList.remove('bg-transparent');
        headerContainer.classList.add('bg-black');
      }
      if (templateName === "listing") {
        header.classList.add("hidden", "md:block");
      }
    } else {
      headerContainer.classList.remove('shadow-sm');
      if (templateName === "ad/ad_detail") {
        stickyBack.classList.add("hidden");
      }
      if (templateName === "home") {
        headerContainer.classList.remove('bg-black');
        headerContainer.classList.add('bg-transparent');
      }
      if (templateName === "listing") {
        header.classList.remove("hidden", "md:block");
      }
    }
    if (templateName === "listing" || templateName === "ad/ad_detail") {
      app.globals.header.closeDesktopSearch();
    }
  });
};
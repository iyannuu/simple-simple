"use strict";

app.globals.citiesbox = {
  toggleMobileCitiesBox: function () {
    const mobileCitiesBox = document.getElementById('mobileCitiesBox');
    mobileCitiesBox.classList.toggle("invisible");
    const body = document.querySelector('body');
    body.classList.toggle("overflow-hidden");
    body.classList.toggle("lg:overflow-auto");
  },
  seeMoreCities: function () {
    document.querySelectorAll('.hidden-cities').forEach(el => el.classList.toggle("hidden"));
    document.getElementById('seeMoreLabel').classList.toggle("hidden");
    document.getElementById('seeLessLabel').classList.toggle("hidden");
  }
};
app.init.citiesbox = function () {
  const seeMoreButton = document.getElementById('seeMoreButton');
  if (seeMoreButton) {
    seeMoreButton.addEventListener('click', app.globals.citiesbox.seeMoreCities);
  }
  const mobileCitiesBoxOpen = document.getElementById('mobileCitiesBoxOpen');
  if (mobileCitiesBoxOpen) {
    mobileCitiesBoxOpen.addEventListener('click', app.globals.citiesbox.toggleMobileCitiesBox);
  }
  const mobileCitiesBoxClose = document.getElementById('mobileCitiesBoxClose');
  if (mobileCitiesBoxClose) {
    mobileCitiesBoxClose.addEventListener('click', app.globals.citiesbox.toggleMobileCitiesBox);
  }
};
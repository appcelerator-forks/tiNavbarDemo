exports.cleanAndDestroy = cleanAndDestroy;

function cleanAndDestroy() {
  $.showSettings.close();
  $.destroy();
};

// inti the navbar
$.navbar.init({
  titleText : "Show Settings Window",
  titleColor : "black",
  backgroundColor : "green",
  theme: 'black'
});

$.navbar.showSettings(cleanAndDestroy);
exports.cleanAndDestroy = cleanAndDestroy;

function cleanAndDestroy() {
  $.showMenu.close();
  $.destroy();
};

// inti the navbar
$.navbar.init({
  titleText : "Show Menu Window",
  titleColor : "black",
  backgroundColor : "yellow",
  theme: 'black'
});

$.navbar.showMenu(cleanAndDestroy);
exports.cleanAndDestroy = cleanAndDestroy;

function cleanAndDestroy() {
  $.showBack.close();
  $.destroy();
};

// inti the navbar
$.navbar.init({
  titleText : "Show Back Window",
  titleColor : "black",
  backgroundColor : "red",
  theme: 'black'
});

$.navbar.showBack(cleanAndDestroy);
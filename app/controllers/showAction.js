exports.cleanAndDestroy = cleanAndDestroy;

function cleanAndDestroy() {
  $.showAction.close();
  $.destroy();
};

// inti the navbar
$.navbar.init({
  titleText : "Show Action Window",
  titleColor : "black",
  backgroundColor : "purple",
  theme: 'black'
});

$.navbar.showAction(cleanAndDestroy);
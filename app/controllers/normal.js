exports.cleanAndDestroy = cleanAndDestroy;

function cleanAndDestroy() {
  $.normal.close();
  $.destroy();
};

// inti the navbar
$.navbar.init({
  titleText : "Normal Window",
  titleColor : "black",
  backgroundColor : "red"
});

$.navbar.showBack(cleanAndDestroy);
$.navbar.showNext(cleanAndDestroy);
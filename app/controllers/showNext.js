exports.cleanAndDestroy = cleanAndDestroy;

function cleanAndDestroy() {
  $.showNext.close();
  $.destroy();
};

// inti the navbar
$.navbar.init({
  titleText : "Show Next Window",
  titleColor : "black",
  backgroundColor : "orange",
  theme: 'black'
});

$.navbar.showNext(cleanAndDestroy);
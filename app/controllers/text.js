exports.cleanAndDestroy = cleanAndDestroy;

function cleanAndDestroy() {
  $.text.close();
  $.destroy();
};

// inti the navbar
$.navbar.init({
  titleText : "Text Action",
  titleColor : "black",
  backgroundColor : "green"
});

$.navbar.showLeft({
  text: "取消",
  callback: cleanAndDestroy
});
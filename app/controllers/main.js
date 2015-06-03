// inti the navbar
$.navbar.init({
  titleText : "Main Window",
  titleColor : "black",
  backgroundColor : "#35ABFF"
});

function doClick1(e) {
    var normal = Alloy.createController('normal').getView();
    Alloy.Globals.open(normal);
    normal = null;
}
function doClick2(e) {
    var text = Alloy.createController('text').getView();
    Alloy.Globals.open(text);
    text = null;
}
function doClick3(e) {
    $.navbar.setTitle("changed");
}

$.main.open();

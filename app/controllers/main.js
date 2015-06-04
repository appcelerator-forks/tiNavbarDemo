// inti the navbar
$.navbar.init({
  titleText : "Main Window",
  titleColor : "black",
  backgroundColor : "#35ABFF"
});

function showBack() {
    var target = Alloy.createController('showBack').getView();
    Alloy.Globals.open(target);
    target = null;
}
function showNext() {
    var target = Alloy.createController('showNext').getView();
    Alloy.Globals.open(target);
    target = null;
}
function showMenu() {
    var target = Alloy.createController('showMenu').getView();
    Alloy.Globals.open(target);
    target = null;
}
function showSettings() {
  var target = Alloy.createController('showSettings').getView();
    Alloy.Globals.open(target);
    target = null;
}
function showAction() {
  var target = Alloy.createController('showAction').getView();
    Alloy.Globals.open(target);
    target = null;
}

$.main.open();

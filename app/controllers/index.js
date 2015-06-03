Alloy.Globals.open = function(_win) {
  if (_win && _win.apiName == "Ti.UI.Window") {
    Ti.API.trace("-- index: opening the new window");
    if (OS_IOS) {
      $.iosNav.openWindow(_win);
    } else if (OS_ANDROID) {
      _win.open();
    } else if (OS_MOBILEWEB) {
      _win.open();
    } else {
      Ti.API.error("!!!Error when opening REQUIRED window, no supported platfrom found!!!");
    }
  } else {
    Ti.API.warn("Unexpected object type detected, need Ti.UI.Window, but " + _win ? _win.apiName : "null");
  }
};


if (OS_IOS) {
  $.iosNav.open();
} else if (OS_ANDROID) {
  $.main.getView().open();
} else if (OS_MOBILEWEB) {
  $.main.getView().open();
} else {
  Ti.API.error("!!!Error when opening the MAIN window, no supported platfrom found!!!");
}
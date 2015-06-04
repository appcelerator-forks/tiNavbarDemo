/**
 * me.wslong.tiNavbar
 */
var titleView,
		titleImage ,
		titleText,
		titleColor,
		fontFamily,
		backgroundColor,
		borderColor,
		theme,
		deviceVersion = parseInt(Titanium.Platform.version.split(".")[0], 10),
		showLeftCallback,
		showRightCallback;

/**
 * Init the widget

 * args.titleImage
 * args.titleText
 * args.titleColor
 * args.fontFamily
 * args.backgroundColor
 * args.theme
 */
$.init = function(args) {
	titleImage = args.titleImage || null;
	titleText = args.titleText || '';
	titleColor = args.titleColor || null;
	fontFamily = args.fontFamily || null;
	backgroundColor = args.backgroundColor || 'white';
	borderColor = args.borderColor || backgroundColor;
	theme = args.theme || '';

	$.wrapper.backgroundColor = backgroundColor;
	$.border.backgroundColor = borderColor;
	if (!theme) {
		// Checks the brightness of the background color, sets color of icons/text
		if(hexToHsb(backgroundColor).b < 65) {
			theme = "white";
		} else {
			theme = "black";
		}
	}

	if(titleImage) {
		titleView = Ti.UI.createImageView({
			image: titleImage,
			height: "26dp",
			width: Ti.UI.SIZE,
			top: "10dp",
			bottom: "10dp",
			preventDefaultImage: true
		});
	} else {
		titleView = Ti.UI.createLabel({
			top: "0dp",
			left: "58dp",
			right: "58dp",
			height: "46dp",
			font: {
				fontSize: "18dp",
				fontFamily: (fontFamily ? fontFamily : "HelveticaNeue-Medium")
			},
			color: (titleColor ? titleColor : (theme == "white" ? "#FFF" : "#000")),
			textAlign: "center",
			text: titleText
		});
	}

	if(titleView) {
		$.titleView.add(titleView);
	}
}

$.setTitle = function(text) {
	var c = $.titleView.getChildren();
	if (c && c[0]) {
		c[0].text = text;
	};
}

/**
 * Shows the left button
 * @param {Object} _params
 * @param {Function} _params.callback The function to run on left button press
 * @param {String} _params.image The image to show for the left button
 */
$.showLeft = function(_params) {
	if(_params && typeof _params.callback !== "undefined") {
		if (showLeftCallback) {
			$.left.removeEventListener('touchend', showLeftCallback);
		};
		$.left.removeAllChildren();

		showLeftCallback = _params.callback;
		var text = _params.text;
		var image = _params.image;
		if (text) {
			$.left.add(createNavbarText(text));
		} else if (image) {
			$.left.add(createNavbarImage(image));
		} else {
			var defaultImage = (theme == "white" ? WPATH("/images/white/back.png") : WPATH("/images/black/back.png"));
			$.left.add(createNavbarImage(defaultImage));
		}
		$.left.visible = true;
		$.left.addEventListener("touchend", showLeftCallback);
	}
};

/**
 * Shows the right button
 * @param {Object} _params
 * @param {Function} _params.callback The function to run on right button press
 * @param {String} _params.image The image to show for the right button
 */
$.showRight = function(_params) {
	if(_params && typeof _params.callback !== "undefined") {
		if (showRightCallback) {
			$.left.removeEventListener('touchend', showRightCallback);
		};
		$.left.removeAllChildren();

		showRightCallback = _params.callback;
		var text = _params.text;
		var image = _params.image;
		if (text) {
			$.right.add(createNavbarText(text));
		} else if (image) {
			$.right.add(createNavbarImage(image));
		} else {
			var defaultImage = (theme == "white" ? WPATH("/images/white/next.png") : WPATH("/images/black/next.png"));
			$.right.add(createNavbarImage(defaultImage));
		}
		$.right.visible = true;
		$.right.addEventListener("touchend", showRightCallback);
	}
};

/**
 * Shows the back button
 * @param {Function} _callback The function to run on back button press
 */
$.showBack = function(_callback) {
	if(_callback && typeof _callback !== "undefined") {
		var image = (theme == "white" ? WPATH("/images/white/back.png") : WPATH("/images/black/back.png"));
		$.showLeft({
			image: image,
			callback: _callback
		});
	}
};

/**
 * Shows the next button
 * @param {Function} _callback The function to run on next button press
 */
$.showNext = function(_callback) {
	if(_callback && typeof _callback !== "undefined") {
		var image = (theme == "white" ? WPATH("/images/white/next.png") : WPATH("/images/black/next.png"));
		$.showRight({
			image: image,
			callback: _callback
		});
	}
};

/**
 * Shows the menu button
 * @param {Function} _callback The function to run on action button press
 */
$.showMenu = function(_callback) {
	if(_callback && typeof _callback !== "undefined") {
		var image = (theme == "white" ? WPATH("/images/white/menu.png") : WPATH("/images/black/menu.png"));
		$.showLeft({
			image: image,
			callback: _callback
		});
	}
};

/**
 * Shows the settings button
 * @param {Function} _callback The function to run on action button press
 */
$.showSettings = function(_callback) {
	if(_callback && typeof _callback !== "undefined") {
		var image = (theme == "white" ? WPATH("/images/white/settings.png") : WPATH("/images/black/settings.png"));
		$.showRight({
			image: image,
			callback: _callback
		});
	}
};

/**
 * Shows the action button
 * @param {Function} _callback The function to run on action button press
 */
$.showAction = function(_callback) {
	if(_callback && typeof _callback !== "undefined") {
		var image = (theme == "white" ? WPATH("/images/white/action.png") : WPATH("/images/black/action.png"));
		$.showRight({
			image: image,
			callback: _callback
		});
	}
};

function createNavbarImage(img) {
	return Ti.UI.createImageView({
		image: img,
		height: "28dp",
		width: Ti.UI.SIZE,
		top: "9dp",
		left: "9dp",
		preventDefaultImage: true
	});
}

function createNavbarText(txt) {
	var lbl = Ti.UI.createLabel({
		top: "9dp",
		height: "28dp",
		width: Ti.UI.SIZE,
		font: {
			fontSize: "17dp",
			fontFamily: (fontFamily ? fontFamily : "HelveticaNeue-Medium")
		},
		// color: (titleColor ? titleColor : (theme == "white" ? "#FFF" : "#000")),
		color: "#427EF2",
		textAlign: "center",
		text: txt
	});
	lbl.addEventListener('touchstart', function() {
		lbl.opacity = 0.4;
	});
	lbl.addEventListener('touchend', function() {
		lbl.opacity = 1.0;
	});
	return lbl;
}

/**
 * Converts a hex color value to HSB
 * @param {String} _hex The hex color to convert
 */
function hexToHsb(_hex) {
	var result;

	if(_hex.length < 6) {
		result = /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(_hex);
	} else {
		result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_hex);
	}

	var hsb = {
		h: 0,
		s: 0,
		b: 0
	};

	if(!result) {
		return hsb;
	}

	if(result[1].length == 1) {
		result[1] = result[1] + result[1];
		result[2] = result[2] + result[2];
		result[3] = result[3] + result[3];
	}

	var rgb = {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	};

	rgb.r /= 255;
	rgb.g /= 255;
	rgb.b /= 255;

	var minVal = Math.min(rgb.r, rgb.g, rgb.b),
		maxVal = Math.max(rgb.r, rgb.g, rgb.b),
		delta = maxVal - minVal,
		del_r, del_g, del_b;

	hsb.b = maxVal;

	if(delta !== 0) {
		hsb.s = delta / maxVal;

		del_r = (((maxVal - rgb.r) / 6) + (delta / 2)) / delta;
		del_g = (((maxVal - rgb.g) / 6) + (delta / 2)) / delta;
		del_b = (((maxVal - rgb.b) / 6) + (delta / 2)) / delta;

		if(rgb.r === maxVal) {
			hsb.h = del_b - del_g;
		} else if(rgb.g === maxVal) {
			hsb.h = (1 / 3) + del_r - del_b;
		} else if(rgb.b === maxVal) {
			hsb.h = (2 / 3) + del_g - del_r;
		}

		if(hsb.h < 0) {
			hsb.h += 1;
		}

		if(hsb.h > 1) {
			hsb.h -= 1;
		}
	}

	hsb.h = Math.round(hsb.h * 360);
	hsb.s = Math.round(hsb.s * 100);
	hsb.b = Math.round(hsb.b * 100);

	return hsb;
}

// Move the UI down if iOS7+
if(OS_IOS && deviceVersion >= 7) {
	$.wrapper.height = "67dp";
	$.overlay.top = "20dp";
}
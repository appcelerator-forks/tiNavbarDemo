tiNavbar
--------

A custom NavigationBar widget for Titanium Alloy, which provides the common navigation bar layout for cross-platform environments.

This widget is based on [com.mcongrove.navigationBar](https://github.com/mcongrove/com.mcongrove.navigationBar).

## Glance at first

#### Alloy View (XML)

```
<Require type="widget" src="me.wslong.tiNavbar" id="navbar"/>
```
	
#### Alloy Controller (JS)

```
$.navbar.setBackgroundColor("#35ABFF");

$.navbar.showBack(
	function(_event) {
		closeWindow();
	}
);

$.navbar.showNext({
	function(_event) {
		doSomething();
	}
});
```

## Notice

**Recommanded TSS, XML contents**

```
app.tss
		"Window":{
		  navBarHidden: true,  // to disable the system default nav bar of IOS, for Android, need to use the customized theme
		  height: "100%",
		  width: "100%"
		}
		".innerContainerTop":{
		  top: 47
		}
		".innerContainerTop[platform=ios]":{
		  top: 67
		}

win.xml
		<Alloy>
		  <Window class="container">
		    <Require type="widget" src="me.wslong.tiNavbar" id="navbar"/>
		    <View class="innerContainerTop">
		    	Your contents.
		    </View>
		  </Window>
		</Alloy>
```

For Android, need to specify the **NO ActionBar theme** to be able to use this navigation bar only.


#### API

* init
	- titleImage : set the title image if set, otherwise title text
	- titleText : set the title text, empty by default
	- titleColor : set the title color (Optional)
	- fontFamily : set the title font family (Optional)
	- backgroundColor : set the title background (Optional)
	- borderColor : set the title border color, the same with title background by default
	- theme : set the theme, "black" or "white", to be used when choosing widegt-provided icons
* setTitle
	- text : the tile to be updated, will have no effect for the title with image setting
* showLeft
	- text : set the text if has, this is the first judgement
	- image : set the image if has, this is the seconde judgement, otherwise using the default "back" icon
	- callback
* showRight
	- text : set the text if has, this is the first judgement
	- image : set the image if has, this is the seconde judgement, otherwise using the default "next" icon
	- callback
* showBack : use the default "back" icon
	- callback
* showNext : use the default "next" icon
	- callback
* showMenu : use the default "menu" icon
	- callback
* showSetting : use the default "setting" icon
	- callback
* showAction : use the default "action" icon
	- callback


## Plan

1. Update README and support Android and Mobile Web demos and add screenshots/gifs to the demo
2. Replace with vector icons to support different color


## Changelog

* 1.1 - Bug fix and improve the demo project
* 1.0 - init version


## License

```
Copyright 2015 Shallong

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

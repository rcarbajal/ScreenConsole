var ScreenConsole = {
	start : function() {
		//define default options
		var options = {
			id: "_debug_window",
			cssClass: ""
		};

		//retrieve user specified options
		if(arguments.length > 0 && typeof(arguments[0]) == "object") {
			for(var i in arguments[0])
				options[i] = arguments[0][i];
		} //end if

		//create debug window
		var debugWindow = document.createElement("DIV");
		debugWindow.id = options.id;
		debugWindow.className = options.cssClass;

		//set styles if class name is empty
		if(options.cssClass == "") {
			var dwStyle = debugWindow.style;
			dwStyle.position = "absolute";
			dwStyle.top = "0px";
			dwStyle.left = "0px";
			dwStyle.width = "300px";
			dwStyle.height = "300px";
			dwStyle.display = "none";
			dwStyle.zIndex = 99999;
			dwStyle.border = "1px dashed #cc0000";
			dwStyle.backgroundColor = "#fff";
			dwStyle.overflow = "auto";
		} //end if

		//append new element to body
		ScreenConsole._element = debugWindow;
		document.body.appendChild(debugWindow);
	}, //end method start

	write : function(msg) {
		ScreenConsole._element.style.display = "block";
		ScreenConsole._element.innerHTML = msg;
	}, //end method write

	writeAppend : function(msg) {
		ScreenConsole._element.style.display = "block";
		ScreenConsole._element.innerHTML += msg + "<br />";
	} //end method writeAppend
}; //end object ScreenConsole
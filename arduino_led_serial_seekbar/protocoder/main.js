/*
*	
*	led_seekbar
*	by @josejuansanchez
*
*/

ui.screenOrientation("landscape");
ui.allowScroll(false);
device.screenAlwaysOn(true);

var parsedValue;

// Button to connect with Arduino
ui.addButton("Start", 0, 0, ui.screenWidth, 300).onClick(function() { 
	
    // Connect
    serial = boards.connectSerial(9600, function(connected) {
    	console.log("Connected: " + connected);
    	ui.toast("Connected: " + connected);
	});

});

// Send value to Arduino
ui.addButton("Send", 0, 340, ui.screenWidth, 300).onClick(function() { 

    // Send value to Arduino
    serial.write(parsedValue);
	

});

var dataLabel = ui.addText("Current value: ", 10, 640, ui.screenWidth, 200);
dataLabel.textSize(50);
dataLabel.color("#000000")


//Add a seekbar
var slider = ui.addSlider(0, 900, ui.screenWidth, 100, 0, 10).onChange(function(val) { 
    console.log(val);
    
    // Parse to int
    parsedValue = parseInt(val) * 100;
    console.log(parsedValue);
    
    // Update label
    dataLabel.setText("Current value: "+ parsedValue);
});


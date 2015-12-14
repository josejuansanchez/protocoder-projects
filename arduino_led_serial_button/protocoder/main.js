/*
*	
*	led_serial_button
*	by @josejuansanchez
*
*/

var serial;

// Button to connect with Arduino
ui.addButton("Connect", 0, 0, ui.screenWidth, 300).onClick(function() { 
	
    // Connect
    serial = boards.connectSerial(9600, function(connected) {
    	console.log("Connected: " + connected);
	});

});


// Led on
ui.addButton("Led on", 0, 300, ui.screenWidth, 400).onClick(function(){
    serial.write("on");
});

// Led off
ui.addButton("Led off", 0, 700, ui.screenWidth, 400).onClick(function(){
    serial.write("off");
});

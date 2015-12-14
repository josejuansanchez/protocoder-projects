/*
*	
*	read_from_serial
*	by @josejuansanchez
*
*/

ui.backgroundColor(255, 255, 255);

var dataLabel = ui.addText("Data: ", 10, 440, ui.screenWidth, ui.screenHeight);

dataLabel.textSize(50);
dataLabel.color("#000000")

var serial; 

// Button to connect with Arduino
ui.addButton("Connect", 0, 0, ui.screenWidth, 400).onClick(function() { 
	
    serial = boards.connectSerial(9600, function(connected) {
    	console.log("Connected: " + connected);
	});

    // Show arduino data incoming
	serial.onNewData(function(data) {
		dataLabel.setText("Data: "+ data);
		console.log(data);
	});

});

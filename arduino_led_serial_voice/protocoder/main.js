/*
*	
*	led_serial_voice
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

// Voice recognition
ui.addButton("Voice recognition", 0, 300, ui.screenWidth, 400).onClick(function(){

    media.voiceRecognition(function(text) { 
        console.log(text);
        
        switch (text) {
            case "encender":
                serial.write("on");            
                break;
                
            case "apagar":
                serial.write("off");
                break;
        }
        
    });

});


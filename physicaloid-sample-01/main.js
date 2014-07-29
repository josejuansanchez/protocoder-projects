/*
*	
*	Physicaloid.
*   Sample: 01
*
*/

var arduino = boards.startArduino();

arduino.upload(Packages.com.physicaloid.lib.Boards.ARDUINO_UNO, "serialwrite.uno.hex");

arduino.onRead(function(data){
    console.log(data);
    media.textToSpeech(data);
});

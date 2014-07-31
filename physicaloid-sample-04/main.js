/*
*	
*   Physicaloid. Sample 04
*
*/

var arduino = boards.startArduino();

// Example using getSupportedDevices method
arduino.upload(arduino.getSupportedDevices()[0], "blink.uno.hex");

// Example using the name of the board
//arduino.upload(Packages.com.physicaloid.lib.Boards.ARDUINO_UNO, "blink.uno.hex");
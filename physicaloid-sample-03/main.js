/*
*	
*   Physicaloid. Sample 03
*
*/

var arduino = boards.startArduino();

// Lists all the supported devices where you can use the "upload" function
var list = arduino.getSupportedDevices();
list.forEach(function(device) {
    console.log(device);
});
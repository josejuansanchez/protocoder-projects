/*
*	
*   Physicaloid. Sample 03
*
*/

var arduino = boards.startArduino();

// Lists all the supported devices that you can use with the "upload" function
var list = arduino.getSupportedDevices();
list.forEach(function(device) {
    console.log(device);
});

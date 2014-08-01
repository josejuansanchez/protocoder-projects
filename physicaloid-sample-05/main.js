/*
*	
*   Physicaloid. Sample 05
*
*/

var arduino = boards.startArduino();

arduino.upload(arduino.getSupportedDevices()[0], "blink.uno.hex", function(err){
    if (err) {
        console.log("Error uploading the sketch :(");
    } else {
        console.log("Ok! :)");
    }
});
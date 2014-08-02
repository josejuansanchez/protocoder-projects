/*
*	
*   Physicaloid. Sample 06
*	RGB Led
*
*/

// Create an "arduino" object
var arduino = boards.startArduino();

// Upload the sketch to the Arduino board
//arduino.upload(arduino.getSupportedDevices()[0], "rgb_led.hex");

// Intial values for: red, green and blue
var r = 0;
var g = 0;
var b = 0;

// Set the UI
ui.setLandscape();
ui.setFullscreen();
ui.backgroundColor(r, g, b);

var r_slider = ui.addSlider(10, ui.sh/2 - 200, ui.sw, 200, 255, 0, function(progress) { 
    r = progress;
    console.log("r: " + r);
    ui.backgroundColor(r, g, b);
    arduino.write('r');
    arduino.write(r);
});

var g_slider = ui.addSlider(10, ui.sh/2, ui.sw, 200, 255, 0, function(progress) { 
    g = progress;
    console.log("g: " + g);
    ui.backgroundColor(r, g, b);   
    arduino.write('g');
    arduino.write(g);
});

var b_slider = ui.addSlider(10, ui.sh/2 + 200, ui.sw, 200, 255, 0, function(progress) { 
    b = progress;
    console.log("b: " + b);
    ui.backgroundColor(r, g, b);    
    arduino.write('b');
    arduino.write(b);
});
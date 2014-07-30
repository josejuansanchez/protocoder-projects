/*
*	
*   Physicaloid. Sample 02
*
*/

var arduino = boards.startArduino();

arduino.upload(Packages.com.physicaloid.lib.Boards.ARDUINO_UNO, "serialtest.uno.hex");

ui.setLandscape();

ui.addText("1. Write a text and press \"write\" to send to the arduino board", 10, 10, ui.sw/2, 60);
ui.addText("2. Press \"read\" to get the data from the arduino board", ui.sw/2, 10, ui.sw/2, 60);

var text_write = ui.addInput("here...", 10, 10, ui.sw/2, ui.sh/2, function() {});
var text_read = ui.addInput("", ui.sw/2 + 20, 10, ui.sw/2, ui.sh/2, function() {});

var button_write = ui.addButton("Write", 10, ui.sh/2, ui.sw/2 - 10, ui.sh/3, function() { 
    console.log(text_write.getText());
    arduino.write(text_write.getText());    
});

var button_read = ui.addButton("Read", ui.sw/2, ui.sh/2, ui.sw/2 - 10, ui.sh/3, function() { 
    var data = arduino.read();
    console.log(data);
    text_read.setText(data);
});
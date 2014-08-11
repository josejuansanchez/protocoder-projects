/*
*   
*   Voice controlled MiniSkybot 2 (Protocoder + Arduino + Bluetooth )
*
*/

// Sets the UI
ui.setFullscreen();
ui.setLandscape();
ui.backgroundColor(255, 255, 255);

// Start and Connect Bluetooth
network.startBluetooth();

network.connectBluetoothByMac("20:13:11:14:07:94", function(data) {
    console.log(data);
});

//Add a generic button
var btn = ui.addImageButton(700, 250, 500, 500, "voice-icon.png", function(){

    media.startVoiceRecognition(function(text) { 
        console.log(text);
        
        switch(text) {
            case "go":
                network.sendBluetoothSerial("F");
                break;
            
            case "back":
                network.sendBluetoothSerial("B");
                break;

            case "left":
                network.sendBluetoothSerial("L");
                break;

            case "right":
                network.sendBluetoothSerial("R");
                break;
        }
    });

});
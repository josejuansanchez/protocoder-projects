/*
*	
*	Piano: Makey Makey + Protocoder
*   With these notes you can play the song: "Heart and Soul" :)
*
*	by @josejuansanchez
*
*/

// MIDI note numbers
const G5 = 67;
const A5 = 69;
const B5 = 71;
const C6 = 72;
const D6 = 74;
const E6 = 76;
const F6 = 77;
const G6 = 79;
const A6 = 81;
const B6 = 83;
const C7 = 84;

// Set the UI
ui.setFullscreen();
ui.setLandscape();
ui.backgroundColor(255, 255, 255);
var piano = ui.addImage(0, 0, 1900, 1000, "piano.jpg");

// Set the Pure Data patch
var pd = media.initPDPatch("sinwave.pd", function(data) { 
    console.log(data);
});

media.setVolume(100);

// Check the key that has been pressed
ui.onKeyDown(function(key) {
    
    switch (key) {
        /* W */
        case 51:
            pd.sendFloat("midinote", G5);
            piano.setImage("piano_1.jpg");
            break;

        /* A */
        case 29:
            pd.sendFloat("midinote", A5);
            piano.setImage("piano_2.jpg");
            break;

        /* S */
        case 47:
            pd.sendFloat("midinote", B5);
            piano.setImage("piano_3.jpg");
            break;

        /* D */
        case 32:
            pd.sendFloat("midinote", C6);
            piano.setImage("piano_4.jpg");
            break;

        /* F */
        case 34:
            pd.sendFloat("midinote", D6);
            piano.setImage("piano_5.jpg");
            break;

        /* G */
        case 35:
            pd.sendFloat("midinote", E6);
            piano.setImage("piano_6.jpg");
            break;

        /* left */
        case 21: 
            pd.sendFloat("midinote", F6);
            piano.setImage("piano_7.jpg");
            break;

        /* up */
        case 19:
            pd.sendFloat("midinote", G6);
            piano.setImage("piano_8.jpg");            
            break;

        /* right */
        case 22: 
            pd.sendFloat("midinote", A6);
            piano.setImage("piano_9.jpg");            
            break;

        /* down */
        case 20: 
            pd.sendFloat("midinote", B6);
            piano.setImage("piano_10.jpg");            
            break;

        /* space */
        case 62:
            pd.sendFloat("midinote", C7);
            piano.setImage("piano_11.jpg");            
            break;
            
    }
    //piano.setImage("piano.jpg");
});
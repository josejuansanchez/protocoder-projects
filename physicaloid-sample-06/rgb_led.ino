#include <SoftwareSerial.h>

const int rLEDpin = 9;
const int gLEDpin = 10;
const int bLEDpin = 11;

int r = 0;
int g = 0;
int b = 0;

void setup() {
  Serial.begin(9600);
  
  pinMode(rLEDpin, OUTPUT);
  pinMode(gLEDpin, OUTPUT);
  pinMode(bLEDpin, OUTPUT);  
}

void loop() {    
  while (Serial.available() > 0) {
    char symbol = Serial.read();
    
    switch(symbol) {
      case 'r': r = Serial.parseInt();
        break;
        
      case 'g': g = Serial.parseInt();
        break;
        
      case 'b': b = Serial.parseInt();
        break;        
    }
    
    analogWrite(rLEDpin, r);
    analogWrite(gLEDpin, g);
    analogWrite(bLEDpin, b);
  }
}

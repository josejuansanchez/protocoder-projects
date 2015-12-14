#define PIN_ID 13

void setup() {
  Serial.begin(9600);
  pinMode(PIN_ID, OUTPUT); 
}

void loop() {
  if (Serial.available() > 0) {

    String command = Serial.readString();

    if (command == "on") {
      digitalWrite(PIN_ID, HIGH);
    }
    
    if (command == "off") {
      digitalWrite(PIN_ID, LOW);
    }
      
  }

}

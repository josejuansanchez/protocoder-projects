#define PIN_ID 13

void setup() {
  Serial.begin(9600);
  pinMode(PIN_ID, OUTPUT); 
}

int delayTime = 1000;

void loop() {

  if (Serial.available() > 0) {
    delayTime = Serial.parseInt();
  }  
  
  digitalWrite(13, HIGH);
  delay(delayTime);
  digitalWrite(13, LOW);
  delay(delayTime); 
}

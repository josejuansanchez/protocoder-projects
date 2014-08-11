#include <SoftwareSerial.h>
#include <Servo.h>

#define RX_PIN 0
#define TX_PIN 1

SoftwareSerial BT(RX_PIN, TX_PIN);

#define SERVO_PIN_LEFT  6
#define SERVO_PIN_RIGHT 3

Servo servo_left;
Servo servo_right;

// Go forward
void forward() 
{
  servo_left.write(180);
  servo_right.write(0);
}

// Go back
void back() 
{
  servo_left.write(0);
  servo_right.write(180);
}

// Go right
void right() 
{
  servo_left.write(180);
  servo_right.write(180);
}

// Go left
void left() 
{
  servo_left.write(0);
  servo_right.write(0);
}

// Stop
void stopRobot() 
{
  servo_left.write(90);
  servo_right.write(90);
}

void setup() 
{  
  BT.begin(9600);
  Serial.begin(9600);

  servo_left.attach(SERVO_PIN_LEFT);
  servo_right.attach(SERVO_PIN_RIGHT);
}

void loop() 
{
  if (!BT.available())
    return;

  switch(BT.read()) {
    case 'F': 
      forward();
      break;
       
    case 'B': 
      back();
      break;
        
    case 'L': 
      left();
      break;
        
    case 'R': 
      right();
      break;        
  }

  delay(500);
  stopRobot();
}

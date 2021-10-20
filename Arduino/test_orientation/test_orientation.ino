// These codes are based on the Arduino Library
// File->Examples->Adafruit Circuit Playground->Hello_CircuitPlayground->Hello_Accelerometer
// Motion Sensor idea came from Erin St Blanine
// Ref: https://learn.adafruit.com/circuit-playgrounds-motion-sensor
// Keyboard input idea comes from the touch sensor tutorial
// Ref: https://learn.adafruit.com/circuit-playground-fruit-drums/hello-capacitive-touch

#include <Adafruit_CircuitPlayground.h>
#include "Keyboard.h"
#define CAP_THRESHOLD   50
#define DEBOUNCE        0

float X, Y, Z;

// Combined with the keyboard input idea inside Unity to trigger the movement
// Initialize everything
void setup() {
  Serial.begin(9600);
  Keyboard.begin();
  CircuitPlayground.begin();
}

void loop() {
  X = CircuitPlayground.motionX();
  Y = CircuitPlayground.motionY();
  Z = CircuitPlayground.motionZ();

  // Check if the axies moved
  if (X < -3) {
  Keyboard.write('S');
    delay(DEBOUNCE);
  }

  if (X > 3) {
  Keyboard.write('W');
    delay(DEBOUNCE);
  }

  if (Y > 3) {
  Keyboard.write('Q');
    delay(DEBOUNCE);
  }

  if (Y < -5) {
  Keyboard.write('E');
    delay(DEBOUNCE);
  }
//
  if (Z > 3) {
  Keyboard.write('D');
    delay(DEBOUNCE);
  }

  if (Z < -3) {
  Keyboard.write('A');
    delay(DEBOUNCE);
  }

 



  
  //Serial.print("X: ");
  //Serial.print(X);
  Serial.print("  Y: ");
  Serial.print(Y);
  //Serial.print("  Z: ");
  //Serial.println(Z);

  delay(1000);
}

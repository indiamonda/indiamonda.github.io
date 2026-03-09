import RPi.GPIO as GPIO
import time
import requests

GPIO.setmode(GPIO.BCM)

TRIG1 = 23
ECHO1 = 24

TRIG2 = 19
ECHO2 = 26

GPIO.setup(TRIG1, GPIO.OUT)
GPIO.setup(ECHO1, GPIO.IN)

GPIO.setup(TRIG2, GPIO.OUT)
GPIO.setup(ECHO2, GPIO.IN)

print("Start detecting basketballs...")

while True:
  GPIO.output(TRIG1, False)
  time.sleep(0.0001)

  GPIO.output(TRIG1, True)
  time.sleep(0.00001)
  GPIO.output(TRIG1, False)

  GPIO.output(TRIG2, False)
  time.sleep(0.0001)

  GPIO.output(TRIG2, True)
  time.sleep(0.00001)
  GPIO.output(TRIG2, False)

  while GPIO.input(ECHO1) == 0 and GPIO.input(ECHO2) == 0:
    pulse_start = time.time()

  while GPIO.input(ECHO1) == 1 or GPIO.input(ECHO2) == 1:
    pulse_end = time.time()

  distance = (pulse_end - pulse_start) * 17150
  distance = round(distance, 2)

  if distance < 16:
    print("Distance:", distance, "cm")
    requests.get("http://localhost:5000/api/score/increment")
    time.sleep(2) 

print("Stop detecting basketballs.")

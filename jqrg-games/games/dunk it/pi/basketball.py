import RPi.GPIO as GPIO
import time
import requests

TRIG = 23
ECHO = 24

GPIO.setmode(GPIO.BCM)
GPIO.setup(TRIG, GPIO.OUT)
GPIO.setup(ECHO, GPIO.IN)

print("Start detecting basketballs...")

while True:
  GPIO.output(TRIG, False)
#  time.sleep(0.01)

  GPIO.output(TRIG, True)
  time.sleep(0.00001)
  GPIO.output(TRIG, False)

  while GPIO.input(ECHO) == 0:
    pulse_start = time.time()

  while GPIO.input(ECHO) == 1:
    pulse_end = time.time()

  distance = (pulse_end - pulse_start) * 17150
  distance = round(distance, 2)

  if distance < 16:
    print("Distance:", distance, "cm")
    requests.get("http://localhost:5000/api/score/increment") 

print("Stop detecting basketballs.")
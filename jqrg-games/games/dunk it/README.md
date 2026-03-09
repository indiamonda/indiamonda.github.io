## Overview
DunkIt is an arcade basketball game you can play at home.

## Overall Architecture
The system consists of the following apps:

* A Python script running on Pi for interacting with the HC-SR04 sensor. When a ball goes in, the script will call the API of the REST API server running on the laptop.

* A REST API server and WebSocket server running on a local computer. When REST APIs are invoked, this app will broadcast the updated score to all WebSocket clients.

* A web app based on React.js + mobx-state-tree running in a browser. The web app will receive score updates from the WebSocket server and display the score in the UI.

## Play the game
Run `python3 basketball.py` on Pi.

Run `yarn dev` on your local computer.

Open http://localhost:3000 in a browser.

Throw basketballs through the hoop and see the score increments in the browser UI.

## Use SSH tunneling to give Pi access to laptop
There are many ways to connect Pi to a computer. One way is to use SSH tunneling (port forwarding) by running the following command on a computer:
`ssh -R 5000:mycomputer:5000 pi@raspberrypi.local`

The command will prompt you for the password. The default password is `raspberry`.

The command basically means, on Pi, I can send requests to mycomputer:5000. Those requests will be tunnelled back to my computer at port 5000.

## set up SSH
Make sure SSH is enabled on the Pi. If ssh is not enabled on the Pi, you can bring up the configurations for enabling it by running this on the Pi: 
`sudo raspi-config`

## Detect basketball going through a hoop
This project uses HC-SR04 to detect basketball going through a hoop.

HC-SR04 is a distance censor that can measure distances in the range of 2cm to 400cm.

Here's the link to the datasheet of HC-SR04:
https://electrosome.com/hc-sr04-ultrasonic-sensor-raspberry-pi/

HC-SR04 has four pins :
* VCC – 5V input power
* TRIG – Trigger Input
* ECHO – Echo Output
* GND – Ground

HC-SR04 works by emitting ultrasound wave with the TRIG pin. When the wave is reflected by a target object, the ECHO pin will pick up the reflected wave and give us the time elapsed between the sending and receiving of the sound wave. We can use the elapsed time to calculate the distance between HC-SR04 and the target object.
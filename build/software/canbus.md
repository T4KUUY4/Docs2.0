---
layout: default
title: Can Bus Electronics
parent: Software Configuration
grand_parent: The Build
nav_order: 1
---


<link  rel="stylesheet"  href="style.css">
<script  src="canbus.js"> </script>
<div class="defaulthide" id="progressdiv">
<div class="progress">
  <div id="progressbar" class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 8.33333333333%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="120">Step 1</div>
</div>
</div>

<div id="00" markdown="1">
# Welcome to the Software Configuration page for CAN-Bus Electronics
Please follow each step closely and once ready, click the "I am done, let's move on" button.

### Select your Control Board
<div class="form-check form-check-inline boards">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="boardcanable" value="option1" checked>
  <label class="form-check-label" for="boardcanable">Canable</label>
</div>
<div class="form-check form-check-inline boards">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="boardcan2usb" value="option2">
  <label class="form-check-label" for="boardcan2usb">Can2USB</label>
</div>
<div class="form-check form-check-inline boards">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="boardrs485" value="option3">
  <label class="form-check-label" for="boardrs485">rs485</label>
</div>
<div class="form-check form-check-inline boards">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="boardutoc" value="option3">
  <label class="form-check-label" for="boardutoc">utoc</label>
</div>
<div class="form-check form-check-inline boards">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="boardu2c" value="option3">
  <label class="form-check-label" for="boardu2c">u2c</label> 
</div>

### Select your Can Toolhead Board 
<div class="form-check form-check-inline tb">
  <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="tbhuvud" value="option1">
  <label class="form-check-label" for="tbhuvud">Huvud</label>
</div>
<div class="form-check form-check-inline tb">
  <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="tbshtxx" value="option2">
  <label class="form-check-label" for="tbshtxx">SHTXX</label>
</div>
<div class="form-check form-check-inline tb">
  <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="tbsht36v2" value="option3">
  <label class="form-check-label" for="tbsht36v2">SHT36 (V2)</label>
</div>
<div class="form-check form-check-inline tb">
  <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="tbebb10" value="option3">
  <label class="form-check-label" for="tbebb10">EBB V1.0 (F072)</label>
</div>
<div class="form-check form-check-inline tb">
  <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="tbebb11" value="option3">
  <label class="form-check-label" for="tbebb11">EBB v1.1 (G0B1)</label>
</div>
<div class="form-check form-check-inline tb">
  <input class="form-check-input" type="radio" name="inlineRadioOptions1" id="tbebb12" value="option3">
  <label class="form-check-label" for="tbebb12">EBB v1.2 (G0B1)</label>
</div>



<button type="button" class="btn btn-danger" id="button0" onclick="start()">Okay, let's start!</button>
</div>
<!-- controller board -->
<div class="defaulthide" id="0" markdown="1">
# Canable & Clones

## **PI Setup**

``` sudo nano /etc/network/interfaces.d/can0 ```

```bash
allow-hotplug can0
iface can0 can static
 bitrate 500000
 up ifconfig $IFACE txqueuelen 256
 pre-up ip link set can0 type can bitrate 500000
 pre-up ip link set can0 txqueuelen 256
```

and press <kbd>Ctrl</kbd>+<kbd>X</kbd> to save.

you can now reboot the pi with ` sudo reboot `



## Test the network

Once the pi has rebooted you can run the `ip -s link show can0` command to check your network status.

You should see a line like the below in the results.
The key thing to note is that the network is **UP** for now.

![../images/iplink.png](../images/iplink.png)



## Can2USB firmware for Canable/U2C/UTOC boards

Optional (but may fix issues if your network doesnt start up)

You can flash candlelight firmware on many of the common boards (UTOC/U2C/Canable) with the following instructions

[./candlelight_fw.md](candlelight_fw.md)



### Suggested troubleshooting

1. If nothing shows up, try completely powering off printer and restarting it
2. Check that the toolboard is also flashed to 500k instead of 250k .




#### references

https://www.klipper3d.org/CANBUS.html
https://www.waveshare.com/wiki/RS485_CAN_HAT
</div>


<div class="defaulthide" id="1" markdown="1">
can2usb
</div>

<div class="defaulthide" id="2" markdown="1">
rs485
</div>

<div class="defaulthide" id="3" markdown="1">
utoc
</div>

<div class="defaulthide" id="4" markdown="1">
u2c
</div>

<!-- toolhead board -->

<div class="defaulthide" id="5" markdown="1" name="huvud">
huvud
</div>

<div class="defaulthide" id="6" markdown="1" name="shtxx">
shtxx
</div>

<div class="defaulthide" id="7" markdown="1" name="sht36v2">
sht36
</div>

<div class="defaulthide" id="8" markdown="1" name="ebb10">
ebb10
</div>

<div class="defaulthide" id="9" markdown="1" name="ebb11">
ebb11
</div>

<div class="defaulthide" id="10" markdown="1" name="ebb12">
ebb12
</div>




<br>
<div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="text-center btn btn-danger defaulthide margin-right2 btn-spacing-mobile" id="button-prev" onclick="moveback(), check0page()">Let's go back again</button>
<button type="button" class="text-center btn btn-danger defaulthide" id="button-next" onclick="moveon(), checktoolhead()">I am done, let's move on</button>
</div>
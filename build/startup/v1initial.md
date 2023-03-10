---

layout: default
title: Initial Startup for Voron Trident
nav_exclude: true

---
<link  rel="stylesheet"  href="style.css">
<!--<link rel="stylesheet" href="progress.css"> -->
<script  src="buttonsv1.js"> </script>
<script src="konami.js"> </script>
<script>
  const easterEgg = new Konami("https://i.giphy.com/media/ZhESFK96NxbuO1yDgy/giphy.webp")
</script>


<div class="defaulthide" id="progressdiv">
<div class="progress">
  <div id="progressbar" class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 8.33333333333%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="120">Step 1</div>
</div>
</div>

<div id="00" markdown="1">

# Welcome to the initial startup guide for Voron Trident
Please follow each step closely and once ready, click the "I am done, let's move on" button.

### Select your webinterface
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="mainsailcheck" onchange="hideoctowarning()" checked>
  <label class="form-check-label" for="mainsailcheck">
    Mainsail/Fluidd
  </label>
</div>

<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="octocheck" onchange="showoctowarning()" >
  <label class="form-check-label" for="octocheck">
    Octoprint
  </label>
  
</div>

<script>
function showoctowarning() {
    document.getElementById("octowarning").style.display = "block";
}

function hideoctowarning() {
    document.getElementById("octowarning").style.display = "none";
}


</script>

<div id="octowarning" class="defaulthide">
 <br>
<div class="alert alert-warning" role="alert"><i class="fa fa-warning"></i><b> Important:</b> Most users use Mainsail or Fluidd instead of Octoprint.<p>It might be hard to get support for your interface.</p></div>
</div>




<button type="button" class="btn btn-danger" id="button0" onclick="v1start()">I am done, let's move on</button>
</div>
<div class="defaulthide" id="0" markdown="1">


# Information regarding this guide
This guide provides a list of steps to help confirm the pin settings in the Klipper printer.cfg file.

During this guide, it may be necessary to make changes to the Klipper config file. Be sure to issue a ```RESTART``` command after every change to the config file to ensure that the change takes effect (type "restart" in the Octoprint or Mainsail terminal and then click "Send"). It's also a good idea to issue a ```STATUS```command after every ```RESTART``` to verify that the config file is successfully loaded.

  

Any time commands are requested to be issued, those will happen in the 'Terminal' or 'Console' tab of the OctoPrint, Mainsail, or Fluidd web UI, in the box for entering commands directly.




<div class="defaulthide" id="octoconsole" markdown="1">
![](./images/octoprint_terminal_tab.png)
</div>

  
<div class="defaulthide" id="mainsailconsole" markdown="1">
![](./images/mainsail_terminal.png)
</div>
  

Any time movements need to be made, those will happen in the 'Control' tab / section of the Octoprint, Mainsail, or Fluidd web UI. The numbers underneath X, Y, and Z control the movement distance.

<div class="defaulthide" id="mainsailconsole2" markdown="1">
![](./images/mainsail_controls.png)
</div>


<div class="defaulthide" id="octoconsole2" markdown="1">
![](./images/Octoprint_Controls.png)
</div>

<br>




</div>
<div class="defaulthide" id="1" markdown="1">
## Verify Temperature 

Start by verifying that temperatures are being properly reported. Navigate to the Octoprint/Mainsail temperature graph.



Verify that the temperature of the nozzle and bed are present and **not increasing**. If it is increasing, remove power from the printer. If the temperatures are not accurate, review the `sensor_type` and `sensor_pin` settings for the extruder and/or bed.
<br>



</div>

<div class="defaulthide" id="2" markdown="1">
## Verify heaters


Navigate to the temperature graph and type in 50 followed by enter in the "Tool" temperature target feild. The extruder temperature in the graph should start to increase (within about 10 seconds or so). Then go to the "Tool" temperature drop-down box and select "Off". After several minutes the temperature should start to return to its initial room temperature value. If the temperature does not increase, then verify the `heater_pin` setting in the config.

Perform the above steps again with the bed.

<img src="images/heaters.gif" alt="RAW button GIF" width="70%">
<br>

</div>


<div class="defaulthide" id="3" markdown="1">
## Stepper Motor Check

To verify that each stepper motor is operating correctly, send the following command in the terminal:

`STEPPER_BUZZ STEPPER=stepper_x`

Run this command for each of the motors:

* stepper_x
* stepper_y
* stepper_z
* stepper_z1
* stepper_z2
* extruder


The STEPPER_BUZZ command will cause the given stepper to move one millimeter in a positive direction and then it will return to its starting position. (If the endstop is defined at position_endstop=0 then at the start of each movement the stepper will move away from the endstop.) It will perform this movement ten times.

<img src="images/verifysteppers.gif" alt="RAW button GIF" width="70%">

If the motor moves back and forth, it's working, and you can move on to the next step.

<details markdown="1">
  <summary>Troubleshooting</summary>
  
* If the stepper does not move at all verify the following the "enable_pin" and "step_pin" in your printer.cfg.

* If the stepper motor moves but does not return to its original position then verify the "dir_pin" setting.

* If the stepper motor oscillates in an incorrect direction, then it generally indicates that the "dir_pin" for the axis needs to be inverted. To do this, add a '!' in front of the "dir_pin". Example: "dir_pin: !PIN"

* If the motor moves significantly more or significantly less than one millimeter then verify the `rotation_distance` setting.

* If the motor buzzes, check the stepper motor wiring.

</details>

![](./images/VT-motor-configuration-guide.png)

<br>


</div>

<div class="defaulthide" id="4" markdown="1">


## Endstop Check

Make sure that none of the X, Y, or Z endstops are being pressed.  Then send a `QUERY_ENDSTOPS` command.  The terminal window should respond with the following:

```
Send: QUERY_ENDSTOPS
Recv: x:open y:open z:open
```

If any of them say "triggered" instead of "open", double-check to make sure none of them are pressed.  Next, manually press the X endstop switch, send the `QUERY_ENDSTOPS` command again, and make sure that the X endstop says "triggered" and the Y and Z endstops stay open.  Repeat with the Y and Z endstops.

If it is found that one of the endstops has inverted login (i.e. it reads as "open" when it is pressed and "triggered" when not pressed), go into the printer configuration file (typically printer.cfg) and add or remove the ! in front of the pin identifier. For example, if the X endstop was inverted, add a ! in front of the pin number as follows:

`endstop_pin: P1.28` -> `endstop_pin: !P1.28`

<br>


</div>

<div class="defaulthide" id="5" markdown="1">

## XY Homing Check

At this point everything is ready to home X and Y.

**Important:** You need to be able to quickly stop the printer in case something goes wrong (e.g. the tool head goes the wrong direction).  There are a few ways of doing this:

1. Use the E-stop button on the display (if installed).  On the Mini12864 it is the small button underneath the main control knob.  Test the button and see what happens -  Klipper should shut down. Raspberry Pi and OctoPrint/Mainsail/Fluidd should still be running but disconnected from Klipper.  Press "Connect" in the upper left corner of OctoPrint, then in the Octoprint terminal window send a `FIRMWARE_RESTART` to get the printer back up and running.
2. Have a computer right next to the printer with the `RESTART` or `M112` command already in the terminal command line in OctoPrint.  When you start homing the printer, if it goes in the wrong direction, quickly send the restart command and it will stop the printer.
3. As a "nuclear" option, power off the printer with the power switch if something goes wrong.  This is not ideal because it may corrupt the files on the SD card and to recover would require reinstalling everything from scratch.

Once there is a _tested_ process for stopping the printer in case of something going wrong,  you can test X and Y movement.  *note: you will need to test X AND Y before you can correctly determine what adjustments are needed.*  First, send a `G28 X` command. This will only home X: The tool head should *move up slightly and then move to the right until it hits the X endstop*. If it moves any other direction, abort, take note, but still move on to testing Y. Next, test Y: run `G28 Y`.  The toolhead should move to the back of the printer until it hits the Y endstop. In a CoreXY configuration, both motors have to move in order to get the toolhead to go in only and X or Y direction (think Etch A Sketch). If the gantry moves downward first before moving to the right, you must reverse your z stepper directions in the config.

If either axis does not move the toolhead in the expected or correct direction, refer to the table below to figure out how to correct it.  If you need to invert the direction of one of the motors, invert the direction pin definition by adding a `!` to the pin name. For example, `dir_pin: PB2` would become `dir_pin: !PB2`.  (if the entry already has a `!`, remove it instead).   If the motors are going in directions that match the lower row of the chart, physically swap your X and Y (A and B) motor connectors on the MCU.

* [stepper x] = Motor B
* [stepper y] = Motor A

## Motor Configuration Guide for the Voron Trident


![](./images/VT-motor-configuration-guide.png)

<br>

</div>

<div class="defaulthide" id="6" markdown="1">
## Bed locating

Before the 0,0 point and Z endstop locations are set, the physical locations of the Z endstop and print bed need to be finalized.

The Z endstop should be located at close to max X position. Home X and Y with G28 X Y and then traverse just Y to locate a Z endstop position at the maximum X travel that will still trigger the endstop. Lock down the Z endstop at that position.

Once the Z endstop is fixed into position the base plate should be adjusted so that the Z endstop pin is approximately 2-3mm from the aluminum base plate.


</div>

<div class="defaulthide" id="7" markdown="1">
## Define 0,0 Point

The homing position is not at the typical location of 0,0 but at the maximum travel location.  The actual numbers vary by printer build size.

Depending on bed location, the positional parameters may need to be adjusted to re-locate the 0,0 point.

1. Start by re-running `G28 X Y` to home X and Y.  After this, the nozzle will be at the maximum X,Y as defined by *position_max* under *[stepper_x]* and *[stepper_y]*. 
2. Using the OctoPrint or Mainsail controls, move the nozzle to the front left corner of the bed.
3. If the left corner of the bed cannot be reached within 3-5mm, the bed location needs to be physically adjusted (if possible). Move the bed on the extrusions or move the extrusions to get the bed location within range.
	* For V2, make sure whatever bed position results still allows the nozzle to reach the Z endstop switch (See 'Bed Locating').
	* If questionable, turn off motors and attempt to move the gantry by hand to see if the front left corner can physically be reached by the nozzle.
4. Once the nozzle is close to the front left corner of the bed but still on the bed, send an `M114` command to retrieve the current location.
	* *Note: Due to other tolerances, it is usually not recommended to have the 0,0 exactly on the corner of the bed or build surface. Spec bed sizes are always slightly larger than the defined print volume so print volume loss will be minimal.*

If X and Y offsets are less than 1mm and 0,0 is over the bed, nothing needs to be changed.

If X and Y offsets are within 5mm or 0,0 is past the bed, the *position_max* values should be adjusted to change where the 0,0 point is computed.  If the 0,0 is over the bed, the distance from the home point to the front left (*position_max*) must be increased.  If the 0,0 is past the bed, the distance must be decreased. The amount is determined by the output of the `M114` command. Update *position_max* and *position_endstop* for both *[stepper_x]* and *[stepper_y]* as follows:

* For X: New = Current - Get Position X (M114) Result
* For Y: New = Current - Get Position Y (M114) Result

*If the Z endstop pin location has been previously defined, be sure to re-follow the process to set the Z endstop pin location (if applicable).*

If anything is updated in the printer configuration file, save the file and restart Klipper using `FIRMWARE_RESTART`.

</div>

<div class="defaulthide" id="8" markdown="1">
## Z Endstop Pin Location

* Start by re-running `G28 X Y` to home X and Y.
* Using the software controls, move the nozzle until it is directly over the Z endstop switch.
* Send an `M114` command and record the X and Y values.
* Update the homing routing in the printer configuration file under *[homing_override]* or *[safe\_z\_home]* with those values.
* Restart Klipper with `FIRMWARE_RESTART`. 
* Run a full `G28` and make sure that the printer properly homes X, Y, and Z.  
</div>


<div class="defaulthide" id="9" markdown="1">

## Inductive Probe Check

### Probe Testing

With the toolhead in the center of the bed, reconfirm that the probe is working correctly.

When it is far from the bed, `QUERY_PROBE` should return ???open???. When a metal object is close to the probe, `QUERY_PROBE` should return ???triggered???. If the signal is inverted, add a ???!??? In front of the pin definition (ie, pin: ! z:P1.24).

Slowly reduce your Z height and run `QUERY_PROBE` each time until `QUERY_PROBE` returns ???triggered??? - make sure the nozzle is not touching the print surface (and has clearance). 

### Probe Accuracy Check

With the bed and hotend cold (for now), move the probe to the center of the bed and run `PROBE_ACCURACY`. It will probe the bed 10 times in a row and output a standard deviation value at the end. Make sure that the sensed distance is not trending (gradually decreasing or increasing over the 10 probes) and that the standard deviation is less than 0.003mm.

Example of unstable `PROBE_ACCURACY` (trending downward during warm up).

```
Send: PROBE_ACCURACY
Recv: // PROBE_ACCURACY at X:125.000 Y:125.000 Z:7.173 (samples=10 retract=2.000 speed=2.0
Send: M105
Recv: // probe at 125.000,125.000 is z=4.975000
Recv: // probe at 125.000,125.000 is z=4.960000
Recv: // probe at 125.000,125.000 is z=4.955000
Recv: // probe at 125.000,125.000 is z=4.952500
Recv: // probe at 125.000,125.000 is z=4.950000
Recv: // probe at 125.000,125.000 is z=4.947500
Recv: // probe at 125.000,125.000 is z=4.942500
Recv: // probe at 125.000,125.000 is z=4.937500
Recv: // probe at 125.000,125.000 is z=4.937500
Recv: // probe at 125.000,125.000 is z=4.932500
Recv: // probe accuracy results: maximum 4.975000, minimum 4.932500, range 0.042500, average 4.949000, median 4.948750,
standard deviation 0.011948
```
</div>


<div class="defaulthide" id="10" markdown="1">
## PID Tune Bed & Hotend

The PID tune is important for tuning the printer for a given hardware configuration to ensure that temperatures can remain as stable as possible during operation.

### PID Tune Heated Bed

Move nozzle to the center of the bed and approximately 5-10mm above the bed surface, then run: 

`PID_CALIBRATE HEATER=heater_bed TARGET=100`

It will perform a PID calibration routine that will last about 10 minutes. Once it is finished, type `SAVE_CONFIG` which will save the parameters into your configuration file.

### PID Tune Hotend

Set the part cooling fans to 25% (`M106 S64`) and then run: 

`PID_CALIBRATE HEATER=extruder TARGET=245`

It will perform a PID calibration routine that will last about 5 minutes. Once it is finished, type `SAVE_CONFIG` which will save the parameters into your configuration file.
</div>


<div class="defaulthide" id="11" markdown="1">
## Bed Leveling

### Z Tilt 

The Trident uses automated bed leveling using 3 motors.  There is a macro `Z_TILT_ADJUST` built into Klipper for that function. It is very similar to the `QUAD_GANTRY_LEVEL` used by V2, but supports 3 or more motors. Run the `Z_TILT_ADJUST` and it will probe each of the 3 points 3 times, average the readings, then make adjustments until the gantry is level.

After that process has been completed, re-home z by running `G28 Z`, and then rerun the `Z_ENDSTOP_CALIBRATE` command to bring your nozzle to the correct Z=0 position.

### Tilt with Heated Bed and Chamber

Run a `G28` command to home the printer since a `SAVE_CONFIG` restarts the printer.

This will be the first time that a Quad Gantry Level has been run at a high chamber temperature.  To ensure that the probe has stabilized with the heated bed at 100C and the hot end at 240C, run `PROBE_ACCURACY` with the nozzle at the center of the bed.  If the values are trending (increasing or decreasing) throughout the 10 probes or the standard deviation is greater than 0.003mm, wait another 5 minutes and try again.

Once the readings are stable, run `Z_TILT_ADJUST`.  Make a note of how long the probe readings took to stabilize for when starting prints - typically a cold printer takes 10-20 minutes to stabilize at temperature.

</div>



<div class="defaulthide" id="12" markdown="1">
## Z Offset Adjustment

If you did not run PID tuning, set your extruder to 245C and heated bed to 100C and let the printer heat up for at least 15 minutes.

### Initial / Simple Process

Preparation

* Run a `G28`, and then a `Z_TILT_ADJUST`, and then another `G28`.

* Move the nozzle to the center of the bed if it is not already.
* Clear any stored bed meshes with `BED_MESH_CLEAR`

Run `Z_ENDSTOP_CALIBRATE`

Slowly move the nozzle toward the bed by using `TESTZ Z=-1` until the nozzle is relatively close to the bed, and then stepping down with `TESTZ Z=-0.1` until the nozzle touches a piece of paper on top of the build plate. If you go too far down, you can move the nozzle back up with: `TESTZ Z=0.1`. Once you are satisfied with the nozzle height, run `ACCEPT` and then `SAVE_CONFIG`.

**Important:** Klipper assumes that this process is being done cold.  If being performed hot, do an additional `TESTZ Z=-0.1` before accepting.

If an "out of bounds" error occurs, send `Z_ENDSTOP_CALIBRATE`, `ACCEPT`, and then `SAVE_CONFIG`. This will redefine the 0 bed height so you will be able to get closer.

**V2:** If you get this error it likely means that the shaft for your Z Endstop is too long and may catch on the print head during a print. It is best to cut the shaft or raise the bed (with a washer, for instance) so that it is within 1mm of the build surface.

### Fine Tuning Z Height

#### With LCD Screen
The Z offset can be adjusted during a print using the Tune menu on the display, and the printer configuration can be updated with this new value. Remember that higher values for the position_endstop means that the nozzle will be closer to the bed.

#### Mainsail and Fluidd
The "babystepping" controls may be used to fine tune the z offset.

#### Without LCD Screen
If you're running your printer headless, the Z height can still be adjusted on-the-fly using the web interface.  This is built into Mainsail and Fluidd, but requires some additional work for Octoprint.

#### Saving your results
All of the above methods are "transient".  The changes are lost as soon as your printer restarts.  Once you find an adjustment you are happy with, you may make it permanent, by applying it to the `position_endstop` in your config file:
run the command `Z_OFFSET_APPLY_ENDSTOP` followed by `SAVE_CONFIG`.  This will restart your printer, with the adjustment permanently applied to the endstop position.


<br>
</div>


<div class="defaulthide" id="13" markdown="1">

# Looks like you are done with the initial startup guide for your brand new Trident! 

But wait! There's more:

## Extruder Calibration (e-steps)

Before the first print, make sure that the extruder extrudes the correct amount of material.

* With the hotend at temperature, make a mark on the filament between the roll of filament and your extruder, between 120mm and 150mm away from the entrance to the extruder.  Measure the distance from the entrance of the extruder to that mark.
* In Octoprint / Mainsail, extrude 50mm 2 times (for a total of 100mm since Klipper doesn???t allow you to extrude more than 50mm at a time). 
* Measure from the entrance of your extruder to the mark you made previously. 
	* *In a perfect world, assuming the mark was at 120mm, it would measure 20mm (120mm - 20mm = 100mm), but usually won???t be.*
* Update `rotation_distance` in the extruder section of the configuration file using this formula:
	* New Config Value = Old Config Value * (Actual Extruded Amount/Target Extruded Amount)

You can also use the calculator [here](http://tools.takuya.wtf/esteps.html)

*Note: a higher configuration value means that less filament is being extruded.*

Paste the new value into the configuration file, restart Klipper, and try again. Once the extrusion amount is within 0.5% of the target value (ie, 99.5-100.5mm for a target 100mm of extruded filament), the extruder is calibrated!

Typical `rotation_distance` values should be around 22.6789511 for Afterburner, Stealthburner and Mobius (update gear_ratio to 50:10 for Stealthburner with Clockwork 2 or 80:20 for Mobius).

---
### Next: [Slicer Setup](../slicer/index.md)

</div>
<br>
<div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="text-center btn btn-danger defaulthide margin-right2 btn-spacing-mobile" id="button-prev" onclick="movebackv1()">Let's go back again</button>
<button type="button" class="text-center btn btn-danger defaulthide" id="button-next" onclick="moveonv1()">I am done, let's move on</button>
</div>




<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
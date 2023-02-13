---
layout: default
title: Software Configuration
parent: The Build
nav_order: 4
has_children: true
---


<link  rel="stylesheet"  href="style.css">
<script  src="config.js"> </script>
<div class="defaulthide" id="progressdiv">
<div class="progress">
  <div id="progressbar" class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 8.33333333333%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="120">Step 1</div>
</div>
</div>

<div id="00" markdown="1">
# Welcome to the Software Configuration page for your Voron
Please follow each step closely and once ready, click the "I am done, let's move on" button.

### Select your webinterface
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="mainsailcheck" onchange="hideoctowarning()" checked>
  <label class="form-check-label" for="mainsailcheck">
    Mainsail
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="fluiddcheck" onchange="hideoctowarning()" >
  <label class="form-check-label" for="fluiddcheck">
    Fluidd
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="octocheck" onchange="showoctowarning()" >
  <label class="form-check-label" for="octocheck">
    Octoprint
  </label>
  
</div>

### Select your Printer
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id="v0check">
  <label class="form-check-label" for="v0check">
    Voron V0
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id="v1check">
  <label class="form-check-label" for="v1check">
    Voron V1
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id="vtcheck">
  <label class="form-check-label" for="vtcheck">
    Voron Trident
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id="v2check" checked>
  <label class="form-check-label" for="v2check">
    Voron V2
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault2" id="vswcheck">
  <label class="form-check-label" for="vswcheck">
    Voron Switchwire
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

<button type="button" class="btn btn-danger" id="button0" onclick="start()">Okay, let's start!</button>


</div>
<div class="defaulthide" id="0" markdown="1">
## Initial Voron Printer Configuration: <span id="printermodels"><span>

Voron Configuration templates are available in the github repository for each printer.  You likely have them in the files you have already downloaded, in the "firmware" directory, or you can use the appropriate link below:
<div class="defaulthide" id="v0checks" markdown="1">
[Download the Baseline Config for a V0.2](https://github.com/VoronDesign/Voron-0/tree/Voron0.2/Firmware)
</div>

<div class="defaulthide" id="v1checks" markdown="1">
[Download the Baseline Config for a V1.8](https://github.com/VoronDesign/Voron-1/tree/Voron1.8/Firmware/klipper_configurations)
</div>

<div class="defaulthide" id="vtchecks" markdown="1">
[Download the Baseline Config for a Trident](https://github.com/VoronDesign/Voron-Trident/tree/main/Firmware)
</div>

<div class="defaulthide" id="v2checks" markdown="1">
[Download the Baseline Config for a V2.4](https://github.com/VoronDesign/Voron-2/tree/Voron2.4/firmware/klipper_configurations)
</div>

<div class="defaulthide" id="vswchecks" markdown="1">
[Download the Baseline Config for a Switchwire](https://github.com/VoronDesign/Voron-Switchwire/tree/master/Firmware)
</div>
<br>
Note: When downloading text configuration files from github, right-click the “raw” button at the top right of the file, and then use your browser’s “save link as..” function.

<img src="images/rawbutton.gif" alt="RAW button GIF" width="70%">
</div>

<div class="defaulthide" id="1" markdown="1">
Rename the downloaded file to `printer.cfg`
<div class="defaulthide" id="mainsailchecks" markdown="1">
Upload the file via Mainsail's interface.  Go to the "Machine" tab, and under "Config Files", press the "Upload File" button
<br>
<img src="images/upload.gif" alt="RAW button GIF" width="70%">
</div>

<div class="defaulthide" id="fluidchecks" markdown="1">
Upload the file via Fluidd's interface.  Go to the "Configuration" Tab, and under "Configuration Files", press "+"->"Upload"
<br>
<img src="images/upload.gif" alt="RAW button GIF" width="70%">
</div>

<div class="defaulthide" id="octochecks" markdown="1">
Use a secure file transfer program (WinSCP, Cyberduck, Notepad++, NppFT, BBEdit, scp), to transfer the file to your Raspberry Pi, placing it in the folder `/home/pi`.
</div>




</div>

<div class="defaulthide" id="2" markdown="1">

## Editing printer.cfg
**Note:** There are many ways of editing the config file that vary by personal preference.  Mainsail & Fluidd both offer built-in printer.cfg editors. Using Nano editor through SSH is simple but not always user friendly.  Notepad++ with the NppFTP plugin (Windows) or bbEdit (macOS) are user-friendlier alternatives.  






<div class="defaulthide" id="mainsailchecks2" markdown="1">
Click "Settings", "Machine", then on the "printer.cfg"

[Notepad++ Information](./notepadplusplus.md)
<br>
[bbEdit Information](./bbedit.md)

 `nano ~/klipper_config/printer.cfg`
</div>
<div class="defaulthide" id="fluidchecks2" markdown="1">
Click "Configuration", then "printer.cfg", and choose "edit" from the menu that appears

[Notepad++ Information](./notepadplusplus.md)
[bbEdit Information](./bbedit.md)

When using nano, use this command: `nano ~/klipper_config/printer.cfg`


</div>
<div class="defaulthide" id="octochecks2" markdown="1">
Octoprint:`nano ~/printer.cfg`
</div>
</div>
<div class="defaulthide" id="3" markdown="1">
## Review printer.cfg
There are a variety of entries in printer.cfg which will need to be edited to match your particular build.  Open it with your choice of editors, and go through it carefully.  While the key edits are highlighted below, you should read the entire file, and make sure you have found everything which needs your attention.

**Klipper is CASE SENSITIVE. Most keywords are lower case, make sure your phone doesn't capitalize keywords when they shouldn't be. **

## Required Changes

The following items _must_ be updated before the printer can function.

* Printer Definitions
* MCU path(s)
* Thermistor types - hot end, heated bed
	* See 'sensor types' list at end of stock configuration file
* Stepper settings (X, Y, Z(s), extruder)
	* Endstop position
	* Max position
	* Stepper type
* Bed Screw / Tilt / Quad Gantry positions
* Z endstop location

</div>
<div class="defaulthide" id="3" markdown="1">
## Change Details

### Printer Definitions

In this section you set your maximum accelerations and velocity. The stock config is configured fast - so if you are facing issues - you can tweak these values lower and then increase them as you finish tuning your printer. These are the highest values that klipper will allow regardless of what you may have configured in your slicer. 

```ini
[printer]
kinematics: corexy
max_velocity: 350
max_accel: 3000
max_z_velocity: 50
max_z_accel: 350
square_corner_velocity: 10.0
```

Square corner velocity is defined as:

The maximum velocity (in mm/s) that the toolhead may travel a 90 degree corner at. A non-zero value can reduce changes in extruder flow rates by enabling instantaneous velocity changes of the toolhead during cornering. This value configures the internal centripetal velocity cornering algorithm; corners with angles larger than 90 degrees will have a higher cornering velocity while corners with angles less than 90 degrees will have a lower cornering velocity. If this is set to zero then the toolhead will decelerate to zero at each corner. The default is 5mm/s.
</div>
<div class="defaulthide" id="4" markdown="1">
### Update Controller Path

Locate the section starting with **[mcu]**.  The V2 may have an additional section starting with **[mcu z]**, if it has two controllers.  These sections are where the controllers are defined and identified so that Klipper knows which components are connected (and to which controller if there is more than one).

* Begin with all controllers disconnected from the Raspberry Pi.
* For printers with just one controller, connect that controller to the Raspberry Pi.  For printers with two controllers, connect the X/Y/E controller.
* On the Raspberry Pi, run `ls /dev/serial/by-id/`.
* The listing should look similar to this:

![](./images/one_mcu.png)

**Note:** If the device identifier has the word 'marlin' in it, the Klipper firmware is not loaded properly.  Go back and [re-load the Klipper firmware](./#firmware-flashing) before continuing.

* Copy the device ID (e.g. _usb-Klipper\_lpc1768\_1FB0000802094AAF07825E5DC52000F5-if00_) from the terminal window and paste into a temporary text file.
*  Open the configuration file and navigate to the **[mcu]** section.  Modify the `serial: /dev/serial` line and paste in the controller path so that it looks like the following: `serial: /dev/serial/by-id/usb-Klipper_lpc1768_1FB0000802094AAF07825E5DC52000F5-if00`
*  Exit the text editor, and save when prompted.

</div>

<div class="defaulthide" id="5" markdown="1">
### Updating Printer Specific Settings

1. Open the printer.cfg file again and scan through the file.
2. Locate **[stepper_x]**.  Uncomment the _position\_endstop_ and _position\_max_ that corresponds to your printer's size and delete the other options to prevent confusion.
3. Under **[tmcXXXX stepper_x]**, replace XXXX with either 2208 or 2209 to match the type of TMC drivers that are installed.  For example, _[tmc2209_ _stepper\_x]_ for TMC 2209 drivers.
4. Repeat steps 2 & 3 for the **[stepper_y]** section.
5. Under **[stepper_z]**, uncomment _position\_max_ for your printer size and delete the other options to prevent confusion.  Also in the same method as step 3, update the **[tmcXXXX_stepper]** for configuration with the installed stepper type for all four Z motors (Z, Z1, Z2, Z3 as applicable).
6. Under **[extruder]** verify that the _sensor\_type_ is correct.  Do not worry about _step\_distance_ or PID values for now, they will be updated later in the setup process.  Update **[tmcXXXX extruder]** in the same fashion as step 3 to match the installed stepper driver for the extruder.
7. Under **[heater_bed]**, verify the temperature sensor type is correct.
8. Under **[display]**, uncomment the display section that matches the installed display.  Delete the others to prevent confusion.

<div class="defaulthide" id="vtchecks2" markdown="1">
9. Under **[z\_tilt]** and **[screws\_tilt\_adjust]**, uncomment the sections appropriate to the printer size.  Delete the other options to prevent confusion.

</div>
<div class="defaulthide" id="v2checks2" markdown="1">
10.Under **[quad\_gantry\_level]**, uncomment the _gantry\_corners_ and _points_ sections appropriate to the printer size.  Delete the other options to prevent confusion.
</div>


11. Exit the text editor with CTRL-X  and save when prompted.


<div class="defaulthide" id="mainsailchecks3" markdown="1">
### Additional Changes:
1. Add the following entry to your printer.cfg:
```ini
[include mainsail.cfg]
```

</div>
<div class="defaulthide" id="fluidchecks3" markdown="1">
### Additional Changes: FluiddOS only

1.  Add the following entries to your printer.cfg:
```ini
[include fluidd.cfg]
```

</div>

</div>
<div class="defaulthide" id="6" markdown="1">
### Restart to take effect

Under the terminal tab type `FIRMWARE_RESTART` and press enter to send the command to restart Klipper.

The console window should show the following:

```
Recv: // Klipper state: Disconnect
[...]
Recv: // Klipper state: Ready
```

If after 30-60 seconds there is no Ready message, then run `STATUS` in the terminal window.  If Klipper comes back _Not Ready_ it will notify if there is a configuration issue that needs to be corrected.

---
### Next: [Initial Startup](../startup/index.md)
</div>


<br>
<div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="text-center btn btn-danger defaulthide margin-right2 btn-spacing-mobile" id="button-prev" onclick="moveback(), check0page()">Let's go back again</button>
<button type="button" class="text-center btn btn-danger defaulthide" id="button-next" onclick="moveon()">I am done, let's move on</button>
</div>
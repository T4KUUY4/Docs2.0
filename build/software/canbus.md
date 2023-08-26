---
layout: default
title: Can Bus Electronics
parent: Software Configuration
grand_parent: The Build
nav_order: 1
---


<link  rel="stylesheet"  href="style.css">
<script  src="canbus.js"> </script>


<body onload="checkstatus()">
<div class="defaulthide" id="progressdiv">
<div class="progress">
  <div id="progressbar" class="progress-bar progress-bar-striped bg-danger" role="progressbar" style="width: 8.33333333333%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="120">Step 1</div>
</div>
</div>

















<br>
<div class="btn-group" role="group" aria-label="Basic example">
<button type="button" class="text-center btn btn-danger defaulthide margin-right2 btn-spacing-mobile" id="button-prev" onclick="prevpage()">Let's go back again</button>
<button type="button" class="text-center btn btn-danger defaulthide" id="button-next" onclick="newpage()">I am done, let's move on</button>
</div>
</body>
let params = new URLSearchParams(window.location.search);
let modelparam = params.get('model');
let interfaceparam = params.get("interface");
var currentstep = parseInt(params.get("step")); 
let lastpage = currentstep - 1;
//Custom Variables


// model pages
    // ARRAY for pages per model


      const v0pages = new Array("0", "info", "verifytemp", "verifyheater", "v0motor", "xyendstop", "v0homing", "v0endstop", "pid", "v0bedscrews", "initial", "finish");
      const v1pages = new Array("0", "info", "verifytemp", "verifyheater", "v1motor", "xyendstop", "v1homing",  "bedlocating" ,"point00", "zendstop",  "probecheck", "pid", "ztilt", "initial", "finish" );
      const v2pages = new Array("0", "info", "verifytemp", "verifyheater", "v2motor", "xyendstop", "v2homing", "bedlocating", "point00", "zendstop", "probecheck", "pid", "qgl", "initial", "finish" );
      const vswpages = new Array("0", "info", "verifytemp", "verifyheater", "vswmotor", "5");
   
      const v0pagename = new Array("Start", "Information", "Verify Temperatures", "Verify Heaters", "Motor Checks", "XY Endstop Check", "Homing Check", "Z-Endstop", "PID Tuning", "Bed Leveling", "Initial Setup", "Finish Line" );
      const v2pagename = new Array("Start", "Information", "Verify Temperatures", "Verify Heaters", "Motor Checks", "XY Endstop Check", "Homing Check", "Bed Locating", "0 Point", "Z Endstop", "Probe Check", "PID Tuning", "Quad Gantry Level", "Initial Setup", "Finish Line" );
      const v1pagename = new Array("Start", "Information", "Verify Temperatures", "Verify Heaters", "Motor Checks", "XY Endstop Check", "Homing Check", "Bed Locating", "0 Point", "Z Endstop", "Probe Check", "PID Tuning", "Z-Tilt", "Initial Setup", "Finish Line" );
      const vswpagename = new Array("Start", "Information", "Verify Temperatures", "Verify Heaters", "Motor Checks", "XY Endstop Check", "Homing Check", "Z-Endstop", "PID Tuning", "Bed Screw", "Initial Setup", "Finish Line" );
    
   

//check current url params and act accordingly
function checkstatus() { 
  sidebar();


  if (interfaceparam == "mainsail") {
    $(document).ready(function(){
      $(".mainsailclass").show();
      $(".octoprintclass").hide();
    });
  } else if (interfaceparam == "octoprint") {
    $(document).ready(function(){
      $(".mainsailclass").hide();
      $(".octoprintclass").show();
    });
  }

    //unblock buttons on page 1 and block on page 0
    if (currentstep == 0) {
      document.getElementById("button-next").style.display="none";
      document.getElementById("button-prev").style.display="none";
      document.getElementById("button-start").style.display="block";
      document.getElementById("progressdiv").style.display="none";
      document.getElementById("0").style.display="block";
    } else {
      document.getElementById("button-next").style.display="block";
      document.getElementById("button-prev").style.display="block";
      document.getElementById("button-start").style.display="none";
      document.getElementById("progressdiv").style.display="block";
      document.getElementById("0").style.display="none";
    }

 



  if (modelparam == "v0") {
    model = v0pages;
    printermodel = "V0";
    
    maxprogress = v0pages.length;
  } else if(modelparam == "v1") {
    model = v1pages; 
    printermodel = "V1/Trident";
    
    maxprogress = v1pages.length;
  } else if(modelparam == "v2") {
    model = v2pages;
    printermodel = "V2";
    
    
    maxprogress = v2pages.length;
  } else if(modelparam == "vsw") {
    model = vswpages;
    printermodel = "Switchwire";
    maxprogress = vswpages.length;
    
  }

  //Set printermodel
  document.getElementById("printermodel").innerHTML = printermodel;


  

  //unhide page
  currentpage = model[currentstep];
  if(currentpage == "finish") {
    document.getElementById("button-next").style.display="none";
  }
  document.getElementById(currentpage).style.display="block";


  //update progressbar 
  currentwidth = 100/ (maxprogress -1);
  progressbar.style.width= (currentwidth * currentstep) + "%";
  document.getElementById("progressbar").innerHTML = "Step " + currentstep;


  


}

//set interface parameter
function setinterfaceparam() {
  if (document.getElementById("mainsailos").checked) {
    params.set('interface', 'mainsail');
    params.set('step', "1");
  } else if(document.getElementById("octoprint").checked){
    params.set('interface', 'octoprint');
    params.set('step', "1");

    
  }
} 


//show and hide octoprint warning
function showoctowarning() {
    document.getElementById("octowarning").style.display = "block";
}

function hideoctowarning() {
    document.getElementById("octowarning").style.display = "none";
}



//move between pages 



function start() {
  setinterfaceparam();
  window.location.search = params;
  
}


function newpage() {
  nextpage = currentstep + 1;
  console.log(nextpage);
  params.set('step', nextpage);
  window.location.search = params;
}


function prevpage() { 
  previouspage = currentstep - 1;
  console.log(previouspage);
  params.set('step', previouspage);
  window.location.search = params;

}



function sidebar () {
  $( ".nav-list" ).empty();
  var step = 0;

  $( ".nav-list" ).append("<li><a href="+"https://docs.vorondesign.com/"+">Back to the Docs</a></li><br>");
  $( ".nav-list" ).append("<h2 class=" + "'" + "whitetext" +"'" + "color=red;>Table of Contents:</h2>");

  if (modelparam == "v0") 
  $.each(v0pages, function(key, page){
      $( ".nav-list" ).append("<li>"+"<a href="+"?model=v0&step="+step+""+">"+v0pagename[step]+"</a>"+"</li>");
      step++
  }) 
  else if (modelparam == "v2")
  $.each(v2pages, function(key, page){
    $( ".nav-list" ).append("<li>"+"<a href="+"?model=v2&step="+step+""+">"+v2pagename[step]+"</a>"+"</li>");
    step++
  }) 
  else if (modelparam == "v1") 
  $.each(v1pages, function(key, page){
    $( ".nav-list" ).append("<li>"+"<a href="+"?model=v1&step="+step+""+">"+v1pagename[step]+"</a>"+"</li>");
    step++
  }) 
  else if (modelparam == "vsw") 
  $.each(vswpages, function(key, page){
    $( ".nav-list" ).append("<li>"+"<a href="+"?model=vsw&step="+step+""+">"+vswpagename[step]+"</a>"+"</li>");
    step++
  })
}


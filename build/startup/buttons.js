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
   

    
   

//check current url params and act accordingly
function checkstatus() { 
  


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
    document.getElementById("v0chapter").style.display="block";
    maxprogress = v0pages.length;
  } else if(modelparam == "v1") {
    model = v1pages; 
    printermodel = "V1/Trident";
    document.getElementById("v1chapter").style.display="block";
    maxprogress = v1pages.length;
  } else if(modelparam == "v2") {
    model = v2pages;
    printermodel = "V2";
    document.getElementById("v2chapter").style.display="block";
    maxprogress = v2pages.length;
  } else if(modelparam == "vsw") {
    model = vswpages;
    printermodel = "Switchwire";
    maxprogress = vswpages.length;
    document.getElementById("vswchapter").style.display="block";
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



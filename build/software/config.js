
var currentone = 0;
var currentprogress = 10;
var currentwidth= 10;
var newone = 1;
var lastpage = "0";
var currentstep = 1;

function start() {
  var x = document.getElementById("0");
  var y = document.getElementById("00");
  x.style.display = "block";
  y.style.display = "none";
  document.getElementById("progressdiv").style.display ="block";
  document.getElementById("button-next").style.display ="block";
  document.getElementById("button-prev").style.display ="block";
  document.documentElement.scrollTop = 0;
  checkradio();
  checkmodel();
  for (var i=1;i<=10; i++) {
    currentprogress++;
  }
  

}

function checkmodel() {
    
    if (document.getElementById('v0check').checked) {
        document.getElementById("printermodels").textContent="V0";
        document.getElementById("v0checks").style.display="block";
        document.getElementById("v1checks").style.display="none";
        document.getElementById("vtchecks").style.display="none";
        document.getElementById("vtchecks2").style.display="none";
        document.getElementById("v2checks").style.display="none";
        document.getElementById("v2checks2").style.display="none";
        document.getElementById("vswchecks").style.display="none";
         
    }
    
     if (document.getElementById('v1check').checked) {
        document.getElementById("printermodels").textContent="V1";
        document.getElementById("v0checks").style.display="none";
        document.getElementById("v1checks").style.display="block";
        document.getElementById("vtchecks").style.display="none";
        document.getElementById("vtchecks2").style.display="none";
        document.getElementById("v2checks").style.display="none";
        document.getElementById("v2checks2").style.display="none";
        document.getElementById("vswchecks").style.display="none";
         
    }
    
     if (document.getElementById('vtcheck').checked) {
        document.getElementById("printermodels").textContent="Trident";
        document.getElementById("v0checks").style.display="none";
        document.getElementById("v1checks").style.display="none";
        document.getElementById("vtchecks").style.display="block";
        document.getElementById("vtchecks2").style.display="block";
        document.getElementById("v2checks").style.display="none";
        document.getElementById("v2checks2").style.display="none";
        document.getElementById("vswchecks").style.display="none";
         
    }
    
     if (document.getElementById('v2check').checked) {
        document.getElementById("printermodels").textContent="V2";
        document.getElementById("v0checks").style.display="none";
        document.getElementById("v1checks").style.display="none";
        document.getElementById("vtchecks").style.display="none";
        document.getElementById("vtchecks2").style.display="none";
        document.getElementById("v2checks").style.display="block";
        document.getElementById("v2checks2").style.display="block";
        document.getElementById("vswchecks").style.display="none";
         
    }
    
     if (document.getElementById('vswcheck').checked) {
        document.getElementById("printermodels").textContent="Switchwire";
        document.getElementById("v0checks").style.display="none";
        document.getElementById("v1checks").style.display="none";
        document.getElementById("vtchecks").style.display="none";
        document.getElementById("vtchecks2").style.display="none";
        document.getElementById("v2checks").style.display="none";
        document.getElementById("v2checks2").style.display="none";
        document.getElementById("vswchecks").style.display="block";
         
    }
    
}

function checkradio() {

    if (document.getElementById('octocheck').checked) {
    document.getElementById("octochecks").style.display = "block";
     document.getElementById("octochecks2").style.display = "block";
    document.getElementById("mainsailchecks").style.display = "none";
    document.getElementById("mainsailchecks2").style.display = "none";
    document.getElementById("mainsailchecks3").style.display = "none";
    document.getElementById("fluidchecks").style.display = "none";
    document.getElementById("fluidchecks2").style.display = "none";
    document.getElementById("fluidchecks3").style.display = "none";
    }
    
    if (document.getElementById('mainsailcheck').checked) {
    document.getElementById("mainsailchecks").style.display = "block";
    document.getElementById("mainsailchecks2").style.display = "block";
    document.getElementById("mainsailchecks3").style.display = "block";
    document.getElementById("octochecks").style.display = "none";
    document.getElementById("octochecks2").style.display = "none";
    document.getElementById("fluidchecks").style.display = "none";
    document.getElementById("fluidchecks2").style.display = "none";
    document.getElementById("fluidchecks3").style.display = "none";
    
    }

    if (document.getElementById('fluiddcheck').checked) {
      document.getElementById("mainsailchecks").style.display = "none";
      document.getElementById("mainsailchecks2").style.display = "none";
      document.getElementById("mainsailchecks3").style.display = "none";
      document.getElementById("octochecks").style.display = "none";
      document.getElementById("octochecks2").style.display = "none";
      document.getElementById("fluidchecks").style.display = "block";
      document.getElementById("fluidchecks2").style.display = "block";
      document.getElementById("fluidchecks3").style.display = "block";
      }

}


function moveon() {
 
  var x = document.getElementById(currentone);
  var y = document.getElementById(newone);
  var progressbar = document.getElementById("progressbar");
  x.style.display = "none";
  y.style.display = "block";
  currentwidth += 16.6666666667;
  progressbar.ariaValueNow=currentprogress;
  progressbar.style.width=currentwidth + "%";
  currentone++
  newone++
  for (var i=1;i<=10; i++) {
    currentprogress++;
  }
  
   if (document.getElementById("6").style.display == "block") {
    document.getElementById("button-next").style.display = "none";
  
  }
  
  
 
  currentstep++;
  document.getElementById("progressbar").innerHTML = "Step " + currentstep;
  document.documentElement.scrollTop = 0;
}

function check0page() {
    if(document.getElementById("00").style.display == "block") {
        document.getElementById("button-prev").style.display = "none";
        document.getElementById("button-next").style.display = "none";
    }
 
}

function moveback() {
  var currentpage = currentone ;
  var prevpage = currentone - 1;
  var progressbar = document.getElementById("progressbar");
  var x = document.getElementById(currentpage);
  var y = document.getElementById(prevpage);

  if (prevpage == -1) {
    console.log("here");
    console.log(currentpage);
    console.log(prevpage);
    document.getElementById("00").style.display="block";
    document.getElementById("0").style.display = "none";
    }
  

  
  if (document.getElementById("00").style.display == "block") {
    document.getElementById("button-next").style.display = "none";
    document.getElementById("button-prev").style.display = "none";
    document.getElementById("progressdiv").style.display = "none";
    }

  if (lastpage == "0") {
    document.getElementById("button-next").style.display = "block";
    lastpage += 1;
    }
    

    
  x.style.display = "none";
  y.style.display = "block";

  for (var i=1;i<=10; i++) {
    currentprogress--;
  }
 
  document.getElementById("button-next").style.display = "block";
  currentwidth -= 16.6666666667;
  progressbar.ariaValueNow=currentprogress;
  progressbar.style.width=currentwidth + "%";
  currentstep--;
  document.getElementById("progressbar").innerHTML = "Step " + currentstep;
  currentone--;
  newone--;
  document.documentElement.scrollTop = 0;
}

//custom message on reload/back/forward


window.addEventListener('beforeunload', (event) => {
  event.returnValue = "Please use the buttons on the bottom of the page. If you continue, your progress will be lost.";
});
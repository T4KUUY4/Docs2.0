
var currentone = 0;
var currentprogress = 10;
var currentwidth= 10;
var newone = 1;
var lastpage = "0";
var currentstep = 1;

function v0start() {
  var x = document.getElementById("0");
  var y = document.getElementById("00");
  x.style.display = "block";
  y.style.display = "none";
  document.getElementById("progressdiv").style.display ="block";
  document.getElementById("button-next").style.display ="block";
  document.getElementById("button-prev").style.display ="block";
  document.documentElement.scrollTop = 0;
  checkradio();
  for (var i=1;i<=10; i++) {
    currentprogress++;
  }

 
  

}

function checkradio() {

    if (document.getElementById('octocheck').checked) {
    console.log("oct");
    document.getElementById("octoconsole").style.display = "block";
     document.getElementById("octoconsole2").style.display = "block";
    document.getElementById("mainsailconsole").style.display = "none";
    document.getElementById("mainsailconsole2").style.display = "none";
    }
    
    if (document.getElementById('mainsailcheck').checked) {
    document.getElementById("mainsailconsole").style.display = "block";
    document.getElementById("mainsailconsole2").style.display = "block";
    document.getElementById("octoconsole").style.display = "none";
    document.getElementById("octoconsole2").style.display = "none";
    console.log("mains");
    }

}


function moveonv0() {
 
  var x = document.getElementById(currentone);
  var y = document.getElementById(newone);
  var progressbar = document.getElementById("progressbar");
  x.style.display = "none";
  y.style.display = "block";
  currentwidth += 8.33333333333;
  progressbar.ariaValueNow=currentprogress;
  progressbar.style.width=currentwidth + "%";
  currentone++
  newone++
  for (var i=1;i<=10; i++) {
    currentprogress++;
  }
  
  if (document.getElementById("11").style.display == "block") {
    document.getElementById("button-next").style.display = "none";
  
  }
  currentstep++;
  document.getElementById("progressbar").innerHTML = "Step " + currentstep;
  document.documentElement.scrollTop = 0;
}


function movebackv0() {
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
  currentwidth -= 8.33333333333;
  progressbar.ariaValueNow=currentprogress;
  progressbar.style.width=currentwidth + "%";
  currentstep--;
  document.getElementById("progressbar").innerHTML = "Step " + currentstep;
  currentone--;
  newone--;
  document.documentElement.scrollTop = 0;
}


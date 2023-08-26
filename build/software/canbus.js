

var currentone = 0;

var currentprogress = 10;

var currentwidth= 10;

var newone = 1;

var lastpage = "0";

var currentstep = 1;

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
  // progressbar.ariaValueNow=currentprogress;
  //progressbar.style.width=currentwidth + "%";
  //document.getElementById("progressbar").innerHTML = "Step " + currentstep;
  //progress x 100/array length
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




function start() {

  var x = document.getElementById("0");

  var y = document.getElementById("00");

  x.style.display = "block";

  y.style.display = "none";

  document.getElementById("button-next").style.display ="block";

  document.getElementById("button-prev").style.display ="block";

  document.documentElement.scrollTop = 0;

  checkboard();



  



}



function checkboard() {

document.getElementById("00").style.display="none"; //hide start page

var doc = document.getElementById.bind(document);



    if (document.getElementById('boardcanable').checked) {

      doc("1").style.display="none";

      doc("2").style.display="none";

      doc("3").style.display="none";

      doc("4").style.display="none";

      document.getElementById("0").style.display="block";

        

    }

    

     if (document.getElementById('boardcan2usb').checked) {

      doc("0").style.display="none";

      doc("2").style.display="none";

      doc("3").style.display="none";

      doc("4").style.display="none";

      document.getElementById("1").style.display="block";

    

         

    }



     if (document.getElementById('boardrs485').checked) {

      doc("0").style.display="none";

      doc("1").style.display="none";

      doc("3").style.display="none";

      doc("4").style.display="none";

      document.getElementById("2").style.display="block";

     

         

    }



     if (document.getElementById('boardutoc').checked) {

      doc("0").style.display="none";

      doc("1").style.display="none";

      doc("2").style.display="none";

      doc("4").style.display="none";

      document.getElementById("3").style.display="block";

     

         

    }



     if (document.getElementById('boardu2c').checked) {

      doc("0").style.display="none";

      doc("1").style.display="none";

      doc("2").style.display="none";

      doc("3").style.display="none";

      document.getElementById("4").style.display="block";

      

         

    }



    

}



function checktoolhead() {

var doc = document.getElementById.bind(document);



  if (document.getElementById('tbhuvud').checked) {

    doc("6").style.display="none";

    doc("7").style.display="none";

    doc("8").style.display="none";

    doc("9").style.display="none";

    doc("10").style.display="none";

    document.getElementById("5").style.display="block";

         

  }

  

   if (document.getElementById('tbshtxx').checked) {

    doc("5").style.display="none";

    doc("7").style.display="none";

    doc("8").style.display="none";

    doc("9").style.display="none";

    doc("10").style.display="none";

    document.getElementById("6").style.display="block";

       

  }



   if (document.getElementById('tbsht36v2').checked) {

    doc("6").style.display="none";

    doc("5").style.display="none";

    doc("8").style.display="none";

    doc("9").style.display="none";

    doc("10").style.display="none";

    document.getElementById("7").style.display="block";

       

  }



   if (document.getElementById('tbebb10').checked) {

    doc("6").style.display="none";

    doc("7").style.display="none";

    doc("5").style.display="none";

    doc("9").style.display="none";

    doc("10").style.display="none";

    document.getElementById("8").style.display="block";

       

  }



   if (document.getElementById('tbebb11').checked) {

    doc("6").style.display="none";

    doc("7").style.display="none";

    doc("8").style.display="none";

    doc("5").style.display="none";

    doc("10").style.display="none";

    document.getElementById("9").style.display="block";

       

  }

  if (document.getElementById('tbebb12').checked) {

    doc("6").style.display="none";

    doc("7").style.display="none";

    doc("8").style.display="none";

    doc("9").style.display="none";

    doc("5").style.display="none";

    document.getElementById("10").style.display="block";

       

  }



}





function moveon() {

 

  var x = document.getElementById(currentone);

  var y = document.getElementById(newone);

  x.style.display = "none";

  y.style.display = "block";



  currentone++

  newone++

  

   if (document.getElementById("6").style.display == "block") {

    document.getElementById("button-next").style.display = "none";

  

  }

  

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

    

  x.style.display = "none"; //disable old page

  y.style.display = "block"; //enable new page





 

  document.getElementById("button-next").style.display = "block"; //remove progress from bar

  currentone--; //-1 the currentone variable for current page

  newone--; // -1 the newone variable for new page

  document.documentElement.scrollTop = 0;

}



function testfunction(className) {

  const elements = document.getElementsByClassName(className);

  console.log(elements);

  for (const e of elements) {

    e.style.display = e.style.display === 'none' ? 'block' : 'none';

  }

}
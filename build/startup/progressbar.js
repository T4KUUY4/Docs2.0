const progressBar = document.getElementById("progress-bar");
const progressNext = document.getElementById("button-next");
const progressPrev = document.getElementById("button-prev");
const steps = document.querySelectorAll(".step");
let active = 1;






const updateProgress = () => {
  steps.forEach((step, i) => {
    if (i < active) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  progressBar.style.width = ((active - 1) / (steps.length - 1)) * 100 + "%";
  if (active === 1) {
    progressPrev.disabled = true;
  } else if (active === steps.length) {
    progressNext.disabled = true;
  } else {
    progressPrev.disabled = false;
    progressNext.disabled = false;
  }
};

progressNext.addEventListener("click", testscript());

function testscript() {
    console.log("test");
}

progressNext.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
});

progressPrev.addEventListener("click", () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
}); 






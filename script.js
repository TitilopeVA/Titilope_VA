// vision dropdown code

const sectionVision = document.getElementById("vision");
const buttonVision = document.getElementById("visionButton")

sectionVision.style.display = "none";


document.getElementById("visionButton").addEventListener("click", function(){
  
  if (sectionVision.style.display === "none") {
    sectionVision.style.display = "block";
    buttonVision.innerHTML = "&#8659; My Vision";

  }else {
    sectionVision.style.display = "none";
    buttonVision.innerHTML = "&#8658; My Vision";

  }
  
});

// end of vision dropdown code

//mission dropdown code

const section = document.getElementById("mission");
const buttonMission = document.getElementById("missionButton")

section.style.display = "none";

document.getElementById("missionButton").addEventListener("click", function(){
  
  if (section.style.display === "none") {
    section.style.display = "block";
    buttonMission.innerHTML = "&#8659; My Mission";

  }else {
    section.style.display = "none";
    missionButton.innerHTML = "&#8658; My Mission";
  }
  
});

// end of mission dropdown code

//Goal dropdown code

const sectionGoal = document.getElementById("goal");
const buttonGoal = document.getElementById("goalButton")
sectionGoal.style.display = "none";

document.getElementById("goalButton").addEventListener("click", function(){
  
  if (sectionGoal.style.display === "none") {
    
    sectionGoal.style.display = "block";
    buttonGoal.innerHTML = "&#8659; My Goal";

  }else {
    
    sectionGoal.style.display = "none";
    buttonGoal.innerHTML = "&#8658; My Goal";

  }
  
});

// End Goal dropdown code
function nav_open() {
    document.querySelector("#nav1").style.display = "block";
  }

  function nav_close() {
    document.querySelector("#nav1").style.display = "none";
  }

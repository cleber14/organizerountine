// Variables
//Task Setters
let elipseOutlines = document.querySelectorAll(".ellipseOutline");
let checkMarks = document.querySelectorAll(".checkmarkCircleOutline");

let addCircle = document.querySelector(".addCircle");
let containerAddEvent = document.querySelector(".containerAddEvent");

let submit = document.querySelector(".submit");
let textNameAddedTask = document.querySelector(".textNameAddedTask");

// Functions
// Add Task
addCircle.addEventListener("click", function(){
    containerAddEvent.style.display = "block";
});

// Submit
submit.addEventListener("click", function(){
    let taskName = document.querySelector(".textTask").value;
    textNameAddedTask.textContent = taskName;
});

// Checkbox
elipseOutlines.forEach((elipseOutline, index) => {
    elipseOutline.addEventListener("click", function(){
        elipseOutline.style.display = "none";
        checkMarks[index].style.display = "block";

        // Play completed task sound
        let completedTaskSound = new Audio('./soundEffect/completedTask.m4a');
        completedTaskSound.play();
    });
});

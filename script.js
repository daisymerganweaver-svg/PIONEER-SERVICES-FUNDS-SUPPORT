let currentStep = 0;

const steps = document.querySelectorAll(".step");

function showStep(index){
    steps.forEach(step => {
        step.classList.remove("active");
    });

    steps[index].classList.add("active");
}

function nextStep(){
    currentStep++;

    if(currentStep < steps.length){
        showStep(currentStep);
    }
}

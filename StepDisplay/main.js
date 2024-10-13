var actualStep = 0;

var percentageMap = new Map();
percentageMap.set(0, "15%")
percentageMap.set(1, "50%")
percentageMap.set(2, "85%")

var stepsElements = document.getElementsByClassName("step");

function nextStep(){
    if (actualStep >= 3) return;

    stepsElements[actualStep].classList.remove("active")
    stepsElements[actualStep].classList.add("complete")
    actualStep += 1;
    stepsElements[actualStep].classList.add("active")

    increaseBar(percentageMap.get(actualStep));
}

function prevStep(){
    if (actualStep <= 0) return;
    
    stepsElements[actualStep].classList.remove("active")
    stepsElements[actualStep].classList.remove("complete")
    actualStep -= 1;
    stepsElements[actualStep].classList.add("active")

    increaseBar(percentageMap.get(actualStep));
}

function increaseBar(percentage){
    document.getElementById("display").style.setProperty("--percentage", percentage);
}

document.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowRight"){
        nextStep();
        return;
    }

    if(e.key === "ArrowLeft"){
        prevStep();
        return;
    }
})
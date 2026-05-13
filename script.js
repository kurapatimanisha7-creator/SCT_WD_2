let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay(){

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("display").innerHTML =
        `${h} : ${m} : ${s}`;
}

function stopwatch(){

    seconds++;

    if(seconds == 60){
        seconds = 0;
        minutes++;
    }

    if(minutes == 60){
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

function startTimer(){

    if(timer !== null){
        clearInterval(timer);
    }

    timer = setInterval(stopwatch,1000);
}

function pauseTimer(){
    clearInterval(timer);
}

function resetTimer(){

    clearInterval(timer);

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    document.getElementById("lapsList").innerHTML = "";
}

function lapTime(){

    let lap = document.createElement("li");

    lap.innerText =
        document.getElementById("display").innerText;

    document.getElementById("lapsList").appendChild(lap);
}
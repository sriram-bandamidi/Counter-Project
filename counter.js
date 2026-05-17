let counterElement = document.getElementById("counterValue")


function onIncrement() {
    let previousCountervalue = counterElement.textContent;
    let updatedCountervalue = parseInt(previousCountervalue) + 1;
    counterElement.textContent = updatedCountervalue;
    if (updatedCountervalue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCountervalue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
}

function onDecrement() {
    let previousCountervalue = counterElement.textContent;
    let updatedCountervalue = parseInt(previousCountervalue) - 1;
    counterElement.textContent = updatedCountervalue;

    if (updatedCountervalue > 0) {
        counterElement.style.color = "green";
    } else if (updatedCountervalue < 0) {
        counterElement.style.color = "red";
    } else {
        counterElement.style.color = "black";
    }
}

function onReset() {
    let updatedCountervalue = 0;
    counterElement.textContent = updatedCountervalue;
    counterElement.style.color = "black";

}
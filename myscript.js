var secs = 75

$("#startClock").on("click", function() {
    var element = document.getElementById ("clock");
    element.innerHTML = "Time:" +secs;
    if (secs < 1) {
        clearTimeout(timer);
        element.innerHTML = "Test Complete";
    }

    secs--;
    var timer = setTimeout ('countDown('+secs+',"'+clock+'")', 1000);
})
let timeNow = Date.now();

//Set an update on how many seconds you're on the page, update every 1 second
const x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = now - timeNow;
  
    // Time calculations for days, hours, minutes and seconds
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("time").innerHTML = seconds + " seconds";
  
  }, 1000);

//Reset countdown on click
const timeElement = document.getElementById("time");


timeElement.addEventListener("hover", function() {
    timeElement.style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";
})

timeElement.addEventListener("click", function() {
    timeNow = Date.now();
    window.alert("Time updated")});
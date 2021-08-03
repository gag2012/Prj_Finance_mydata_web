var slider = document.getElementById("recov_rate");
var output = document.getElementById("recov_demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider2 = document.getElementById("death_rate");
var output2 = document.getElementById("death_demo");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}
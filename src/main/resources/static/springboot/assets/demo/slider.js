var recov_slider = document.getElementById("recov_rate");
var recov_output = document.getElementById("recov_demo");
var death_slider = document.getElementById("death_rate");
var death_output = document.getElementById("death_demo");

recov_output.innerHTML = recov_slider.value;
death_output.innerHTML = death_slider.value;

recov_slider.oninput = function() {
  recov_output.innerHTML = this.value;
}

death_slider.oninput = function() {
  death_output.innerHTML = this.value;
}
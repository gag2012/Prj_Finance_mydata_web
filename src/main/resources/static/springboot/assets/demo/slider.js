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

var slider3 = document.getElementById("gamma_rate");
var output3 = document.getElementById("gamma_demo");
output3.innerHTML = slider3.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

var slider4 = document.getElementById("beta_rate");
var output4 = document.getElementById("beta_demo");
output4.innerHTML = slider4.value;

slider4.oninput = function() {
  output4.innerHTML = this.value;
}

var slider5 = document.getElementById("population_rate");
var output5 = document.getElementById("population_demo");
output5.innerHTML = slider5.value;

slider5.oninput = function() {
  output5.innerHTML = this.value;
}
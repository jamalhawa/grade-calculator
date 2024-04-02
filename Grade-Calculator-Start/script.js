// CS10 Grade Calculator
//input
document.getElementById("button").addEventListener("click", calculate);

//function
function calculate() {
  var value1 = +document.getElementById("value1").value;
  var value2 = +document.getElementById("value2").value;
  var value3 = +document.getElementById("value3").value;
  var value4 = +document.getElementById("value4").value;
  var value5 = +document.getElementById("value5").value;
  //processing
  var output = Math.round((value1 + value2 + value3 + value4 + value5) / 5);

  //output
  document.getElementById("output").innerHTML = output;
}

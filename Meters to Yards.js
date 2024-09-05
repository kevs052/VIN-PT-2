// metersToYards.js
function metersToYards(meters) {
  let yards = meters * 1.0936133;
  return yards.toFixed(2);
}
function clearInput(){
  document.getElementById("meters").value = "";
  document.getElementById("result").innerHTML = "";
}

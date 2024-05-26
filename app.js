var results = document.getElementById("result");
function getNumber(num) {
  results.value += num;
}
function clearResult() {
  results.value = "";
}
function remove() {
  results.value = results.value.substring(0, results.value.length - 1);
}
function getResult() {
  var result = document.getElementById("result");
  result.value = eval(result.value);
}

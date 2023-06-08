var x = 1;
function myfunqtion() {
  document.write(x++ + "<br>");
  if (x > 20) {
    clearTimeout(myVar);
  }
}
var myVar = setInterval(myfunqtion, 2000);

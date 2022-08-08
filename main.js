var button = document.getElementById("out"),
  count = 0;
var schet = document.getElementById("plus");
var schetix = document.getElementById("plusx10");
schet.onclick = function() {
  count += 1;
  button.innerHTML =  count;
};
schetix.onclick = function() {
  count += 10;
  button.innerHTML =  count;
};

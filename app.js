function sup() {
  var exp = document.calc.textview.value;
  document.calc.textview.value = exp.substring(0, exp.length - 1);
  console.log("sdfsdf");
}

function clr() {
  document.calc.textview.value = "";
}

function sqrt() {
  document.calc.textview.value = Math.sqrt(document.calc.textview.value);
}

function insert(item) {
  document.calc.textview.value += item;
}
function equal() {
  document.calc.textview.value = eval(document.calc.textview.value);
}

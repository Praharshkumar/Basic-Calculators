function appendValue(value) {
  const display = document.getElementById("display");
  if (display.value === "0" || display.value === "Error") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function resetCalc() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (err) {
    display.value = "Error";
  }
}

let display = document.getElementById("result");

// Append character to the display
function appendCharacter(character) {
  display.value += character;
}

// Clear the display
function clearDisplay() {
  display.value = "";
}

// Delete the last character from the display
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Perform the calculation
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

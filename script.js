function convertTemp() {
  let input = document.getElementById("tempInput").value;
  let from = document.getElementById("fromUnit").value;
  let to = document.getElementById("toUnit").value;
  let result = document.getElementById("result");

  if (input === "") {
    result.innerText = "Please enter a value!";
    return;
  }

  let temp = parseFloat(input);

  // Convert to Celsius first
  let celsius;

  if (from === "C") {
    celsius = temp;
  } else if (from === "F") {
    celsius = (temp - 32) * 5 / 9;
  } else if (from === "K") {
    celsius = temp - 273.15;
  }

  // Convert from Celsius to target unit
  let finalTemp;

  if (to === "C") {
    finalTemp = celsius;
  } else if (to === "F") {
    finalTemp = (celsius * 9 / 5) + 32;
  } else if (to === "K") {
    finalTemp = celsius + 273.15;
  }

  result.innerText = `Converted: ${finalTemp.toFixed(2)} °${to}`;
}
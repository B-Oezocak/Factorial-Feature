const Calculate = {
  
}

Calculate.factorial = (inputNumber) => {
  if (typeof inputNumber === "undefined") {
    return "No input given.";
  }

  if (inputNumber instanceof Object) {
    return "Invalid input type. Expected a number.";
  }

  if (typeof inputNumber !== "number") {
    return "Invalid input type. Expected a number.";
  }

  let factorial = 1;
  for (let counter = 1; counter < (inputNumber+1); counter++) {
    //factorial = factorial * counter;
    factorial *= counter;
  }
  return factorial;
}

module.exports = Calculate;

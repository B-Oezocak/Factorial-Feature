const Calculate = {
  
}

let number = 0;

Calculate.factorial = (inputNumber) => {
  let factorial = 1;
  for (let counter = 1; counter < (inputNumber+1); counter++) {
    //factorial = factorial * counter;
    factorial *= counter;
  }
  return factorial;
}

module.exports = Calculate;

//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
  const outputDiv = document.getElementById('output');
  const inputNumber = parseFloat(document.getElementById('ip').value);

  // Function to create a promise that resolves after a given time
  function delayPromise(value, time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, time);
    });
  }

  // Start the promise chain
  delayPromise(inputNumber, 2000)
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayPromise(result * 2, 1000); // Multiply by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayPromise(result - 3, 1000); // Subtract 3
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayPromise(result / 2, 1000); // Divide by 2
    })
    .then((result) => {
      outputDiv.textContent = `Result: ${result}`;
      return delayPromise(result + 10, 1000); // Add 10
    })
    .then((finalResult) => {
      outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error}`;
    });
});

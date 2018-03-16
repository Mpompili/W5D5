const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


// reader.question("What is your name?", function (answer) {
//   console.log(`Hello ${answer}!`);
// });

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0 ) {
    reader.question("Enter a number: ", function (response) {
      let num = parseInt(response);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    return;
  }
}

function callback (sum) {
  console.log(`All done! Total Sum: ${sum}`);
  reader.close();
}

addNumbers(0, 3, callback);

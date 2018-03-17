const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.

  reader.question(`is ${el1} > ${el2}?: `, function (res){
    console.log('hello');
    if (res === "yes"){
      console.log(`this is callback: ${callback} yes `);
      return callback(true);

    }else{
      console.log(`this is callback: ${callback} no `);
      return callback(false);

    }
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  if (i < arr.length - 1) {
    console.log(arr);
    askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan) {

      if (isGreaterThan) {
        let x = arr[i + 1];
        let y = arr[i];
        arr[i] = x;
        arr[i + 1] = y;
        innerBubbleSortLoop(arr, i + 1, true, outerBubbleSortLoop(true));
      } else {
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      }
    });
  }

  if (i === arr.length - 1) {
    console.log(`innerBubbleSortLoop last if statement: ${madeAnySwaps}`);
    outerBubbleSortLoop(madeAnySwaps);
  }

  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}
//
// innerBubbleSortLoop([1,4, 2, 3, 5], 0, false, function(madeAnySwaps){
//   console.log('in outer bubble');
//   console.log(`made any swaps is ${madeAnySwaps}`);
// });

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    // console.log(madeAnySwaps);
    console.log(`${madeAnySwaps} asdfasdf`);
    if (madeAnySwaps === true) {
      console.log('--------------');

      innerBubbleSortLoop(arr, 0, true, outerBubbleSortLoop(madeAnySwaps));
    } else {
      console.log('didnt switch letter');
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop(madeAnySwaps));
          // sortCompletionCallback(arr);
      return;
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
    }

  }

  outerBubbleSortLoop(true);
}


absurdBubbleSort([3, 2, 1], function (arr) {
  console.log(`${this} ::::`);
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

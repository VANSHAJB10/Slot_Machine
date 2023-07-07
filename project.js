// 1. Despot some money
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again


const prompt = require ("prompt-sync")();                                                   // to store user input 

const ROWS = 3;                                         // global vars that are const are written in all-caps just as a practice
const COLS = 3;

/*
Heirarchy of keeping different objects
1. imports
2. global var should be at the Top 
3. classes and functions
4. main line or other aspects of program
  
*/



// defining symbols 
  /*OBJECT is Js*/
const SYMBOLS_COUNT = {         // we will rondom selection from these total number of symbols to be present in a column when a spin is performend
    "A" : 2,        // here "A" is key/property/attributes of object named- SYMBOLS_COUNT associated with a value = '2'
    "B" : 4,
    "C" : 6,
    "D" : 8
}

// SYMBOLS_COUNT["A"]    --> gives the value associated with A which is 2

const SYMBOL_VALUES={       // the bet amount will be multiplied with this multiplier if all the three columns of a row are identical 
    "A" : 5, 
    "B" : 4,
    "C" : 3,
    "D" : 2
}



const deposit = () => {
  while (true) {                                                                 // loop keeps on repeating till the user enters a valid amount
    const depositAmount = prompt("Enter a deposit amount: ");                               // asking user by printing this
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;                                                // once valid amount is entered--> the value us returned and the loop ends
    }
  }
};

const getNumberOfLines = () => {
  while (true) {                                                                 // loop keeps on repeating till the user enters a valid amount
    const lines = prompt("Enter the number of lines to bet on (1-3): ");                               // asking user by printing this
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines >3) {              // numberOfLines should be 1,2 or 3
      console.log("Invalid input, try again.");
    } else {
      return numberOfLines;                                                // once valid amount is entered--> the value us returned and the loop ends
    }
  }
};

const getBet = (balance, lines) => {                                            // balance is the total amount on which bet can be made  // bet is multiplied by no of lines
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {       // FOCUS on --> numberBet > balance / lines
      console.log("Invalid bet, try again.");
    } else {
      return numberBet;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
   const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};



let balance = deposit();                                  // let -- a varibale that can be modified
const numberOfLines = getNumberOfLines();                 // const -- a varibale that can't be modified
const bet = getBet(balance, numberOfLines);

// 1. Despot some money
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. Play again


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

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
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



const depositAmount = deposit();
const numberOfLines = getNumberOfLines();

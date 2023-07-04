// 1. Despot some money
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again


const deposit = () => {
  while (true) {                                                                 // loop keeps on repeating till user enters a valid amount
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
  while (true) {                                                                 // loop keeps on repeating till user enters a valid amount
    const lines = prompt("Enter the number of lines to bet on (1-3): ");                               // asking user by printing this
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0) {
      console.log("Invalid input, try again.");
    } else {
      return numberOfLines;                                                // once valid amount is entered--> the value us returned and the loop ends
    }
  }
};

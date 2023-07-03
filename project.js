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

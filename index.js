// helpers.js (Assuming this file is required in your test)

// Function that creates an array of thank you messages
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Function that counts down from a given number to zero and logs each number
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Export functions for testing
  module.exports = {
    writeCards,
    countDown
  };
  

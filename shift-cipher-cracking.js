
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const arrayOfAlphabets = Array.from(alphabets);

const ciphersText = "ZWPFLYRMVJLTTVJJWLCCPUVTIPGKVUKYZJDVJJ RXVLJZEXRSILKVWFITVRKKRTBKYVEKIPUVTIPGKZEX ZKLJZEXRWIVHLVETPRERCPJZJRKKRTBZEJKVRU";
const arrayOfCiphersText = Array.from(ciphersText);

// JS (%) operator only calcualte reaminder values, customzed this method to return actual modulo values.
Number.prototype.mod = function (n) {
  "use strict";
  return ((this % n) + n) % n;
};

const KEY = 25;
// This for loop to decypte all possible text using brute force mechanism
for (var k = 0; KEY >= k; k++) {
  var decyptedText = [];
  for (var i = 0; arrayOfCiphersText.length > i; i++) {
    // this if condition to ignore space char in the cipher text
    if (/\s/.test(arrayOfCiphersText[i])) {
      decyptedText.push(' ');
      continue;
    }
    // Mathematical formula to to decrypte shift chiper, Decypted Char (X) = (X - N) mod 26
    var alphabetIndex = arrayOfAlphabets.indexOf(arrayOfCiphersText[i]);
    var decryptedIndex = (alphabetIndex - k);
    var mode = decryptedIndex.mod(26);

    decyptedText.push(arrayOfAlphabets[mode]);
  }
  console.log("Decrypted message: KEY ("+k+") " + decyptedText.join('') + "\n\n");
}


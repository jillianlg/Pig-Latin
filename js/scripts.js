// Business Interface
function pigLatin(userInput) {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = ["b", "c", "d", "f", "g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
  let arrayInput = userInput.split("");
  if (userInput === "" || userInput <=0) {
      alert("Please enter a sentence"); 

    } else if (vowels.includes(userInput.charAt(0))) {
      $("#finalWord").text(userInput+"way");
    
    } else if (consonants.includes(userInput.charAt(0))) {
      let firstLetterRemoved = arrayInput.slice(1);
      let removedLetter = userInput.charAt(0);
      //array is logging as type Of function
      let array = [];
      array.push(firstLetterRemoved);
      array.push(removedLetter);
      array.push("ay");
      $("#finalWord").text(array);

        
    // } else if {
    } else {
      alert("not");
    }
  }
// User Interface

$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#userInput").val();
    pigLatin(userInput);
  });
});


// Behavior Order:

// Describe: `pigLatin()`
// Test: The program will add 'way' to the end of words that begin with a vowel.
// Expect(pigLatin("apple")).toEqual("appleway");

// Test: The program will find words that begin with one or more consonants and move all of the first consecutive consonants to end of the word before adding 'ay' to the end.
// Expect(pigLatin("people")).toEqual("eoplepay");

// Test: The program will find words that begin with 'qu' and move the 'u' and the 'q' to the end before adding 'ay' to the end.
// Expect(pigLatin("queen")).toEqual("eenquay")'


// Test: The program will find words that begin with 'y' and treat it as a consonant before adding 'ay' to the end.
// Expect(pigLatin("yellow")).toEqual("ellowyay");


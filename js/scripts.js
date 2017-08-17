// Back-end logic
function replaceVowels(userSentence) {
  // var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].split("");
  for (var index = 0; index<userSentence.length; index++)
  {
    // console.log(typeof(index));
    if (userSentence[index] === "a" || userSentence[index] === "e" || userSentence[index] === "i" || userSentence[index] === "o" || userSentence[index] === "u" || userSentence[index] === "A" || userSentence[index] === "E" || userSentence[index] === "I" || userSentence[index] === "O" || userSentence[index] === "U") {
      userSentence[index] = "-";
      
    }
  }
  return userSentence;
}

// Front-end
$(document).ready(function() {
  $("#userInfo").submit(function(event) {
    event.preventDefault();

    // Store user input
    var sentence = $("#userInput").val();
    var sentenceString = sentence.toString();
    // Test  
    // console.log(typeof(sentenceString));

    // Turn user input from string to array
    var sentenceWords = sentenceString.split("");
    // console.log(sentenceWords);

    // Test
    // console.log(replaceVowels(sentenceWords));
    // $("#newSentence").text(result);

    // Display new sentence
    var result = replaceVowels(sentenceWords).join("");
    alert(result);
    $("#newSentence").text(result);

    // Hide use input
     // $("#userInfo").reset();
  });
});

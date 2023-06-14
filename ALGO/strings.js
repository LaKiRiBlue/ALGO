function concatenateStrings(string1, string2) {
    return string1 + " " + string2
  }
  
  let input1 = prompt("Write a string")
  let input2 = prompt("Write another string")
  
  let sentence = concatenateStrings(input1, input2)
  
  console.log(sentence)
  
  //II - lowercase
  //Write a function which receives a character in uppercase and prints it in lowercase.
  
  function lowerCaseTransform(string) {
    return string.toLowerCase()
  }
  let input3 = prompt("write an uppercase character")
  let lowerCaseCharacter = lowerCaseTransform(input3)
  
  console.log(lowerCaseCharacter)
  
  //III - uppercase
  //Write a function which receives a string in lowercase and returns an uppercase sentence.
  
  function upperCaseTransform(string) {
    return string.toUpperCase()
  }
  let input4 = prompt("write an uppercase character")
  let upperCaseCharacter = upperCaseTransform(input4)
  
  console.log(upperCaseCharacter)
  
  //IV - convert name
  //Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe"
  
  function swapName(name) {
      let parts = name.split(", ");
      return parts[1] + " " + parts[0];
  }
  
  let input5 = "Doe, John";
  let swappedName = swapName(input5);
  
  console.log(swappedName);
  
  //V - whitespace
  //Write a function which receives a sentence full of whitespace and returns it without them.
  
  function trimWhitespaces(sentence){
      let parts = sentence.split(' ');
      return parts.join('');
  }
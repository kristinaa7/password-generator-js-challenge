// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //calling the generatePassword function
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//defining the variables
var lowercasearray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercasearray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericarray = [0,1,2,3,4,5,6,7,8,9];
var specialCharactersarray = ['!','#','?','$','*','&','@','%','^'];
var choicesarray = []

function generatePassword() {
  alert('Hello!👋 Please answer the following questions to generate a secure password.');

  var x = prompt("How many characters would you like your password to have?");
  if (x >= 8 && x <= 128) {
  alert('You have chosen an appropriate amount of characters.');
    } else {
    alert('Please try again. You must have at least 8 and no more than 128 characters to create a password using the generator.');
    }

  let lowercase = confirm("Would you like your password to include lowercase?");
  if (lowercase==true)
    {
  choicesarray = choicesarray.concat(lowercasearray);
  console.log(choicesarray);
    }
  let uppercase = confirm("Would you like your password to include uppercase?");
  if (uppercase==true)
  console.log(choicesarray)
    {
  choicesarray = choicesarray.concat(uppercasearray);
  console.log(choicesarray);
    }
  let numeric = confirm("Would you like your password to include numeric?");
  if (numeric==true)
    {
  choicesarray = choicesarray.concat(numericarray);
  console.log(choicesarray);
    }
  let specialCharacters = confirm("Would you like your password to include special characters?");
  if (specialCharacters==true)
    {
  choicesarray = choicesarray.concat(specialCharactersarray);
  console.log(choicesarray);
    }

  var finalarray = []

  for (let index = 0; index < x; index++) {
    var random = Math.floor(Math.random() * choicesarray.length);
    //randomly choose a character from choicesarray and push it to finalarray
  finalarray.push(choicesarray[random]);
  console.log(finalarray)
  }

  //check finalarray to verify the all character types are included using contains/includes the chosen arrays//

  //join turns an array into a string
return finalarray.join('')

  }

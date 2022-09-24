
var generateBtn = document.querySelector("#generate");


var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var specialChar = ['!','@','#','*', '&', '$','%']

var passwordOptions= []


// Assignment Code




// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}




function generatePassword(){
  
  passwordLength = parseInt(prompt("How many characters you want yor password to have? Min of 8 and max of 128 "));

  if (isNaN(passwordLength)){
    window.alert("Please enter a number")
    return false;
  }

  if (passwordLength <8 || passwordLength > 128){
    window.alert("Password length must be between 8 and 128")
    return false;
  }

if (window.confirm("Would you like lowercase in your password?")){
  passwordOptions = passwordOptions.concat(lowerCase);
}
if (window.confirm("Would you like upperCase in your password?")){
  passwordOptions = passwordOptions.concat(upperCase);
}

if (window.confirm("Would you like number in your password?")){
  passwordOptions = passwordOptions.concat(numbers);
} 

if (window.confirm("Would you like special characters in your password?")){
  passwordOptions = passwordOptions.concat(specialChar);
} 
if (passwordOptions.length === 0){
  passwordLength = passwordLength.concat(numbers)
}

console.log(passwordOptions)

// to generate the password
  var password = "";
  
  for (var i = 0; i < passwordLength; i++) {
    password = password + passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    console.log(password)
  }
  return password
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

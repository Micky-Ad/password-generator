// Assignment Code

var generateBtn = document.querySelector("#generate");
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var specialChar = ['!','@','#','*', '&', '$','%']

var passWordOptions = []


function generatePassword() {

  var passWordLength = parseInt(prompt("How many characters you want yor password to have? Min of 8 and max of 128 "));

  if (isNaN(passWordLength)){
    window.alert("Please enter a number")
    return
  }

  if (passWordLength <8 || passWordLength > 128){
    window.alert("Password length must be between 8 and 128")
    return
  }


if (confirm("Would you like lowercase in your password?")){
  passWordOptions.push(lowerCase)
}
if (confirm("Would you like upperCase in your password?")){
  passWordOptions.push(upperCase)

}if (confirm("Would you like number in your password?")){
  passWordOptions.push(numbers)

}if (confirm("Would you like special characters in your password?")){
  passWordOptions.push(specialChar)
}
 
  var newPassword = "";

  for (var i=0; i < passWordLength; i++)
// var randomPassWord = math.floor(Math.random() * passWordOptions.length-1); 
newPassword += randomPassWord
console.log(passWordOptions)
}





// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
password += newPassword
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

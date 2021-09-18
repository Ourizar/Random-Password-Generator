//Alert prompt and confirm prompt are very important
//hint for special characters
var allCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
var noCaps = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numb = ["0","1","2","3","4","5,","6", "7","8","9"]
var specChar = ["!", "@", "#", "$", "%", "^","&","*","(",")","-","=","{","}"]
var everything =[];

// Assignment Code
var generateBtn = document.querySelector("#generate");
//Condition questions
var howLong = "How many characters do you want your password to be?";
var specQ = "Do you want to include special characters?";
var numQ = "Do you want to include number?";
var upCaseQ = "Do you want to use capital letters?";
 
//Psuedo Code Comments
// 1. "Prompt the user for the password criteria"
    //   a.Password Length between 8 -128 characters
    //   "b. Lowercase, Uppercase, numbers, special characters"
    // 2. "Validate the Input"
    // 3. "Generate password"
    // 4. "Display the password on the page"

        // userchoice = window.confirm("Do you want to include special characters?");
      // console.log(userchoice);
      // userchoice = window.confirm("Do you want to include numbers?");
      // console.log(userchoice);
      // userchoice = window.confirm("Do you want to include upper case letters?");
function generatePassword(){
  console.log("You clicked the button");
   

var userchoice = window.prompt(howLong)

console.log(userchoice);
    // console.log("condition",userchoice >= 8 || userchoice <= 128)
    if (userchoice < 8 || userchoice > 128) {
      console.log(userchoice);
      console.log(userchoice);
      window.alert("Please choose a number between 8 and 128 characters.");
      return "Please start over. Click Generate Password.";
    }     
      // userchoice = window.prompt ("How many characters do you want your password to be?");

var special = window.confirm(specQ);
var number = window.confirm(numQ);
var uppercase = window.confirm(upCaseQ);

    if(special && number && uppercase){
    var combinedArray = everything.concat(specChar, numb, caps);
    console.log(combinedArray.toString());
    var noComma = combinedArray.toString();
    console.log('replace comma please',noComma.replace(/,/g, ''));

    var result           = '';
    var characters       = noComma.replace(/,/g, '');
    var charactersLength = characters.length;
    for ( var i = 0; i < userchoice; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
  charactersLength));
   }
  
   return result;

    }

    if(special && number && !uppercase){
      var combinedArray = everything.concat(specChar, numb);
      console.log(combinedArray.toString());
      var noComma = combinedArray.toString();
      console.log('replace comma please',noComma.replace(/,/g, ''));
  
      var result           = '';
      var characters       = noComma.replace(/,/g, '');
      var charactersLength = characters.length;
      for ( var i = 0; i < userchoice; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
     }
    
     return result;
  
      }

      if(special && !number && uppercase){
        var combinedArray = everything.concat(specChar, caps);
        console.log(combinedArray.toString());
        var noComma = combinedArray.toString();
        console.log('replace comma please',noComma.replace(/,/g, ''));
    
        var result           = '';
        var characters       = noComma.replace(/,/g, '');
        var charactersLength = characters.length;
        for ( var i = 0; i < userchoice; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
       }
      
       return result;
    
      }
    
      if(special && !number && !uppercase){
        var combinedArray = everything.concat(specChar);
        console.log(combinedArray.toString());
        var noComma = combinedArray.toString();
        console.log('replace comma please',noComma.replace(/,/g, ''));
    
        var result           = '';
        var characters       = noComma.replace(/,/g, '');
        var charactersLength = characters.length;
        for ( var i = 0; i < userchoice; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
       }
      
       return result;
    
      }      

      if(!special && number && uppercase){
        var combinedArray = everything.concat(numb, caps);
        console.log(combinedArray.toString());
        var noComma = combinedArray.toString();
        console.log('replace comma please',noComma.replace(/,/g, ''));
    
        var result           = '';
        var characters       = noComma.replace(/,/g, '');
        var charactersLength = characters.length;
        for ( var i = 0; i < userchoice; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
       }
      
       return result;
    
      }   
      
      if(!special && number && !uppercase){
        var combinedArray = everything.concat(numb);
        console.log(combinedArray.toString());
        var noComma = combinedArray.toString();
        console.log('replace comma please',noComma.replace(/,/g, ''));
    
        var result           = '';
        var characters       = noComma.replace(/,/g, '');
        var charactersLength = characters.length;
        for ( var i = 0; i < userchoice; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
       }
      
       return result;
    
      }         

      if(!special && !number && uppercase){
        var combinedArray = everything.concat(numb);
        console.log(combinedArray.toString());
        var noComma = combinedArray.toString();
        console.log('replace comma please',noComma.replace(/,/g, ''));
    
        var result           = '';
        var characters       = noComma.replace(/,/g, '');
        var charactersLength = characters.length;
        for ( var i = 0; i < userchoice; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
       }
      
       return result;
    
      } 

      if(!special && !number && !uppercase){
        var combinedArray = everything.concat(noCaps);
        console.log(noCaps);
        console.log(combinedArray.toString());
        var noComma = combinedArray.toString();
        console.log('replace comma please',noComma.replace(/,/g, ''));
    
        var result           = '';
        var characters       = noComma.replace(/,/g, '');
        var charactersLength = characters.length;
        for ( var i = 0; i < userchoice; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
       }
      
       return result;
    
      }      
  } 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
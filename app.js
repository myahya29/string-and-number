

// 1 lowercase name
function lowercase(name){
  return name.toLowerCase();
}

// 2 uppercase shouting
function shout(word){
  return word.toUpperCase();
}

// 3 count characters
function countChar(str){
  return str.length;
}

// 4 first character
function firstChar(str){
  return str.charAt(0);
}

// 5 last character
function lastChar(str){
  return str.charAt(str.length-1);
}

// 6 find apple position
function findApple(line){
  return line.indexOf("apple");
}

// 7 first word
function firstWord(line){
  return line.slice(0, line.indexOf(" "));
}

// 8 replace bad with good
function replaceBad(line){
  return line.replace("bad","good");
}

// 9 replace vowels
function removeVowels(str){
  return str.replaceAll("a","*")
            .replaceAll("e","*")
            .replaceAll("i","*")
            .replaceAll("o","*")
            .replaceAll("u","*");
}

// 10 split sentence
function splitLine(line){
  return line.split(" ");
}

// 11 capitalize word
function capitalize(word){
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// 12 second word
function secondWord(line){
  return line.split(" ")[1];
}

// 13 censor dumb
function censor(line){
  return line.replaceAll("dumb","****");
}

// 14 count words
function wordCount(line){
  return line.split(" ").length;
}

// 15 check cat
function checkCat(line){
  if(line.indexOf("cat")!=-1)
    return true;
  else
    return false;
}

// 16 email domain
function domain(email){
  return email.slice(email.indexOf("@")+1);
}

// 17 reverse sentence
function reverseSentence(line){
  return line.split(" ").reverse().join(" ");
}

// 18 palindrome
function palindrome(word){
  let rev = word.split("").reverse().join("");
  if(word.toLowerCase()==rev.toLowerCase())
    return true;
  else
    return false;
}

// 19 count vowels
function vowelCount(str){
  let c=0;
  for(let i=0;i<str.length;i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u")
      c++;
  }
  return c;
}

// 20 alternate case
function alternate(str){
  let result="";
  for(let i=0;i<str.length;i++){
    if(i%2==0)
      result+=str[i].toUpperCase();
    else
      result+=str[i].toLowerCase();
  }
  return result;
}



// NUMBERS PROBLEMS
// JavaScript Number Questions


// 1. Round a Number
function roundNum(){
  return Math.round(4.7);
}

// 2. Ceil a Decimal
function ceilNum(){
  return Math.ceil(5.3);
}

// 3. Floor a Decimal
function floorNum(){
  return Math.floor(8.9);
}

// 4. Random number (0–1)
function random01(){
  return Math.random();
}

// 5. Random integer (0–9)
function random0to9(){
  return Math.floor(Math.random() * 10);
}

// 6. Random integer (1–100)
function random1to100(){
  return Math.floor(Math.random() * 100) + 1;
}

// 7. String to Integer
function stringToInt(){
  return parseInt("42");
}

// 8. String to Float
function stringToFloat(){
  return parseFloat("3.14159");
}

// 9. Round User Input
function roundInput(num){
  return Math.round(num);
}

// 10. Dice Simulator (1–6)
function dice(){
  return Math.floor(Math.random() * 6) + 1;
}

// 11. Temperature Rounding
function tempRound(temp){
  return Math.round(temp);
}

// 12. Ceil Shopping Price
function shoppingPrice(){
  return Math.ceil(9.25);
}

// 13. Parse and Add
function addStrings(){
  let a = parseInt("10");
  let b = parseFloat("5.5");
  return a + b;
}

// 14. Random Even Number (2–20)
function randomEven(){
  let num = Math.floor(Math.random() * 10) + 1;
  return num * 2;
}

// 15. Check if Number or Not
function checkNumber(input){
  let n = parseInt(input);
  if(isNaN(n))
    return "Not a Number";
  else
    return "Valid Number";
}

// 16. Round All Prices in Array
function roundPrices(arr){
  let result = [];
  for(let i=0;i<arr.length;i++){
    result.push(Math.round(arr[i]));
  }
  return result;
}

// 17. Coin Toss
function coinToss(){
  let toss = Math.floor(Math.random() * 2);
  if(toss == 0)
    return "Heads";
  else
    return "Tails";
}

// 18. Random Integer (Min–Max)
function randomRange(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 19. Extract Number from Text
function extractNumber(){
  return parseFloat("Total: 45.90 USD");
}

// 20. Round to Nearest 0.5
function roundHalf(num){
  return Math.round(num * 2) / 2;
}

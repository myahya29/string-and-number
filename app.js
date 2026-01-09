

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

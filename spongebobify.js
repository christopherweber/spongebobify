
let userInput = document.getElementById("phraseEntered").value
console.log(userInput)
console.log("hey bitch")


function spongebobify(text){
  let words = text.split('')
  let result = ''

  for (let char of words) {
   if(Math.random() > 0.5) {
     char = char.toUpperCase()
  }
  result += char
}
 return result
}

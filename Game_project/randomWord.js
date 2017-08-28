const fs = require('fs')
const words = fs.readFileSync("/usr/share/dict/words", "utf-8").toLowerCase().split("\n")

// let randomWordcapped = []
// let wordLength = ""

function randomWordSelector(randomWord, theWordArray, resultArray){
  randomWord = words[Math.floor(Math.random() * words.length)]
  console.log(randomWord)
  theWordArray = [...randomWord]

  let wordLength = randomWord.length
  let string = "_"
  let resultString = string.repeat(wordLength)
  resultArray = [...resultString]
  console.log(resultArray.join(' '))
  console.log("^^resultArray.join at the end of the randomWordSelector function")
  return(randomWord, theWordArray, resultArray)
}

module.exports ={
  randomWordSelector: randomWordSelector
}



// function wordCapFunct(){
//   for (let i=0; i<words.length; i++){
//     if (words[i].length < 6){
//       randomWordcapped.push(words[i])
//     }
//   }
// }
// wordCapFunct(words)
// console.log((randomWordcapped.length), (randomWordcapped[2000]));


// console.log(numberGuessesLeft)
// console.log("^^ maxEightLettersArray, number_of_guesses_left")

// console.log(req.session)
// console.log("^^ req.session within app.get else")

// Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function notThisFunctionName() {

  const lengthofWords = danishWords.map((word) => word.length);
  const found = Math.min(...lengthofWords);
  const indexOfshortword = lengthofWords.indexOf(found);

  return (danishWords[indexOfshortword]);
}

notThisFunctionName(danishWords);


// Find and count the Danish letters

const danishLetters = ["å", "æ", "ø"];

function findDanishLetter(danishtext) {

  let totalScore = 0;
  let scoreÅ = 0;
  let scoreÆ = 0;
  let scoreØ = 0;
  const word = danishtext.split("");

  for(let i = 0; i < word.length; i++){
      if(danishLetters.includes(word[i])){
          if(word[i] === 'å'){
              scoreÅ++
          } else if(word[i] === 'æ'){
              scoreÆ++
          } else if (word[i] === 'ø'){
              scoreØ++
          }
        totalScore++;
      }      
  }
  
  return {
    total: totalScore, 
    å: scoreÅ, 
    æ: scoreÆ, 
    ø: scoreØ
  }; 
}

const sampleSetence = 'Jeg bor i København også lære webudvikling'; 
findDanishLetter(sampleSetence);




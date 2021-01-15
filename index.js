//This code checks if the letter is in the the newarray,
// if not then it inits it into the array with a value 
//of zero. If it is already in the list it will 
//add one to the letter value and increse the 
//result score for the solution.
function duplicateCount(text){
      let result = 0, indexingArray = [];
      text.toLowerCase().split('').map(letter => {
          if (!indexingArray.hasOwnProperty(letter))
            indexingArray[letter] = 0;
           else {
            if (indexingArray[letter] === 0) 
              result += 1;
            
            indexingArray[letter] = indexingArray[letter] + 1;
          }
      });
      console.log(result);
      return result;
    }



duplicateCount("");// Expected Result 0
duplicateCount("abcde");// Expected Result 0
duplicateCount("aabbcde");// Expected Result 2
duplicateCount("aabBcde");// Expected Result 2
duplicateCount("Indivisibility");// Expected Result 1
duplicateCount("Indivisibilities");// Expected Result 2

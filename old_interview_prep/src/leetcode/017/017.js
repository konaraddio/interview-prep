function letterCombinations(digits) {
  let results = [];

  if (digits.length < 1) {
    return results;
  }

  const digitsToLetters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };

  helperLetterCombos(0, "");

  function helperLetterCombos(index, currentStr) {
    if (index == digits.length) {
      results.push(currentStr);
      return;
    }

    const letters = digitsToLetters[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      helperLetterCombos(index + 1, currentStr + letters[i]);
    }
  }

  return results;
}

// console.log(letterCombinations("23"));

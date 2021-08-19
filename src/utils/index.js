export function checkWin(correct, wrong, word) {
  let status = 'win';

  word.split('').forEach(letter => {
    if (!correct.includes(letter)) {
      status = '';
    }
  });

  if (wrong.length === 6) status = 'lose';

  return status;
}

export function checkLetter(input, letters) {
  if (!letters.includes(input)) {
    letters.push(input);
  }
  return letters;
}

export function checkWord(word) {
  const arr = [...new Set([...word])];
  return arr.length;
}

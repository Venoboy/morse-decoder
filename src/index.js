const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let keys = Object.keys(MORSE_TABLE),
    morseNumbers = {};
  keys.forEach(key => {
    let arr = key.split('');
    let resultArr = arr.map(elem => {
      if (elem === '.') return '10';
      else if (elem === '-') return '11'
    });
    for (let i = resultArr.length * 2; i < 10; i++) {
      resultArr.unshift('0')
    }
    morseNumbers[resultArr.join('')] = MORSE_TABLE[key]
  });
  morseNumbers['**********'] = ' ';

  let exprArr = expr.split(''),
    tempArr = [],
    letterCodesArr = [];


  exprArr.forEach((value) => {
      tempArr.push(value);
    if (tempArr.length === 10) {
      letterCodesArr.push(tempArr.join(''));
      tempArr = [];
    }
  });


  return letterCodesArr.map(elem => {
      return morseNumbers[elem]
  }).join('');
}



module.exports = {
    decode
};
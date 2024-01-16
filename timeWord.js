
/**
 * 
 * @param {string} time 
 */
function time2Word(time) {
  const SPECIALS = {
    '00:00': 'midnight',
    '12:00': 'noon',
  }
  if (time in SPECIALS) {
    return SPECIALS[time];
  }

  const [h, m] = time.split(':').map(t => t * 1);
  const hourIn12 = (h * 1 % 12)
  
  const NUMBER_2_WORD = {
    0: 'oh',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty' 
  }
  const ampmPart = h >= 12 ? 'pm' : 'am';
  const minutePart = m === 0 ? 'o\'clock' :
    m < 10 ? `oh ${NUMBER_2_WORD[m]}` :
    m < 20 ? NUMBER_2_WORD[m] :
    m % 10 === 0 ? NUMBER_2_WORD[m] : `${NUMBER_2_WORD[Math.floor(m / 10) * 10]} ${NUMBER_2_WORD[m % 10]}`
  const hourPart = hourIn12 === 0 ? 'twelve' : NUMBER_2_WORD[hourIn12];

  const word = `${hourPart} ${minutePart} ${ampmPart}`;
  return word
}

module.exports = time2Word
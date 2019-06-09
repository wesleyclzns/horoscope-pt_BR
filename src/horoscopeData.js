// how many days in each month
export const monthDayRange = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};

// array of zodiac animals 
export const ZodiacArray = [
	'Macaco',
	'Galo',
	'Cachorro',
	'Porco',
	'Rato',
	'Boi',
	'Tigre',
	'Coelho',
	'Dragão',
	'Cobra',
	'Cavalo',
	'Cabra'
];

// object lookup w/ functions to process different Horoscope Signs inside each month
export const handleMonths = {
  1: function (day) {
    if (day <= 19) { return 'Capricornio' } else { return 'Aquario'}
  },
  2: function (day) {
    if (day <= 18) { return 'Aquario' } else { return 'Peixes'}
  },
  3: function (day) {
    if (day <= 20) { return 'Peixes' } else { return 'Aries'}
  },
  4: function (day) {
    if (day <= 19) { return 'Aries' } else { return 'Touro'}
  },
  5: function (day) {
    if (day <= 20) { return 'Touro' } else { return 'Gemeos'}
  },
  6: function (day) {
    if (day <= 20) { return 'Gemeos' } else { return 'Cancer'}
  },
  7: function (day) {
    if (day <= 22) { return 'Cancer' } else { return 'Leão'}
  },
  8: function (day) {
    if (day <= 22) { return 'Leão' } else { return 'Virgem'}
  },
  9: function (day) {
    if (day <= 22) { return 'Virgem' } else { return 'Libra'}
  },
  10: function (day) {
    if (day <= 22) { return 'Libra' } else { return 'Escorpião'}
  },
  11: function (day) {
    if (day <= 21) { return 'Escorpião' } else { return 'Sagitario'}
  },
  12: function (day) {
    if (day <= 21) { return 'Sagitario' } else { return 'Capricornio'}
  }
};

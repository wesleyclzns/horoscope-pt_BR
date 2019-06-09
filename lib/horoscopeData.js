'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var monthDayRange = exports.monthDayRange = {
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

var ZodiacArray = exports.ZodiacArray = ['Macaco', 'Galo', 'Cachorro', 'Porco', 'Rato', 'Boi', 'Tigre', 'Coelho', 'Dragão', 'Cobra', 'Cavalo', 'Cabra'];

var handleMonths = exports.handleMonths = {
  1: function _(day) {
    if (day <= 19) {
      return 'Capricórnio';
    } else {
      return 'Aquario';
    }
  },
  2: function _(day) {
    if (day <= 18) {
      return 'Aquario';
    } else {
      return 'Peixes';
    }
  },
  3: function _(day) {
    if (day <= 20) {
      return 'Peixes';
    } else {
      return 'Aries';
    }
  },
  4: function _(day) {
    if (day <= 19) {
      return 'Aries';
    } else {
      return 'Touro';
    }
  },
  5: function _(day) {
    if (day <= 20) {
      return 'Touro';
    } else {
      return 'Gêmeos';
    }
  },
  6: function _(day) {
    if (day <= 20) {
      return 'Gêmeos';
    } else {
      return 'Câncer';
    }
  },
  7: function _(day) {
    if (day <= 22) {
      return 'Câncer';
    } else {
      return 'Leão';
    }
  },
  8: function _(day) {
    if (day <= 22) {
      return 'Leão';
    } else {
      return 'Virgem';
    }
  },
  9: function _(day) {
    if (day <= 22) {
      return 'Virgem';
    } else {
      return 'Libra';
    }
  },
  10: function _(day) {
    if (day <= 22) {
      return 'Libra';
    } else {
      return 'Escorpião';
    }
  },
  11: function _(day) {
    if (day <= 21) {
      return 'Escorpião';
    } else {
      return 'Sagitario';
    }
  },
  12: function _(day) {
    if (day <= 21) {
      return 'Sagitario';
    } else {
      return 'Capricórnio';
    }
  }
};
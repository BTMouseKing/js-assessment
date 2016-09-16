exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
      var constant = 1 << (bit - 1);
      if (num & constant) {
          return 1;
      }

      return 0;
  },

  base10: function(str) {
      var ret = 0;
      for (var i = str.length - 1; i >= 0; i--) {
          ret = ret + str[i] * Math.pow(2, str.length - 1 - i);
      }
      return ret;
  },

  convertToBinary: function(num) {
      if (num < 0 || num > 255 || num % 1 !== 0) {
          throw new Error("Not fit in a byte");
      }
      return ("000000000" + num.toString(2)).substr(-8);
  },

  multiply: function(a, b) {
      var precision = (b + "").split(".")[1].length;
      var ret = (a * b).toPrecision(precision) / 1;
      return ret;
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
      return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
      return fn.call(obj);
  },

  functionFunction: function(str) {
      return function(str1) {
          return str + ", " + str1;
      }
  },

  makeClosures: function(arr, fn) {
      var funcArr = [];
      var func = function (val) {
          return function () {return fn(val);}
      };
      for (var i = 0; i < arr.length; i++) {
          funcArr.push(func(arr[i]));
      }
      return funcArr;
  },

  partial: function(fn, str1, str2) {
      return function (punctuation) {
          return fn(str1, str2, punctuation);
      }
  },

  useArguments: function() {
      var sum = 0
      for (var i = 0; i < arguments.length; i++) {
          sum += arguments[i];
      }
      return sum;
  },

  callIt: function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(null, args);
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};

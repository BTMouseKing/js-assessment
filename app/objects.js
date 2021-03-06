exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
      return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
      var ret = [];
      for (var property in obj) {
          if (obj.hasOwnProperty(property)) {
              ret.push(property + ": " + obj[property]);
          }
      }
      return ret;
  }
};

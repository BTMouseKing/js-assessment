exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      var currLetter = "";
      var count = 0;
      var new_str = "";
      for (var i = 0; i < str.length; i++) {
          if (str[i] != currLetter) {
              new_str = new_str + str[i];
              currLetter = str[i];
              count = 1;
          } else {
              count++;
              if (count <= amount) {
                  new_str = new_str + str[i];
              }
          }
      }
      return new_str;
  },

  wordWrap: function(str, cols) {
      var new_str = str;
      var space_index = -1;
      var mark = cols;
      for (var i = 0; i < new_str.length; i++) {
          if (new_str[i] == " " && i < mark) {
              space_index = i;
          }
          if (i == mark || i == new_str.length - 1) {
              if (new_str[i] == " ") {
                  new_str = new_str.substr(0, i) + "\n" + new_str.substr(i+1);
                  space_index = -1;
              } else if (space_index != -1) {
                  new_str = new_str.substr(0, space_index) + "\n" + new_str.substr(space_index+1);
              }
              mark += cols;
          }
      }
      return new_str;
  },

  reverseString: function(str) {
      var new_str = "";
      for (var i = str.length - 1; i >= 0; i--) {
          new_str += str[i];
      }
      return new_str;
  }
};

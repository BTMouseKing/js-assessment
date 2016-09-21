exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
      var files = [];
      for (var property in data) {
          if (property == "files") {
              var val = data[property];
              if (val instanceof Array) {
                  for (var i = 0; i < val.length; i++) {
                      if (val[i] instanceof Object) {
                          files = files.concat(this.listFiles(val[i], dirName));
                      } else {
                          if (dirName !== undefined) {
                              if (val[i].indexOf(dirName) !== -1) {
                                    files.push(val[i]);
                              }
                          } else {
                              files.push(val[i]);
                          }
                      }
                  }
              }
          }
      }
      return files;
  },

  permute: function(arr) {
      var permutations = [];
      var permute_helper = function(arr, index) {
          if (index >= arr.length - 1) {
              permutations.push(arr.slice());
          } else {
              for (var i = index; i < arr.length; i++) {
                  var temp = arr[index];
                  arr[index] = arr[i];
                  arr[i] = temp;
                  permute_helper(arr, index + 1);
                  temp = arr[index];
                  arr[index] = arr[i];
                  arr[i] = temp;
              }
          }
      };
      permute_helper(arr, 0);
      return permutations;
  },

  fibonacci: function(n) {
      if (n == 0) {
          return 0;
      } else if (n == 1) {
          return 1;
      } else {
          return this.fibonacci(n - 1) + this.fibonacci(n - 2);
      }
  },

  validParentheses: function(n) {
      if (n == 0) {
          return [""];
      }

      var result = [];
      for (var i = 0; i < n; i++) {
          var lefts = this.validParentheses(i);
          var rights = this.validParentheses(n - 1 - i);
          for (var l = 0; l < lefts.length; l++) {
              for (var r = 0; r < rights.length; r++) {
                  result.push("(" + lefts[l] + ")" + rights[r]);
              }
          }
      }
      return result;
  }
};

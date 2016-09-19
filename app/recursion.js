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

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};

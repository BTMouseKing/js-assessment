exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
      var sum = 0;
      for (var i = 0; i < arr.length; i++) {
          sum += arr[i];
      }
      return sum;
  },

  remove: function(arr, item) {
      var new_arr = [];
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] != item) {
              new_arr.push(arr[i]);
          }
      }
      return new_arr;
  },

  removeWithoutCopy: function(arr, item) {
      var index = arr.indexOf(item);
      while (index > -1) {
          arr.splice(index, 1);
          index = arr.indexOf(item);
      }
      return arr;
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.splice(arr.length-1, 1);
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      if (arr.length > 0) {
          arr.splice(0, 1);
      }
      return arr;
  },

  concat: function(arr1, arr2) {
      var new_arr = arr1.concat(arr2);
      return new_arr;
  },

  insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count: function(arr, item) {
      var count = arr.reduce(function(n, val) {
          return n + (val === item);
      }, 0);
      return count;
  },

  duplicates: function(arr) {
      var sorted_arr = arr.slice().sort();
      var new_arr = [];
      for (var i = 0; i < sorted_arr.length;) {
          var isDuplicate = false;
          j = i + 1;
          while (j < sorted_arr.length && sorted_arr[j] == sorted_arr[i]) {
              isDuplicate = true;
              j++;
          }
          if (isDuplicate) {
              new_arr.push(sorted_arr[i]);
          }
          i = j;
      }
      return new_arr;
  },

  square: function(arr) {
      return arr.map(function(x) {
          return Math.pow(x, 2);
      });
  },

  findAllOccurrences: function(arr, target) {
      var indices = [];
      for (var i = 0; i < arr.length; i++) {
          if (arr[i] == target) {
              indices.push(i);
          }
      }
      return indices;
  }
};

exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
      return new Promise(function(resolve, reject) {
          resolve(value);
      });
  },

  manipulateRemoteData: function(url) {
      return new Promise(function(resolve, reject) {
          $.ajax({
            dataType: "json",
            url: url,
            success: function(data) {
                var ret = [];
                data.people.forEach( function (person) {
                    ret.push(person.name);
                });
                ret.sort();
                resolve(ret);
            }
          });
      });
  }
};

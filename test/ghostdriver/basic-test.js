// Generated by CoffeeScript 1.3.3
(function() {
  var test;

  process.env.GHOSTDRIVER_TEST = 1;

  test = require('../common/basic-test-base').test;

  describe("wd", function() {
    return describe("ghostdriver", function() {
      return describe("basic test", function() {
        return describe("using ghostdriver", function() {
          return test({
            host: 'localhost',
            port: 8080
          }, {});
        });
      });
    });
  });

}).call(this);
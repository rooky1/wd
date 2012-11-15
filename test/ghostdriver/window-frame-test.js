var desired, remoteWdConfig, test, _ref;

_ref = require('./config'); 
desired = _ref.desired; 
remoteWdConfig = _ref.remoteWdConfig;

test = require('../common/window-frame-test-base').test;

describe("wd", function() {
  return describe("ghostdriver", function() {
    return describe("window frame test", function() {
      return describe("using ghostdriver", function() {
        return test(remoteWdConfig, desired);
      });
    });
  });
});

var assert = buster.referee.assert;
var hostname = location.hostname;

buster.testCase("Call onerror", {

  setUp: function () {
    $ = {};
    $.post = this.spy();

    initErrorHandler("/error", hostname);
  },
    
  "exception within the system": function () {
    window.onerror('error message', 'http://' + hostname + '/test.js', 11);
    assert.isTrue($.post.called);
  },
  
  "error within the system": function (done) {
    
    setTimeout(function() {
      // throw some real-life exception
      not_defined.not_defined();
    }, 10);
    
    setTimeout(function() {
      assert.isTrue($.post.called);
      done();
    }, 100);
  },
  
  "error outside the system": function() {
    window.onerror('error message', 'http://example.com/test.js', 11);
    assert.isFalse($.post.called);
  },
  
  "error from unknown source": function() {
    window.onerror('error message', 'http://' + hostname + '/foo', 11);
    assert.isFalse($.post.called);
  }
});
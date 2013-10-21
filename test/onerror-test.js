var assert = buster.referee.assert;

buster.testCase("Call onerror", {

  setUp: function () {
    $ = {};
    $.post = this.spy();

    initErrorHandler("/error", "localhost");
  },
    
  "exception within the system": function () {
    window.onerror('error message', 'http://localhost/test.js', 11);
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
    window.onerror('error message', 'http://localhost/foo', 11);
    assert.isFalse($.post.called);
  }
});
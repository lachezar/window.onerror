buster.testCase("Call onerror", {

  setUp: function () {
    $ = {};
    $.post = this.spy();
  },
    
  "exception within the system": function () {
    
    setTimeout(function() {
      throw new Exception("test");
    }, 100);
    
    setTimeout(function() {
      assert.called($.post);
    }, 200);
  }
  
  "error within the system": function () {
    
    setTimeout(function() {
      test.test();
    }, 100);
    
    setTimeout(function() {
      assert.called($.post);
    }, 200);
  }
  
  "error outside the system": function() {
    
    setTimeout(function() {
      var script = document.createElement('script');
      script.src = "http://google.com";
      document.body.appendChild(script);
    }, 100);
    
    setTimeout(function() {
      assert.called($.post);
    }, 200);
  }
});
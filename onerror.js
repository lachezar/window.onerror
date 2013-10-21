var initErrorHandler = function(errorUrl, staticHost) {
  window.onerror = function(message, scriptUrl, line, column) {
    var regex = new RegExp("^https?://" + staticHost);
    if (regex.test(scriptUrl) && scriptUrl.indexOf('.js') > -1) {
      // if the script origin is ours
      // send to server for post mortem analysis
      $.post(
        errorUrl,
        {
          location: location.href, 
          useragent: navigator.userAgent,
          message: message, 
          scriptUrl: scriptUrl, 
          line: line, 
          column: column
        }
      );
    }
  };
}

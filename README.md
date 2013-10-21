window.onerror
==============

Simple window.onerror handler which will let you send client-side JavaScript errors for post mortem analysis.

Include onerror.js on your page and initialize the script: `initErrorHandler('/url-to-post-error', 'static.content.com')`.

Only errors from JavaScript files at the `static.content.com` will be reported, which will prevent you from receiving unwanted errors from browser add-ons or errors in development mode.

On the server side at `/url-to-post-error` you will receive the page `location`, error `message`, `scriptUrl`, `line` number, `column` number (when available) and `useragent`. You could aggregate them in a log file and send the errors once a day or whatever works best for you ;-).

To run the tests you need [buster.js](http://busterjs.org).

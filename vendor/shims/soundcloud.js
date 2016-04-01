
(function() {
  var SC = self.SC
  delete self.SC

  function vendorModule() {
    'use strict'
    return { 'default': SC }
  }

  define('soundcloud', [], vendorModule)
})()


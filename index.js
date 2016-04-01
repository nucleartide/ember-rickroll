
/* jshint node: true */
'use strict'

module.exports = {
  name: 'ember-rickroll',

  included: function(app) {
    this._super.included(app)
    app.import('vendor/soundcloud.js')
    app.import('vendor/shims/soundcloud.js')
  }
}


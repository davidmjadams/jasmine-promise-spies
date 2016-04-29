(function () {
  'use strict';
  
  var Q = require('Q');

  if (!jasmine) {
    throw new Error('Can\'t find jasmine - is it loaded?');
  }
  
  jasmine.Spy.prototype.andReturnPromise = function(value) {
    this.plan = function() {
      return Q.when(value);
    };
    return this;
  };  
}());

(function () {
  'use strict';

  if (!jasmine) {
    throw new Error('Can\'t find jasmine - is it loaded?');
  }

  jasmine.Spy.prototype.andReturnPromise = function(value) {
    this.plan = function() {
      return  {
          then: (function (value) {
            return value;
          }())
      };
    };
    return this;
  };
}());

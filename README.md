# Promise spies for Jasmine
Allows you to return a promise from a spy, so that you can test your behaviour after the promise has been fulfilled.

##Usage
Make sure both [Jasmine](http://jasmine.github.io/) and this script are loaded in your test runner.

```
spyOn(myObject, 'myMethod').andReturnPromise();

spyOn(myObject, 'myOtherMethod').andReturnPromise({ name: 'some data object' });
```

You can then flush your promise and ensure its doing what you want in the return behaviour. Lovely.
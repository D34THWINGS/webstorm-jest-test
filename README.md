## What I do ?

I have a simple source file containing a basic class:

```javascript
module.exports = class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
};
```

And a simple test case:

```javascript
jest.unmock('../user');

const User = require('../user');

describe('User', () => {
  it('should construct user with firstName and lastName', () => {
    // Given
    const lastName = 'foo';
    const firstName = 'bar';

    // When
    const user = new User(firstName, lastName);

    // Then
    expect(user.firstName).toEqual(firstName);
    expect(user.lastName).toEqual(lastName);
  });
});
```

Then the following jest configuration in my `package.json`:

```json
{
  "automock": true
}
```

## Expected result

When I click on a test case in the test file to run it:

![](./support/screenshot.png)

or either running all tests via a Jest run configuration, I expect the runner to exit with 0
 and the test to pass.
 
 ## Given result
 
 The runner is exiting with error code 1 with the test passing. And I get the following stack trace:
 
 ```
 WARN - IDE integration: Cannot read property 'addTestSuiteChild' of undefined
 TypeError: Cannot read property 'addTestSuiteChild' of undefined
     at JasmineReporter.<anonymous> (/Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/helpers/jest-intellij/lib/jest-intellij-jasmine.js:136:40)
     at JasmineReporter.suiteStarted (/Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/helpers/jest-intellij/lib/jest-intellij-jasmine.js:213:17)
     at dispatch (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2046:28)
     at ReportDispatcher.suiteStarted (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2017:11)
     at nodeStart (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:754:20)
     at Object.fn (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2567:13)
     at attemptAsync (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1984:24)
     at QueueRunner.run (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1939:9)
     at QueueRunner.execute (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1927:10)
     at queueRunnerFactory (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:716:35)
     at TreeProcessor.execute (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2431:7)
     at Env.execute (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:778:17)
     at jasmine2 (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/build/index.js:95:7)
     at runTest (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-cli/build/runTest.js:53:10)
     at promise.then (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-cli/build/TestRunner.js:307:14)
     at process._tickCallback (internal/process/next_tick.js:103:7)
 WARN - IDE integration: Cannot read property 'addTestChild' of undefined
 TypeError: Cannot read property 'addTestChild' of undefined
     at JasmineReporter.<anonymous> (/Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/helpers/jest-intellij/lib/jest-intellij-jasmine.js:158:39)
     at JasmineReporter.specStarted (/Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/helpers/jest-intellij/lib/jest-intellij-jasmine.js:213:17)
     at dispatch (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2046:28)
     at ReportDispatcher.specStarted (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2017:11)
     at Object.specStarted (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:943:18)
     at Spec.attr.onStart.context [as onStart] (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/build/setup-jest-globals.js:79:28)
     at Spec.execute (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:362:10)
     at Object.fn (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2584:37)
     at attemptAsync (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1984:24)
     at QueueRunner.run (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1939:9)
     at QueueRunner.execute (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1927:10)
     at queueRunnerFactory (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:716:35)
     at Object.fn (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2569:13)
     at attemptAsync (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1984:24)
     at QueueRunner.run (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1939:9)
     at QueueRunner.execute (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1927:10)
     at queueRunnerFactory (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:716:35)
     at TreeProcessor.execute (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2431:7)
     at Env.execute (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:778:17)
     at jasmine2 (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-jasmine2/build/index.js:95:7)
     at runTest (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-cli/build/runTest.js:53:10)
     at promise.then (/Users/bdelamarre/Documents/Projects/webstorm-jest-test/node_modules/jest-cli/build/TestRunner.js:307:14)
     at process._tickCallback (internal/process/next_tick.js:103:7)
 WARN - IDE integration: Cannot find specNode by id spec0
 WARN - IDE integration: No current suite to finish
 ```
 
## Issue origin ideas
 
 I think the `automock` options is mocking something in the Webstorm instrumentation and prevent it to work properly.
 
## Workaround

You workaround this issue by adding the following field to your jest configuration:

```json
{
  "unmockedModulePathPatterns": [
    "intellij"
  ]
}
```

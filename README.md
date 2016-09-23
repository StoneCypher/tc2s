# tc2s
Convert timecodes to seconds - '1h27m45s' -> 5265

## What?
This is a simple utility for making it easier to convert human-friendly timecodes to machine-friendly frame IDs.

```javascript
var tc = require('tc2s');

console.log( tc.to_ms('1h 27m 45s') ); // 5265000
```
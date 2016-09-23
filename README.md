# tc2s
Convert timecodes to milliseconds, or a frame index - eg '1h27m45s' -> 5265000

## What?
This is a simple utility for making it easier to convert human-friendly timecodes to machine-friendly frame IDs, to facilitate machine generation of video from simple hand-writeable scripts.

```javascript
var tc = require('tc2s');

console.log( tc.to_ms('1h 27m 45s') );          // 5265000
console.log( tc.to_60_frames('1h 27m 45s') );   // 315900

console.log( tc.to_tick(1000, '1h 27m 45s') );  // 5265000
console.log( tc.to_tick(60,   '1h 27m 45s') );  // 315900
```


var assert = require('assert'),
    tc2s   = require('./tc2s.es5.js');





describe('tc2s.to_ms', function() {

  const should = (str, val) => it(`"${str}" should return ${val}`, () => assert.equal(val, tc2s.to_ms(str)));

  describe('unit basics', () => {

    should("1",        1000    );
    should("2",        1000 * 2);

    should("1s",       1000    );
    should("2s",       1000 * 2);

    should("1m",      60000    );
    should("2m",      60000 * 2);

    should("1h",    3600000    );
    should("2h",    3600000 * 2);

    should("1d",   86400000    );
    should("2d",   86400000 * 2);

    should("1w",  604800000    );
    should("2w",  604800000 * 2);

  });


  describe('repetitions of a block', () => {

    should("1s1",    2000);
    should("1s1s",   2000);
    should("1s1s1",  3000);
    should("1h1s1h", (3600000 * 2) + 1000)

  });

  // various ways to write 1m 45s
  describe('rephrasings of 1m45s', () => {

    should("1m45s",  105000);
    should("1m 45s", 105000);
    should("1m45",   105000);
    should("1m 45",  105000);
    should("45 1m",  105000);
    should("45s 1m", 105000);

  });

});





describe('tc2s.to_film60', function() {

  const should = (str, val) => it(`"${str}" should return ${val}`, () => assert.equal(val, tc2s.to_film60(str)));

  describe('unit basics', () => {

    should("1",          1    );
    should("2",          1 * 2);

    should("1s",        60    );
    should("2s",        60 * 2);

    should("1m",      3600    );
    should("2m",      3600 * 2);

    should("1h",    216000    );
    should("2h",    216000 * 2);

    should("1d",   5184000    );
    should("2d",   5184000 * 2);

    should("1w",  36288000    );
    should("2w",  36288000 * 2);

  });


  describe('repetitions of a block', () => {

    should("1s1s",   120);
    should("1h1s1h", (216000 * 2) + 60)

  });

  // various ways to write 1m 45s
  describe('rephrasings of 1m45s', () => {

    should("1m45s",  6300);
    should("1m 45s", 6300);
    should("45s 1m", 6300);

  });

});

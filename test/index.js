var Comma = require('../');
var comma = Comma();
var assert = require('assert');

describe ('comma', function () {
  it ('should keep the given precision', function () {
    assert.equal('1,200.42', comma(1200.42));
  });

  it ('should not add a mantissa', function () {
    assert.equal('1,200', comma(1200));
  });

  it ('should use a comma to separate thousands by default', function () {
    assert.equal('1,200,456', comma(1200456));
  });

  it ('should handle the given thousandSeparator', function () {
    comma = Comma({thousandSeparator: ', '});
    assert.equal('1, 200, 456.4567', comma(1200456.4567));
  });

  it ('should handle the given decimalSeparator', function () {
    comma = Comma({decimalSeparator: ',', thousandSeparator: ''});
    assert.equal('1200,2', comma(1200.2));
  });

  it ('should handle the given fixed digits', function () {
    comma = Comma({digits: 2});
    assert.equal('1,200.20', comma(1200.20));
  });
});

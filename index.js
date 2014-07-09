module.exports = Comma;

function Comma(options) {
  options = merge({
    thousandSeparator: ',',
    decimalSeparator: '.',
    digits: null
  }, options || {});

  return function(n) {
    var parts = (options.digits ? n.toFixed(options.digits) : n.toString()).split('.');
    var hasMantissa = parts.length > 1;
    var characteristic = parts[0];
    var mantissa = (hasMantissa && parts[1]) || '';

    characteristic = reverse(characteristic);
    characteristic = characteristic.replace(/(\d{3})(?!$)/g, '$1' + reverse(options.thousandSeparator));
    characteristic = reverse(characteristic);

    return hasMantissa ? characteristic + options.decimalSeparator + mantissa : characteristic;
  }
}

function reverse (str) {
  return str.split('').reverse().join('');
}

function merge(o1, o2) {
  Object.keys(o2).forEach(function(k) {
    o1[k] = o2[k];
  });
  return o1;
}

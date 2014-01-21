
var hasOwn = Object.hasOwnProperty.call.bind(Object.hasOwnProperty);

module.exports = chain;
function chain (obj) {
  var keys = Object.keys(obj);
  var key = null;

  while ((key = keys.shift())) {
    if (!hasOwn(obj, key)) continue;
    else if ('function' != typeof obj[key]) continue;
    else void function (key) {
      var fn = obj[key];
      obj[key] = function () {
        var ret = fn.apply(obj, arguments);
        if (void 0 == ret) {
          return obj;
        } else {
          return ret;
        }
      };
    }(key);
  }

  return obj;
}

define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.foo7 = foo7;
  var foo = exports.foo = 1;
  var foo = exports.foo = 1,
      bar = exports.bar = 2;

  var foo2 = exports.foo2 = function () {};

  var foo3 = exports.foo3 = undefined;
  let foo4 = exports.foo4 = 2;
  let foo5 = exports.foo5 = undefined;
  const foo6 = exports.foo6 = 3;

  function foo7() {}

  class foo8 {}

  exports.foo8 = foo8;
});

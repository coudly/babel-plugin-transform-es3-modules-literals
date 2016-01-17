# babel-plugin-transform-es3-modules-literals

Ensure that reserved words [default] are quoted in import/exports accesses, quoted in object-property/member by the way.

```javascript
import $ from "jquery";
export default 0;
export default { default: 0, catch: 1, try: 2 };
$(document);
```

transform to

```javascript
var _jquery = require("jquery");

var _jquery2 = babelHelpers.interopRequireDefault(_jquery);

exports["default"] = 0;
exports["default"] = {
    "default": 0,
    "catch": 0,
    "try": 0
};
(0, _jquery2["default"])(document);
```

## Installation

```sh
$ npm install babel-plugin-transform-es3-modules-literals
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-es3-modules-literals"]
}
```

### Via CLI

```sh
$ babel --plugins transform-es3-modules-literals script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-es3-modules-literals"]
});
```

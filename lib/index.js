"use strict";

exports.__esModule = true;

module.exports = exports["default"] = function (_ref) {
    var t = _ref.types;

    var reassignmentVisitor = {
        ObjectProperty: {
            exit: function (path) {
                var node = path.node;
                var key = node.key;
                if (!node.computed && t.isIdentifier(key) && !t.isValidIdentifier(key.name)) {
                    // default: "bar" -> "default": "bar"
                    node.key = t.stringLiteral(key.name);
                }
            }
        },
        MemberExpression: {
            exit: function (path) {
                var node = path.node;
                var _object = node.object;
                var _prop = node.property

                if (!node.computed && t.isIdentifier(_object) && !t.isValidIdentifier(_prop.name)) {
                    // exports.default -> exports["default"]
                    // exports.catch   -> exports["catch"]
                    path.replaceWith(
                        t.MemberExpression(t.identifier(_object.name), t.identifier(_prop.name))
                    );
                    path.node.property = t.stringLiteral(_prop.name);
                    path.node.computed = true;
                }
            }
        },
        CallExpression: {
            exit: function (path) {
                var node = path.node;
                var callee = node.callee;

                if (!callee.computed && t.isMemberExpression(callee) && !t.isValidIdentifier(callee.property.name)) {
                    // fetch().then().catch() -> fetch().then()['catch']()
                    callee.property = t.stringLiteral(callee.property.name);
                    callee.computed = true;
                }
            }
        }
    };

    return {
        visitor: {
            Program: {
                exit: function (path) {
                    path.traverse(reassignmentVisitor);
                }
            }
        }
    }
};
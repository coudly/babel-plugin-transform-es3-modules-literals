define([], function () {
    'use strict';

    fetch('_blank').then(function (s) {
        alert(s);
    })['catch'](function (e) {
        alert(e);
    });
});

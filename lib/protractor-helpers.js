var Q = require('q');

require('prototypes');

module.exports.waitForTitleToContainText = function(text) {
    var deferred = Q.defer();
    browser.wait(function () {
        return browser.getTitle().then(function (title) {
            return title.indexOf(text) !== -1;
        });
    }).then(function () {
        deferred.resolve();
    });
    return deferred.promise;
};

module.exports.waitForURLToEndWithText = function(text) {
    var deferred = Q.defer();
    browser.wait(function () {
        return browser.getCurrentUrl().then(function (url) {
            return url.endsWith(text);
        });
    }).then(function () {
        deferred.resolve();
    });
    return deferred.promise;
};
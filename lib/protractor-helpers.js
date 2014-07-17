require('prototypes');

module.exports.waitForTitleToContainText = function(text, done) {
    browser.wait(function () {
        return browser.getTitle().then(function (title) {
            return title.indexOf(text) !== -1;
        });
    }).then(function () {
        done();
    });
};

module.exports.waitForURLToEndWithText = function(text, done) {
    browser.wait(function () {
        return browser.getCurrentUrl().then(function (url) {
            return url.endsWith(text);
        });
    }).then(function () {
        done();
    });
};
var SmashingMagazineHomepage = function (desktop) {
    if (desktop) {
        this.booksButton = $('#menu-network-menu .menu-item-books a');
    } else {
        this.booksButton = $('#menu-smashing-mobile-network .menu-item-books a');
        this.sandwitchButton = $('#top .ntb');
    }

    this.get = function () {
        if (desktop) {
            browser.driver.manage().window().setSize(1600, 800);
        } else {
            browser.driver.manage().window().setSize(320, 480);
        }
        browser.get('http://www.smashingmagazine.com/');
    }
};

module.exports = SmashingMagazineHomepage;
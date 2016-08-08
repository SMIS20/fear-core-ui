describe('Global Navigation', () => {

    var url = '/examples/templates/nav/nav-css.html';

    var config = require('fear-core').utils.config();

    var breakpoint = config.get('breakpoint');

    it('Desktop', () => {

        browser.urlAndWaitForLoad(url);

        var result = browser.webdrivercss('template__navigation', [
            {
                name: 'desktop',
                elem: '.nav__wrapper',
                screenWidth: [breakpoint.xlarge.width, breakpoint.large.width, breakpoint.medium.width]
            }
        ]);

        isWithinMisMatchTolerance(result);
    });

    it('Mobile', () => {

        const burgerMenuBtn = '.menu__button--show-level1';
        const menuDrawer = '.nav';
        let originalHeight = 1200;

        browser.urlAndWaitForLoad(url);
        browser.getViewportSize('height', size => {
            originalHeight = size;
        });
        browser.setViewportSize({
            width: breakpoint.small.width,
            height: originalHeight
        }, false);
        browser.waitForVisible(burgerMenuBtn, 2000);
        browser.click(burgerMenuBtn);
        browser.waitForVisible(menuDrawer, 2000);

        var result = browser.webdrivercss('template__navigation', [
            {
                name: 'mobile',
                elem: '.nav',
                screenWidth: [breakpoint.xsmall.width, breakpoint.small.width]
            }
        ]);

        isWithinMisMatchTolerance(result);
    });

    it('Sub Menu', () => {

        browser.urlAndWaitForLoad(url);

        var navItems = browser.elements('.nav__wrapper .nav > li > a');

        navItems.value.forEach(function (el, index) {

            browser.moveTo(el.ELEMENT, 10, 10);

            var result = browser.webdrivercss('template__navigation', [
                {
                    name: 'submenu-element-' + index,
                    elem: '.nav__wrapper .nav > li:nth-child(' + (index + 1) + ') a ~ .nav__content',
                    screenWidth: [breakpoint.xlarge.width]
                }
            ]);

            isWithinMisMatchTolerance(result);

            browser.pause(1500);
        });
    });
});
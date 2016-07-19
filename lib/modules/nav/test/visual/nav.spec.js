describe('Nav', () => {

    it('Global Nav', () => {

        var module = 'module__nav';

        browser.urlAndWaitForLoad('/examples/modules/nav/nav-css.html');

        var result = browser.webdrivercss(module, [
            {
                name: 'module',
                elem: '.nav__wrapper'
            }
        ]);

        isWithinMisMatchTolerance(result);
    });
});
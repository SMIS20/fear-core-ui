import Desktop from './desktop';
import Mobile from './mobile';

export default class Navigation {

    /**
     * create global navigation UI template
     */
    constructor(events) {
        var desktop = new Desktop('desktop');

        if (events.desktop) {
            desktop.analytics(events.desktop);
        }

        function loadMobileJS() {
            if (window.innerWidth < 900) {
                var mobile = new Mobile('mobile');

                if (events.mobile) {
                    mobile.analytics(events.mobile);
                }
            }
        }

        window.addEventListener('resize', function () {
            loadMobileJS();
        });

        loadMobileJS();
    }
}

export var __useDefault = true;
import Desktop from './desktop';
import Mobile from './mobile';

const types = {
    desktop : Desktop,
    mobile : Mobile
};

export default class Navigation {

    /**
     * @description create global navigation UI template
     * @param events
     * @returns {void}
     */
    constructor(events) {

        Navigation.initialiseType('desktop', events);

        function loadMobileJS() {
            if (window.innerWidth < 900) {
                Navigation.initialiseType('mobile', events);
            }
        }

        window.addEventListener('resize', function () {
            loadMobileJS();
        });

        loadMobileJS();
    }

    /**
     * @description initialise a type of navigation e.g mobile
     * @param name {String}
     * @param events {Object}
     * @returns {void}
     */
    static initialiseType(name, events) {

        var type = new types[name](name);

        if (events && events[name]) {
            type.analytics(events[name]);
        }
    }
}

export var __useDefault = true;
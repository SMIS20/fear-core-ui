import config from 'config';
import analytics from './analytics.events';

export default class UI {

    /**
     * create a UI element
     */
    constructor() {
        this.elements = [];
    }

    /**
     * @param elements
     */
    set elements(elements) {
        //typeof check
        this.elements = elements;
    }

    /**
     *
     * @returns {*}
     */
    get elements() {
        return this.elements;
    }

    /**
     * analytics
     */
    analytics() {

        let events = config.analytics.events[this.constructor.name.toLowerCase()];

        console.log('this.elements', this.elements);
        console.log('events', events);

        if (events) {
            Object.keys(events).forEach(function (key) {
                if (this.elements[events[key]]) {
                    analytics.bind(document.querySelectorAll(this.elements[events[key]]), events);
                }
            });
        }
    }
}

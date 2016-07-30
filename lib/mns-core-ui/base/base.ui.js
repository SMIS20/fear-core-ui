import config from 'config';
import analytics from './analytics.events';

export default class UI {

    constructor() {
        this.analytics();
    }

    analytics(selector) {

        let events = config.analytics.events[this.constructor.name.toLowerCase()];

        if (events) {
            analytics.bind(document.querySelectorAll(selector), events);
        }
    }
}

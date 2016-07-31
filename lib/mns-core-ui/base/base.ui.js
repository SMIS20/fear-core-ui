import config from 'config';
import analytics from './analytics.events';

export default class UI {

    /**
     * create a UI element
     * @param name {String} name of UI element e.g navigation/calender
     * @param type {String} type of UI element e.g default/mobile
     */
    constructor(name, type) {

        this.name = name;
        this.type = type;
        this.elements = {};

        console.info('creating', this.name, 'of type', this.type); // eslint-disable-line no-console
    }

    /**
     * @param elements {Object}
     */
    set elements(elements) {
        if (typeof elements === 'object') {
            this._elements = elements;
        }
    }

    /**
     * @returns {Object}
     */
    get elements() {
        return this._elements;
    }

    /**
     * analytics events for UI
     * @returns {void}
     */
    analytics() {

        if (config.analytics) {
            this.events = config.analytics.events[this.name]; //calls setter
        }

        if (this.events) {
            this.events.forEach((value, key) => {
                Object.keys(this.events[key]).forEach((elType) => {
                    this.attachEvents(elType);
                });
            });
        }
    }

    /**
     * @param events {Object}
     */
    set events(events) {
        Object.keys(events).forEach((key) => {
            if (events[key][this.type]) {
                this._events = events[key][this.type];
            }
        });
    }

    /**
     * @returns {Object}
     */
    get events() {
        return this._events;
    }

    /**
     * @param type {String} type of UI element e.g default/mobile
     * @returns {void}
     */
    attachEvents(type) {
        if (this.elements[type]) {
            console.info('attaching events for', this.elements[type]); // eslint-disable-line no-console
            analytics.bind(document.querySelectorAll(this.elements[type]), this.events);
        }
    }
}

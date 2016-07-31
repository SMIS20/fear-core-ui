import config from 'config';
import analytics from './analytics.events';

export default class UI {

    /**
     * create a UI element
     */
    constructor(name) {
        this.name = name;
        this.type = this.constructor.name.toLowerCase();
        this.elements = {};

        console.info('creating', this.name, 'of type', this.type);
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

        this.events = config.analytics.events[this.name]; //calls setter

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
     * @param type {String}
     * @returns {void}
     */
    attachEvents(type) {
        if (this.elements[type]) {
            console.info('attaching events for', this.elements[type]);
            analytics.bind(document.querySelectorAll(this.elements[type]), this.events);
        }
    }
}

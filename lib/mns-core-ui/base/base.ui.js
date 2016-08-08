import eventBinder from './analytics.events';

export default class UI {

    /**
     * create a UI element
     * @param type {String} type of UI element e.g default/mobile
     * @param elements {Object} selectors that are exposed explicitly to be able to attach events to
     */
    constructor(type, elements) {

        this.type = type;

        this.eventBinder = eventBinder;

        this.elements = elements || {};
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
     * @param events {Object} object listing data objects to be passed with events from element
     * @param documentReference {Object}
     * @returns {void}
     */
    analytics(events, documentReference = document) {

        this.document = documentReference;

        this.events = events;

        this.attachEvents();
    }

    /**
     * @returns {void}
     */
    attachEvents() {
        Object.keys(this.elements).forEach((el) => {
            this.eventBinder.bind(this.document.querySelectorAll(this.elements[el]), this.events[el]);
        });
    }
}

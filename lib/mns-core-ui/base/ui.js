import eventBinder from './events';

export default class UI {

    /**
     * @description create a UI element
     * @param type {String} type of UI element e.g default/mobile
     * @param elements {Object} selectors that are exposed explicitly to be able to attach events to
     */
    constructor(type, elements) {

        this.type = type;

        this.eventBinder = eventBinder;

        this.elements = elements || {};

        this.events = {};
    }

    /**
     * @description analytics events for UI
     * @param events {Object} object listing data objects to be passed with events from element
     * @param documentReference {Object}
     * @returns {void}
     */
    analytics(events, documentReference = document) {

        this.document = documentReference;

        this.events.analytics = events;

        this.attachEvents();
    }

    /**
     * @returns {void}
     */
    attachEvents() {
        Object.keys(this.elements).forEach((el) => {
            if (this.events.analytics[el]) {
                this.eventBinder.bind(
                    this.document.querySelectorAll(this.elements[el]),
                    this.events.analytics[el]
                );
            }
        });
    }

    /**
     * @property type {String}
     */
    set type(type) {
        if (typeof type === 'string') {
            this._type = type;
        }
    }

    get type() {
        return this._type;
    }

    /**
     * @property elements {Object}
     */
    set elements(elements) {
        if (typeof elements === 'object') {
            this._elements = elements;
        }
    }

    get elements() {
        return this._elements;
    }

    /**
     * @property events {Object}
     */
    set events(events) {
        if (typeof events === 'object') {
            this._events = events;
        }
    }

    get events() {
        return this._events;
    }
}

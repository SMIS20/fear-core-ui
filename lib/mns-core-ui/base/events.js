export default class Analytics {

    /**
     * Attach analytics events
     */
    constructor() {}

    /**
     * @param el
     * @returns {Array}
     */
    static normaliseElements(el) {

        if (el.length === 0 || (!Array.isArray(el) && typeof el !== 'object')) {
            return [];
        }

        if (el.length) {
            el = Array.from(el);
        } else {
            el = [el];
        }

        return el;
    }

    /**
     * @param el {Object}
     * @param actions {Object}
     */
    static bind(el, actions) {

        Analytics.normaliseElements(el).forEach((elItem)=> {

            if (typeof elItem !== 'object') {
                throw new Error('element is not an object');
            }

            if (!elItem.nodeName) {
                throw new Error('element is not a DOM object');
            }

            actions.forEach((action)=> {

                let data = [
                    [elItem]
                ];

                elItem.addEventListener(action.event, Analytics.send(action.functionName, data));
            });

        });
    }

    /**
     * @param functionName {String}
     * @param data {Object}
     * @returns {Function}
     */
    static send(functionName, data) {
        return () => {
            if (typeof window[functionName] === 'function') {
                try {
                    window[functionName].apply(null, data);
                } catch (e) {
                    throw new Error(e.stack);
                }
            }
        };
    }
}
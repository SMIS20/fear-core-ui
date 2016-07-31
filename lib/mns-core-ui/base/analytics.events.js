export default class Analytics {

    /**
     * Attach analytics events
     */
    constructor() {

    }

    /**
     * bind
     * @param el {Object}
     * @param actions {Object}
     */
    static bind(el, actions) {

        if (el.length) {
            el = Array.from(el);
        } else {
            el = [el];
        }

        el.forEach((elItem)=> {

            actions.forEach((action)=> {

                let data = [
                    [elItem]
                ];

                elItem.addEventListener(action.event, Analytics.send(action.functionName, data));
            });

        });
    }

    /**
     * send
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
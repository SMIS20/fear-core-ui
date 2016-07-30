export default class Analytics {

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
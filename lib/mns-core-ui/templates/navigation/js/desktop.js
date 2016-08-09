import UI from '../../../base/ui';

export default class Desktop extends UI {

    /**
     * create default global navigation
     * @param type {String}
     * @extends UI
     * @returns {void}
     */
    constructor(type) {

        var elements = {
            link : '.nav li > a'
        };

        super(type, elements);
    }
}

import UI from '../../../base/base.ui';

export default class Desktop extends UI {

    /**
     * create default global navigation
     * @param type {String}
     * @extends UI
     */
    constructor(type) {

        var elements = {
            link : '.nav li > a'
        };

        super(type, elements);
    }
}

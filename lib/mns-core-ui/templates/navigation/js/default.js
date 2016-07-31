import UI from '../../../base/base.ui';

export default class Default extends UI {

    /**
     * create default global navigation
     * @param UIName {String}
     * @param type {String}
     * @extends UI
     */
    constructor(UIName, type) {

        super(UIName, type);

        this.elements = {
            link : '.nav__wrapper .nav > li > a'
        };

        this.analytics();
    }
}

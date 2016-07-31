import UI from '../../../base/base.ui';

export default class Default extends UI {

    /**
     * create default global navigation
     * @param UIName {String}
     * @extends UI
     */
    constructor(UIName) {

        super(UIName);

        this.elements = {
            link : '.nav__wrapper .nav > li > a'
        };

        this.analytics();
    }
}

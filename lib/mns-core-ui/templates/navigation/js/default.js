import UI from '../../../base/base.ui';

export default class Default extends UI {

    /**
     * create default global navigation
     * @extends UI
     */
    constructor() {

        super();

        this.elements[this.constructor.name.toLowerCase()] = [
            {
                link : '.nav__wrapper .nav > li > a'
            }
        ];

        this.analytics();
    }

    analytics() {
        super.analytics();
    }
}

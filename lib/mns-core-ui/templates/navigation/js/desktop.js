import UI from '../../../base/base.ui';

export default class Desktop extends UI {

    /**
     * create default global navigation
     * @param UIName {String}
     * @param type {String}
     * @extends UI
     */
    constructor(UIName, type) {

        super(UIName, type);

        this.elements = {
            link : '.nav li > a'
        };

        this.analytics();
    }
}

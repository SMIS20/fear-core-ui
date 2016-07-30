import UI from '../../../base/base.ui';

export default class Navigation extends UI {

    constructor() {
        super();
    }

    analytics() {
        super.analytics('.nav__wrapper .nav > li > a');
    }
}

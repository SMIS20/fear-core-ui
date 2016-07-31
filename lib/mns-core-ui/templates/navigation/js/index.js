import Default from './default';
import Mobile from './mobile';

export default class Navigation {

    /**
     * create global navigation UI template
     */
    constructor() {
        new Default();
        new Mobile();
    }
}

new Navigation();
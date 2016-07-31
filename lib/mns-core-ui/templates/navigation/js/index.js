import Default from './default';
import Mobile from './mobile';

export default class Navigation {

    /**
     * create global navigation UI template
     */
    constructor() {
        this.name = this.constructor.name.toLowerCase();

        new Default(this.name);
        new Mobile(this.name);
    }
}

new Navigation();
import Desktop from './desktop';
import Mobile from './mobile';

export default class Navigation {

    /**
     * create global navigation UI template
     */
    constructor() {
        this.name = 'navigation';

        new Desktop(this.name, 'desktop');
        new Mobile(this.name, 'mobile');
    }
}

new Navigation();
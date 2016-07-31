import Default from './default';
import Mobile from './mobile';

export default class Navigation {

    /**
     * create global navigation UI template
     */
    constructor() {
        this.name = 'navigation';

        new Default(this.name, 'default');
        new Mobile(this.name, 'mobile');
    }
}

new Navigation();
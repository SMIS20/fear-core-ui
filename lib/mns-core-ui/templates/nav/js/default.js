import analytics from  'common/scripts/modules/es6/analytics/events';
import data from 'applicationData';
console.log('ada', data);

export default class Navigation {

    constructor() {
        this.analytics();
    }

    analytics() {
console.log('data', data);
        if (data.analytics && data.analytics.nav) {
            console.log(data.analytics.nav);
            analytics.bind(document.querySelectorAll('.nav__wrapper .nav > li > a'), data.analytics.nav);
        }
    }
}

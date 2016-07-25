import analytics from  'common/scripts/modules/es6/analytics/events';

export default class navigation {

    constructor() {
        this.analytics();
    }

    analytics() {

        let analyticActions = [{
            functionName: 'analyticsTopNav',
            event: 'click'
        }];

        analytics.bind(document.querySelectorAll('.nav__wrapper .nav > li > a'), analyticActions);
    }
}

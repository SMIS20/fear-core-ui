import BaseUI from '../base.ui';

describe('Base UI', () => {

    var baseUI;
    var events = {
        mobile : {
            link1 : [{
                functionName: 'analyticsTopNavMobile1',
                event: 'click'
            }],
            link2 : [{
                functionName: 'analyticsTopNavMobile2',
                event: 'click'
            }]
        },
        desktop : {
            link1 : [{
                functionName: 'analyticsTopNavDesktop1',
                event: 'click'
            }],
            link2 : [{
                functionName: 'analyticsTopNavDesktop2',
                event: 'click'
            }]
        }
    };

    var elements = {
        link1 : '.link1 a',
        link2 : '.link2 a'
    };

    var type = 'mobile';

    baseUI = new BaseUI(type, elements);

    baseUI.eventBinder = {
        bind: function () {}
    };

    describe('instantiation', () => {

        it('should set type property correctly', () => {
            expect(baseUI.type).to.deep.equal(type);
        });

        it('should set UI elements property correctly', () => {
            expect(baseUI.elements).to.deep.equal(elements);

            baseUI.elements = 'string';
            expect(baseUI.elements).to.deep.equal(elements);
        });
    });

    describe('analytics', () => {

        baseUI.analytics(events[type], {
            querySelectorAll : function () {
                return {};
            }
        });

        it('should set UI events property correctly', () => {
            expect(baseUI.events).to.deep.equal(events[type]);
        });
    });
});
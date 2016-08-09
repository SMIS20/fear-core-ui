import BaseUI from '../ui';

describe('base : ui', () => {

    var baseUI;

    const mocks = {
        events : {
            mobile: {
                link1: [{
                    functionName: 'analyticsTopNavMobile1',
                    event: 'click'
                }],
                link2: [{
                    functionName: 'analyticsTopNavMobile2',
                    event: 'click'
                }]
            }
        },
        elements : {
            link1: '.link1 a',
            link2: '.link2 a'
        }
    };

    const stubs = {
        baseUI : (type, elements) => {

            var instance;

            instance = new BaseUI(type, elements);

            instance.eventBinder = {
                bind: sinon.spy()
            };

            return instance;
        },
        analytics : () => {
            return {
                querySelectorAll : sinon.spy()
            };
        }
    };

    before(() => {
        baseUI = stubs.baseUI('mobile', mocks.elements);
    });

    describe('Instantiation', () => {

        describe('type property', () => {

            it('should set correctly', () => {
                expect(baseUI.type).to.deep.equal('mobile');
            });

            it('should not set if incorrect type', () => {
                baseUI.type = 1234;
                expect(baseUI.type).to.deep.equal('mobile');
            });
        });

        describe('elements property', () => {
            it('should set correctly', () => {
                expect(baseUI.elements).to.deep.equal(mocks.elements);
            });

            it('should not set if incorrect type', () => {
                baseUI.elements = 'string';
                expect(baseUI.elements).to.deep.equal(mocks.elements);
            });
        });
    });

    describe('Analytics', () => {

        it('should set UI events if events exists for type', () => {

            baseUI.analytics(mocks.events.mobile, stubs.analytics());

            expect(baseUI.events.analytics).to.deep.equal(mocks.events.mobile);

            expect(baseUI.eventBinder.bind).to.have.been.calledTwice;
            baseUI.eventBinder.bind.reset();
        });

        it('should set no UI events if no events for type', () => {

            baseUI.analytics({doesNotExist: ''}, stubs.analytics());

            expect(baseUI.events.analytics).to.deep.equal({doesNotExist: ''});

            expect(baseUI.eventBinder.bind).to.not.have.been.called;
            baseUI.eventBinder.bind.reset();
        });
    });
});
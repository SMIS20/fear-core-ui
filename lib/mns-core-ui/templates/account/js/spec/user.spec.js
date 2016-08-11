import user from '../user';
import cookie from '../../../../base/cookie';

let documentMock, cookieMock;

before(() => {
    documentMock = mock.getMockWindow().document;

    cookieMock = cookie;
    cookieMock.getValue = sinon.stub();
});

describe.only('account : user', () => {
    describe.only('Is logged in', () => {
        it('when a user cookie exists it should return that the user is logged in', () => {

            cookieMock.getValue.returns('mytest');

            let result = user.isLoggedIn(cookieMock);

            expect(result).to.equal(true);
        });

        it('when a user cookie does not exists it should return that the user is not logged in', () => {

            cookieMock.getValue.returns(null);

            let result = user.isLoggedIn(cookieMock);

            expect(result).to.equal(false);
        });

        it('when a user cookie does not exists it should return that the user is not logged in', () => {

            cookieMock.getValue.returns(null);

            let result = user.isLoggedIn(cookieMock);

            expect(result).to.equal(false);
        });

    });

    describe.only('Display element', () => {
        it('when a show is true it should set the display style to an empty string', () => {

            let mockElement = {
                style: {}
            };

            user._displayElement(mockElement, true);

            expect(mockElement.style.display).to.equal('');
        });

        it('when a show is false it should set the display style to none', () => {

            let mockElement = {
                style: {}
            };

            user._displayElement(mockElement, false);

            expect(mockElement.style.display).to.equal('none');
        });
    });

    describe.only('Process logged in elements', () => {
        it('when logged in elements to show should be displayed and elements to hide should be hidden', () => {

            let mockElementShowList = [
                {
                    style: {}
                },
                {
                    style: {}
                }
            ];

            let mockElementHideList = [
                {
                    style: {}
                },
                {
                    style: {}
                }
            ];

            user.isLoggedIn = sinon.stub().returns(true);

            documentMock.querySelectorAll = sinon.stub();
            documentMock.querySelectorAll.onCall(0).returns(mockElementShowList);
            documentMock.querySelectorAll.onCall(1).returns(mockElementHideList);

            user.processLoggedInElements(documentMock);

            expect(mockElementShowList[0].style.display).to.equal('');
            expect(mockElementShowList[1].style.display).to.equal('');

            expect(mockElementHideList[0].style.display).to.equal('none');
            expect(mockElementHideList[1].style.display).to.equal('none');
        });

        it('when not logged in elements to show should not be displayed and elements to hide should be displayed', () => {

            let mockElementShowList = [
                {
                    style: {}
                },
                {
                    style: {}
                }
            ];

            let mockElementHideList = [
                {
                    style: {}
                },
                {
                    style: {}
                }
            ];

            user.isLoggedIn = sinon.stub().returns(false);

            documentMock.querySelectorAll = sinon.stub();
            documentMock.querySelectorAll.onCall(0).returns(mockElementShowList);
            documentMock.querySelectorAll.onCall(1).returns(mockElementHideList);

            user.processLoggedInElements(documentMock);

            expect(mockElementShowList[0].style.display).to.equal('none');
            expect(mockElementShowList[1].style.display).to.equal('none');

            expect(mockElementHideList[0].style.display).to.equal('');
            expect(mockElementHideList[1].style.display).to.equal('');
        });
    });
});
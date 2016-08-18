import cookie from '../cookie';

const MS_USER_COOKIE = 'MS_USER_COOKIE';

let documentMock;

before(() => {
    documentMock = mock.getMockWindow().document;
});

describe('base : cookie', () => {
    it('when a cookie exists it should return the cookie value', () => {

        documentMock.cookie = `${MS_USER_COOKIE}=mytest; `;

        let result = cookie.getValue(MS_USER_COOKIE, documentMock);

        expect(result).to.equal('mytest');
    });

    it('when a cookie does not exit it should return null', () => {

        documentMock.cookie = `WRONG_ID=mytest; `;

        let result = cookie.getValue(MS_USER_COOKIE, documentMock);

        expect(result).to.equal(null);
    });

    it('when multiple cookies exist it should return the cookie value', () => {

        documentMock.cookie = `mycookie1=cookie1value; mycookie2=cookie2value; mycookie3=cookie3value`;

        let result = cookie.getValue('mycookie2', documentMock);

        expect(result).to.equal('cookie2value');
    });
});
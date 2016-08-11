import cookie from '../../../base/cookie';

const MS_USER_COOKIE = 'MS_USER_COOKIE';

export default class User {
    static isLoggedIn(cookieReference = cookie) {
        return cookieReference.getValue(MS_USER_COOKIE) !== null;
    }

    static processLoggedInElements(documentReference = document) {

        var accountLoggedInShowElements = documentReference.querySelectorAll('.account__logged-in--show');
        var accountLoggedInHideElements = documentReference.querySelectorAll('.account__logged-in--hide');

        accountLoggedInShowElements.forEach((el) => {
            User._displayElement(el, User.isLoggedIn());
        });

        accountLoggedInHideElements.forEach((el) => {
            User._displayElement(el, !User.isLoggedIn());
        });
    }

    static _displayElement(el, show){
        el.style.display = show ? '' : 'none';
    }
}

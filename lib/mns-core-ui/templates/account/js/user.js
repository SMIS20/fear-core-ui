import cookie from '../../account/js/cookie';

const MS_USER_COOKIE = 'MS_USER_COOKIE';

export default class User {
    static isLoggedIn() {
        return cookie.getValue(MS_USER_COOKIE) !== null;
    }

    static processLoggedInElements() {

        var accountLoggedInShowElements = document.querySelectorAll('.account__logged-in--show');
        var accountLoggedInHideElements = document.querySelectorAll('.account__logged-in--hide');

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

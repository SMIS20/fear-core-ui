export default class Cookie {

    static getValue(key) {
        let result = null;

        document.cookie.split('; ').forEach((cookie) => {
            let [name, value] = cookie.split('=');

            if (name === key) {
                result = decodeURIComponent(value);
                return;
            }
        });

        return result;
    }
}

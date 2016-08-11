export default class Cookie {

    static getValue(key, documentReference = window.document) {
        let result = null;

        documentReference.cookie.split('; ').forEach((cookie) => {
            let [name, value] = cookie.split('=');

            if (name === key) {
                result = decodeURIComponent(value);
                return;
            }
        });

        return result;
    }
}

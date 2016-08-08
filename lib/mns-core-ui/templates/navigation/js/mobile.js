import UI from '../../../base/base.ui';

const SCROLL_INTO_VIEW_DELAY = 160; // this needs to correspond the the CSS animation timing

export default class Mobile extends UI {

    /**
     * global navigation mobile UI enhancements
     * @param type {String}
     * @see UI
     * @param windowReference {Object} reference to browser window object
     */
    constructor(type, windowReference = window) {

        super(type, null);

        this.window = windowReference;
        this.lastTimeout = null;

        this.bind();
    }

    /**
     * bind
     * @returns {void}
     */
    bind() {
        if (this.window.document.getElementsByClassName) {
            let checkboxes = this.window.document.getElementsByClassName('menu__mobile-level3');

            for (let iCheckbox = 0; iCheckbox < checkboxes.length; iCheckbox++) {
                checkboxes[iCheckbox].onchange = (e) => {
                    this.level3Change(e);
                };
            }

            let radioButtons = this.window.document.getElementsByName('menu');

            for (let iRadio = 0; iRadio < radioButtons.length; iRadio++) {
                radioButtons[iRadio].onchange = (e) => {
                    this.menuChange(e);
                };
            }
        }
    }

    /**
     * isElementVisible
     * @param el {Object}
     * @returns {Boolean}
     */
    isElementVisible(el) {

        let rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (this.window.innerHeight || this.window.document.documentElement.clientHeight) &&
            rect.right <= (this.window.innerWidth || this.window.document.documentElement.clientWidth)
        );
    }

    /**
     * scrollCurrentLevel3IntoView
     * @param level3Id {String}
     * @returns {void}
     */
    scrollCurrentLevel3IntoView(level3Id) {
        this.window.clearTimeout(this.lastTimeout);

        this.lastTimeout = this.window.setTimeout(() => {
            let label = this.window.document.querySelector('[for=' + level3Id + ']');

            if (!this.isElementVisible(label)) {
                label.scrollIntoView();
            }
        }, SCROLL_INTO_VIEW_DELAY);
    }

    /**
     * deSelectLevel3Checkboxes
     * @param selectedCheckboxId {String}
     * @returns {void}
     */
    deSelectLevel3Checkboxes(selectedCheckboxId) {
        let checkboxes = this.window.document.querySelectorAll('.menu__mobile-level3:checked:not(#' + selectedCheckboxId + ')');

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }

    /**
     * level3Change
     * @param e {Object}
     * @returns {void}
     */
    level3Change(e) {
        this.deSelectLevel3Checkboxes(e.target.id);
        this.scrollCurrentLevel3IntoView(e.target.id);
    }

    /**
     * menuChange
     * @param e {Object}
     * @returns {void}
     */
    menuChange(e) {
        this.deSelectLevel3Checkboxes(e.target.id);
    }
}

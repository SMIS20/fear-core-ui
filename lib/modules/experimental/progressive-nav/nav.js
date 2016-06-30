export default class MobileNav {

    constructor() {
        this.bind();
    }

    bind() {
        let checkboxes = document.getElementsByClassName('menu__mobile-level3');

        for (let iCheckbox = 0; iCheckbox < checkboxes.length; iCheckbox++) {
            checkboxes[iCheckbox].onchange = (e) => {
                this.level3Change(e);
            };
        }

        let radioButtons = document.getElementsByName('menu');

        for (let iRadio = 0; iRadio < radioButtons.length; iRadio++) {
            radioButtons[iRadio].onchange = (e) => {
                this.menuChange(e);
            };
        }
    }

    isElementVisible(el) {

        let rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    scrollCurrentLevel3IntoView(level3Id) {
        let scrollIntoViewDelay = 160; // this needs to correspond the the CSS animation timing

        setTimeout(() => {
            let label = document.querySelector('[for=' + level3Id + ']');

            if (!this.isElementVisible(label)) {
                label.scrollIntoView();
            }
        }, scrollIntoViewDelay);
    }

    deSelectLevel3Checkboxes(selectedCheckboxId) {
        let checkboxes = document.querySelectorAll('.menu__mobile-level3:checked:not(#' + selectedCheckboxId + ')');

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }

    level3Change(e) {
        this.deSelectLevel3Checkboxes(e.target.id);
        this.scrollCurrentLevel3IntoView(e.target.id);
    }

    menuChange(e) {
        this.deSelectLevel3Checkboxes(e.target.id);
    }
}

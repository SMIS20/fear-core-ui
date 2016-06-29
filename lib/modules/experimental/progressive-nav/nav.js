function deselect(e) {
    var checkboxes = document.querySelectorAll('.menu__mobile-level3:checked:not(#' + e.target.id + ')');

    for (var index in checkboxes) {
        checkboxes[index].checked = false;
    }

    // setTimeout(function() {
    //     e.target.scrollIntoView();
    // }, 500);
}

function enhanceMobileNav() {
    var checkboxes = document.getElementsByClassName('menu__mobile-level3');

    for (var index in checkboxes) {
        checkboxes[index].onchange = deselect;
    }
}

document.addEventListener("DOMContentLoaded", enhanceMobileNav);

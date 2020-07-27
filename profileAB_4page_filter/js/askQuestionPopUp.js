/* popUp */
const popUp = $(".popUp");
const popUp__active = "popUp_active";

$(".popUp__button-active").on("click", () => {
    popUp.addClass(popUp__active);
    $("main").addClass("shadow");
    $("body").addClass("lock");
});

$(".popUp__closeIcon").on("click", () => {
    popUp.removeClass(popUp__active);
    $("main").removeClass("shadow");
});

$(document).mouseup(() => {
    // close search input

    if ($(event.target).closest(popUp).length == 0) {
        popUp.removeClass(popUp__active);
        $("main").removeClass("shadow");
    }
});
  /* popUp end */

/* title arrow */
$(".filterColumn__title").on("click", () => {
  $(event.currentTarget).next(".filterColumn__spoiler-wrapper").slideToggle(300);
  $(event.currentTarget).find(".filterColumn__arrow").toggleClass("filterColumn__arrow_active");
});

/* inside link arrow */
$("h6.filterColumn__link").on("click", () => {
  /* another */
  $("h6.filterColumn__link").not($(event.currentTarget)).next().slideUp(300);
  $("h6.filterColumn__link")
    .not($(event.currentTarget))
    .find(".filterColumn__arrow")
    .removeClass("filterColumn__arrow_active");
  $("h6.filterColumn__link").not($(event.currentTarget)).removeClass("filterColumn__link_active");

  /* event target */
  $(event.currentTarget).find(".filterColumn__arrow").toggleClass("filterColumn__arrow_active");
  $(event.currentTarget).toggleClass("filterColumn__link_active");
  $(event.currentTarget).next().slideToggle(300);
});

/* mouse up */
$(document).mouseup(() => {
  //  close arrows in input/select
  if ($(event.target).closest(".filterColumn__wrapper").length == 0) {
    $(".filterColumn__arrow").removeClass("filterColumn__arrow_active");
    $(".filterColumn__spoiler-wrapper").slideUp(300);
    $(".filterColumn__link-wrapper").slideUp(300);
    $("h6.filterColumn__link").removeClass("filterColumn__link_active");
  }
});

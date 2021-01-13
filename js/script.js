$(document).ready(function () {
    $(".burger-menu").on("click", function () {
        $(".menu-header__nav").toggleClass("menu-header__nav-active");
        $(".burger-menu").toggleClass("burger-menu__active");
        $("body").toggleClass("block-body");
    });
});
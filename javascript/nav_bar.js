$(document).ready(function () {
    $('.mainwrapper').hide();

    $('.item-principal').eq(2).click(function() {
         $('.secundario').slideToggle('fast');
    });

    $('#nav-menu').click(function () {
        $('.item-principal').slideToggle('fast');
    });

    $('.mui-button').click(function () {
        $('.mainwrapper').slideToggle();
    });
    $(window).scroll(function () {
    });
});
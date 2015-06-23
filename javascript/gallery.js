/// <reference path="../typings/jquery/jquery.d.ts"/>
var nCont = 0;
//Funciones de Siguiente
function In_N(art) {
    $(".gallery img").eq(art).fadeIn('fast');
}
function Out_N(art) {
    $(".gallery img").eq(art).fadeOut('fast');
}
$(document).ready(function () {
    $('.gallery img').first().show();
    //Next Button
    $("#next").click(function () {
        Out_N(nCont);
        nCont++;
        if (nCont >= 12) {
            nCont = 0;
        }
        In_N(nCont);
    });
    //Back Button
    $("#back").click(function () {
        Out_N(nCont);
        nCont--;
        if (nCont < 0) {
            nCont = 11;
        }
        In_N(nCont);
    });
});
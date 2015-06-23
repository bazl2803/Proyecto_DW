/// <reference path="../typings/jquery/jquery.d.ts"/>
var nCont=0;
var $month = $('#nameM');
//Funciones de Siguiente
function In_N(art) {
	$(".month").eq(art).fadeIn('fast');
}
function Out_N(art) {
	$(".month").eq(art).fadeOut('fast');
}
$(document).ready(function () {
     $('.month').first().show();
    //Next Button
    $month.text("enero");
    $("#next").click(function() {
    	Out_N(nCont);
    	nCont++;
    	if(nCont>=12){
    		nCont=0;
    	}
    	In_N(nCont);
    });
    //Back Button
    $("#back").click(function() {
    	Out_N(nCont);
    	nCont--;
    	if(nCont<0){
    		nCont=11;
    	}
    	In_N(nCont);
    });
});
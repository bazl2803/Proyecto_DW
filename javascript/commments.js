/// <reference path="../typings/jquery/jquery.d.ts"/>

$(document).ready(function () {
     var  $submit = $('#submit');
     $submit.click(function () {
          var  $titulo = $('#titulo').val(),
               $texto = $('#text').val(),
               $autor = $('#autor').val(),
               $url = $('url').val(),
               $post = $('#base');
          
          /*Transfer Data*/
          $post.addClass('card-comment');
          var $clone = $post.clone();
          $('section').append($clone);
          $clone.find('.titulo_item')
               .text($titulo);
          $clone.find('.comentario')
               .text($texto);
          $clone.find('.autor_item')
               .text($autor);
          $clone.find('img')
               .attr('src',$url);
          
          /*Clean Form*/
          $('#titulo').val(null);
          $('#text').val(null);
          $('#autor').val(null);
          $('#url').val(null);
          $('.card-comment').fadeIn();
          $('.mainwrapper').hide();
     });
});
$('.galeria__img').click(function(e){

  var img = e.target.src;
  var modal ='<div class="modal" id="modal"><img src="'+ img +'" class="modal_img img-responsive" style="width:40%;height:75%;"><div class="modal__boton" id="modal__boton"><li class="fa fa-close"></li></div></div>';

    $('body').append(modal);

    $('#modal__boton').click(function(){
        $('#modal').remove();
    });
 });


$(document).keyup(function(e){
    if(e.which==27){
        $('#modal').remove();
    }
})

$(document).ready(function(){

	$('.icon').click(function(){

		$('.icon').toggleClass('active');

		$('#nav-background').toggle(700);

	});

	$('#nav-fondo').click(function(){
		$('#nav-background').hide(500,function(){
			$('.icon').toggleClass('active');

			$('#logo #img1').css({
				"display":"block"
			});
			$('#logo #img2').css({
				"display":"none"
			});
		});
	});

	$('#nav-modal a').click(function(){
		$('#nav-background').hide(500,function(){
			$('.icon').toggleClass('active');

			$('#logo #img1').css({
				"display":"block"
			});
			$('#logo #img2').css({
				"display":"none"
			});
		});
	});

	$(document).keyup(function(event){
		if(event.which==27)
		{
			$("#nav-background").hide(500,function(){

				$('#logo #img1').css({
					"display":"block"
				});
				$('#logo #img2').css({
					"display":"none"
				});
			});
		}
	});

	$('#ES').css({
		'color':'#EAC141'
	});

  //   $('.fil').css({
	// 	'opacity':'0'
	// });

	$("#banner-img1").mouseover(function(){
        $(".img-hover").css("display", "block");
        $(".img-hover2").css("display", "none");
				$(".logo1").css("display", "block");
				$(".logo2").css("display", "none");
    });
    $("#banner-img2").mouseover(function(){
         $(".img-hover").css("display", "none");
         $(".img-hover2").css("display", "block");
				 $(".logo2").css("display", "block");
				 $(".logo1").css("display", "none");
     });

});

$(document).ready(function(){
	function animacion() {
		$('.flecha-down-servicios').animate({
			marginTop: '+=10',
		}, 500, function() {
			$('.flecha-down-servicios').animate({
				marginTop: '-=10',
			}, 500, function() {
				animacion()
			});
		});
	}
	animacion();
});
$(document).ready(function(){
	function animacion() {
		$('.flecha-down1').animate({
			marginTop: '+=10',
		}, 500, function() {
			$('.flecha-down1').animate({
				marginTop: '-=10',
			}, 500, function() {
				animacion()
			});
		});
	}
	animacion();
});
$(document).ready(function(){
	function animacion() {
		$('.flecha-down2').animate({
			marginTop: '+=10',
		}, 500, function() {
			$('.flecha-down2').animate({
				marginTop: '-=10',
			}, 500, function() {
				animacion()
			});
		});
	}
	animacion();
});
$(document).ready(function(){
	function animacion() {
		$('.flecha-down3').animate({
			marginTop: '+=10',
		}, 500, function() {
			$('.flecha-down3').animate({
				marginTop: '-=10',
			}, 500, function() {
				animacion()
			});
		});
	}
	animacion();
});

$(document).ready(function(){
	function animacion() {
		$('.flecha-down4').animate({
			marginTop: '+=10',
		}, 500, function() {
			$('.flecha-down4').animate({
				marginTop: '-=10',
			}, 500, function() {
				animacion()
			});
		});
	}
	animacion();
});

$(document).ready(function(){
	function animacion() {
		$('.flecha-down5').animate({
			marginTop: '+=10',
		}, 500, function() {
			$('.flecha-down5').animate({
				marginTop: '-=10',
			}, 500, function() {
				animacion()
			});
		});
	}
	animacion();
});



//Copyright © 2017 | Oderbiz

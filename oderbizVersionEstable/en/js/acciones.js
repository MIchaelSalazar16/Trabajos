$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
	$('#toggle ul').click(function(){
		$('#nav-background').toggle(700,function(){
			$('#ul-toggle').css({
				"display":"none"
			});
			$('#toggle img').css({
				"display":"block"
			});
			$('#logo #img1').css({
				"display":"none"
			});
			$('#logo #img2').css({
				"display":"block"
			});
		});
	});
	$('#toggle img').click(function(){
		$('#nav-background').toggle(700,function(){
			$('#ul-toggle').css({
				"display":"block"
			});
			$('#toggle img').css({
				"display":"none"
			});
			$('#logo #img1').css({
				"display":"block"
			});
			$('#logo #img2').css({
				"display":"none"
			});
		});
	});
	$('#nav-fondo').click(function(){
		$('#nav-background').hide(500,function(){
			$('#ul-toggle').css({
				"display":"block"
			});
			$('#toggle img').css({
				"display":"none"
			});
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
			$('#ul-toggle').css({
				"display":"block"
			});
			$('#toggle img').css({
				"display":"none"
			});
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
							$('#ul-toggle').css({
								"display":"block"
							});
							$('#toggle img').css({
								"display":"none"
							});
							$('#logo #img1').css({
								"display":"block"
							});
							$('#logo #img2').css({
								"display":"none"
							});
						});
        }
  });
	$('#EN').css({
		'color':'#EAC141'
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
//Copyright © 2017 | Oderbiz

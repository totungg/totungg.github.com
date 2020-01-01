$(document).ready(function(){
	$('.line').show();
	$('.content #cont:first').show();
	var i=0;
	function navline(o,ot){
		var w = $(o).width();
		var l = $(o).position().left+20;
		var t = $(o).position().top+$(o).outerHeight();
		var h = 2;
		$('.line').stop();
		if(ot){
			$('.line').css({width:w+'px',height:h+'px',left:l+'px',top:t+'px'});
		}else{
			$('.line').animate({width:w+'px',left:l+'px',top:t+'px'});
		}
	}

	navline($('nav ul li'),true);
	$('nav ul li').hover(function(){
		navline($(this));
	},function(){
		navline($('nav ul li').eq(i));
	})

	$('nav ul li').eq(0).addClass('addc');
	$('nav ul li ').click(function(){
		i=$(this).index();
		navline($(this),true);
		$('.content #cont').hide().eq(i).fadeIn();

		if($(this).hasClass('addc')){
			return
		}else{
			$('nav ul li').removeClass("addc");
			$(this).addClass('addc');
		}
	});

	$(window).scroll(function(){
		if($(window).scrollTop()>58){
			$('nav').addClass('navv');
		}else{
			$('nav').removeClass('navv');
			}
	});


})
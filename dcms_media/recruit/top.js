var lh = "";
	lh = location.href;
	if (lh.match(/dcmsadm/)){
	} else {


//ナビ途中から固定
$(window).on('load', function() {
	if (window.matchMedia('(max-width:979px)').matches) {
		$(function() {
			var $win = $(window),
				$main = $('#container'),
				$nav = $('.h_nav_area'),
				$body = $('body'),
				navHeight = $nav.outerHeight(),
				navPos = $nav.offset().top,
				fixedClass = 'h_fixed';
			$win.on('load scroll', function() {
				var value = $(this).scrollTop();
				if ( value > navPos ) {
					$body.addClass(fixedClass);
					$main.css('padding-top', navHeight);
				} else {
					$body.removeClass(fixedClass);
					$main.css('padding-top', '0');
				}
			});
		});
	} else {
		//PC
		$(window).on('scroll', function() {
			//ヘッダー01用
			if($('#header01').hasClass('header01')) {
				var hHL = $('.h_nav_area .inner').outerHeight();
				var hHN = $('.h_lead_area').outerHeight();
				if ($('html,body').scrollTop() > hHL + hHN) {
					$('body').addClass('h_fixed');
					var contA = $('.is_fixed').outerHeight();
					$('#container').css('padding-top',contA + 'px');
				} else {
					$('body').removeClass('h_fixed');
					$('#container').css('padding-top', '0');
				}
			}
			//ヘッダー02用
			if($('#header02').hasClass('header02')) {
				var hHN = $('.h_lead_area').outerHeight();
				if ($('html,body').scrollTop() > hHN) {
					$('body').addClass('h_fixed');
					var contA = $('.is_fixed').outerHeight();
					$('#container').css('padding-top',contA + 'px');
				} else {
					$('body').removeClass('h_fixed');
					$('#container').css('padding-top', '0');
				}
			}
			//ヘッダー03用
			if($('#header03').hasClass('header03')) {
				var hHN = $('.h_lead_area').outerHeight();
				if ($('html,body').scrollTop() > hHN) {
					$('body').addClass('h_fixed');
					var contA = $('.is_fixed').outerHeight();
					$('#container').css('padding-top',contA + 'px');
				} else {
					$('body').removeClass('h_fixed');
					$('#container').css('padding-top', '0');
				}
			}
		});
	}
});


$(document).ready(function(){
	//top mainimage
	$('.flexslider').flexslider({
		animation: "fade",
		slideDirection: "horizontal",
		slideshow: true,  //自動再生
		slideshowSpeed: 4000,
		animationDuration: 800,
		directionNav: true,
		controlNav: true
	});
	//ページ内リンク用スクロール
	$('a[href^=#]').click(function() {
		var speed = 300; // ミリ秒
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
	// biggerlink
	/*$('.bigglink').biggerlink();
	$('.biglink').biggerlink();*/
	// メディア吐き出し用 slide
	$('.media').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		{
			breakpoint: 979,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 690,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
	// matchHeight
	/*$(".matchH").matchHeight();*/
	// rss click
	/*$(".rss_tggle .rss_box dl:gt(0)").wrapAll("<div id='close'></div>");
	$("#rss_open").on("click", function() {
		$("#close").slideToggle();
		$(this).toggleClass("active");
	});*/
	// imgLiquid
	/*$(".imgLiquid").imgLiquid();*/
});
}


	// SP tablet tel
	// if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
	//   $(function() {
	//     $('.sptab_tel').each(function() {
	//       var str = $(this).html();
	//       if ($(this).children().is('img')) {
	//         $(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
	//       } else {
	//         $(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
	//       }
	//     });
	//   });
	// }


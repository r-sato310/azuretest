var lh = "";
	lh = location.href;
	if (lh.match(/dcmsadm/)){
	} else {
		$(function(){
			$('body').addClass('recruit');
		});
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
				var hHN1 = $('.h_lead_area').outerHeight();
				if ($('html,body').scrollTop() > hHL + hHN1) {
					$('body').addClass('h_fixed');
					var contA1 = $('.is_fixed').outerHeight();
					$('#container').css('padding-top',contA1 + 'px');
				} else {
					$('body').removeClass('h_fixed');
					$('#container').css('padding-top', '0');
				}
			}
			//ヘッダー02用
			if($('#header02').hasClass('header02')) {
				var hHN2 = $('.h_lead_area').outerHeight();
				if ($('html,body').scrollTop() > hHN2) {
					$('body').addClass('h_fixed');
					var contA2 = $('.is_fixed').outerHeight();
					$('#container').css('padding-top',contA2 + 'px');
				} else {
					$('body').removeClass('h_fixed');
					$('#container').css('padding-top', '0');
				}
			}
			//ヘッダー03用
			if($('#header03').hasClass('header03')) {
				var hHN3 = $('.h_lead_area').outerHeight();
				if ($('html,body').scrollTop() > hHN3) {
					$('body').addClass('h_fixed');
					var contA3 = $('.is_fixed').outerHeight();
					$('#container').css('padding-top',contA3 + 'px');
				} else {
					$('body').removeClass('h_fixed');
					$('#container').css('padding-top', '0');
				}
			}
		});
	}
});

$(document).ready(function(){

	//ページ内リンク用クラス付け
	$(window).on('load', function() {
		if (window.matchMedia('(max-width:979px)').matches) {
			var contP = $('.h_nav_area').innerHeight();//SP TABLET
		} else {
			var contP = $('.is_fixed').innerHeight();//PC
		}
			var contPM = -contP;
			$('.plink').css('padding-top',contP + 'px');
			$('.plink').css('margin-top',contPM + 'px');
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
	$('.bigglink').biggerlink();
	// ページタイトル スタイル選択 01-08
	$('.pagename').attr('id','pagetitle04');
	// locator　と pagename 入れ替え
	$('.pagename').insertBefore('main.inner');
	$('#locator_t_under').insertAfter('.pagename');
	// gallery
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 690,
				settings: {
					centerMode: true,
					slidesToShow: 3
				}
			}
		]
	});
	// matchHeight
	$(".matchH").matchHeight();
	// colorbox
	$(".colorbox_g").colorbox({
		maxWidth:"90%",
		maxHeight:"90%",
		rel: "group"
	});
	$(".colorbox").colorbox({
		maxWidth:"90%",
		maxHeight:"90%"
	});
	// imgLiquid
	$(".imgLiquid").imgLiquid();
	$(window).on('load resize', function() {
		if (window.matchMedia('(min-width:691px)').matches) {
			$(".imgLiquid_sp").imgLiquid();
		}
	});
});
}

$(window).on('load', function() {
	if (window.matchMedia('(max-width:979px)').matches) {
		//header01 search
		$(".h_search_icon").on("click", function() {
			$(".h_search_sp").slideToggle();
			$(".h_search_icon").toggleClass("active");
		});
	}
});


// SP tablet tel
if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
	$(function() {
	$('.sptab_tel').each(function() {
		var str = $(this).html();
		if ($(this).children().is('img')) {
			$(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
		} else {
			$(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
		}
	});
	});
}


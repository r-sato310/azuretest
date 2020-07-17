var lh = "";
	lh = location.href;
	if (lh.match(/dcmsadm/)){
	} else {


//ナビ途中から固定
$(window).on('load', function() {
	if (window.matchMedia('(max-width:979px)').matches) {
		//SP TABLET
		// $(window).on('scroll', function() {
		// 	//ヘッダー01・02用
		// 	var hHN = $('.h_lead_area').outerHeight();
		// 	if ($('html,body').scrollTop() > hHN) {
		// 		$('body').addClass('h_fixed');
		// 		var contA = $('.h_nav_area').outerHeight();
		// 		$('#container').css('padding-top',contA + 'px');
		// 	} else {
		// 		$('body').removeClass('h_fixed');
		// 		$('#container').css('padding-top', '0');
		// 	}
		// });
		// $(function() {
		// 	var $win = $(window),
		// 		$main = $('#container'),
		// 		$nav = $('.h_nav_area'),
		// 		$body = $('body'),
		// 		navHeight = $nav.outerHeight(),
		// 		navPos = $nav.offset().top,
		// 		fixedClass = 'h_fixed';
		// 	$win.on('load scroll', function() {
		// 		var value = $(this).scrollTop();
		// 		if ( value > navPos ) {
		// 			$body.addClass(fixedClass);
		// 			$main.css('padding-top', navHeight);
		// 		} else {
		// 			$body.removeClass(fixedClass);
		// 			$main.css('padding-top', '0');
		// 		}
		// 	});
		// });
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

	/*var time = 500;
	$('a[href^=#]').click(function() {
		var target = $(this.hash);
		if (!target.length) return ;
		var targetY = target.offset().top;
		$('html,body').animate({scrollTop: targetY}, time, 'swing');
		window.history.pushState(null, null, this.hash);
		return false;
	});*/

	//IE
	/*$(window).on('scroll', function() {
		if ($(this).scrollTop() > 30) {
			$('body').addClass('h_fixed');
		} else {
			$('body').removeClass('h_fixed');
		}
	});*/


	/*$(window).on('load', function() {
		var url = $(location).attr('href'); //ロード後少し時間を置く
		setTimeout(function(){
			if(url.indexOf("?id=") != -1){
				var id = url.split("?id=");
				var $target = $('#' + id[id.length - 1]);
				if($target.length){
					var pos = $target.offset().top;
					$("html, body").animate({scrollTop:pos}, 1500);
				}
			}
		},100);
	});*/

	/*var $win = $(window);
	$win.on('load resize',function(){
	var windowWidth = window.innerWidth;
	if(windowWidth >= 980){
		var headerHight = $('#globalnav01').innerHeight();
		$('a[href^=#]').click(function(){
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
			$("html, body").animate({scrollTop:position}, 550, "swing");
			return false;
		});
	}
	if(windowWidth < 979){
		var headerHight = $('#globalnav01').innerHeight();
		$('a[href^=#]').click(function(){
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
			$("html, body").animate({scrollTop:position}, 550, "swing");
			return false;
		});
	}
	});*/


	// sticky_nav
	/*$(window).on('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$('.sticky_nav').addClass('isis_fixed');
		} else {
			$('.sticky_nav').removeClass('isis_fixed');
		}
		var gnH = $('#globalnav01').innerHeight();
		$('.sticky_nav').css('top',gnH+'px');
	});*/

	// ページタイトル スタイル選択 01-08
	$('.pagename').attr('id','pagetitle05');
	// locator　と pagename 入れ替え
	$('.pagename').insertBefore('main.inner');
	$('#locator_t_under').insertAfter('.pagename');
	// biggerlink
	$('.bigglink').biggerlink();
	$('.biglink').biggerlink();
	//Scrollbar
	$('.rss_f_in').perfectScrollbar();
	// sigle slider
	$('.slider-for-s').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		asNavFor: '.slider-nav-s'
	});
	$('.slider-nav-s').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-for-s',
		dots: false,
		centerMode: true,
		focusOnSelect: true
	});
	$('.sm_k_img').slick({
		dots: false,
		infinite: false,
		speed: 1000,
		autoplaySpeed: 3000,
		fade: true,
		autoplay: true,
		arrows: false,
		cssEase: 'linear'
	});
	// $('#slider').slick({
	// 	autoplay: true,
	// 	autoplaySpeed: 2000,
	// 	arrows: false,
	// 	asNavFor: '#slider-nav'
	// });
	// $('#slider-nav').slick({
	// 	asNavFor: '#slider',
	// 	slidesToShow: 4,
	// 	focusOnSelect: true
	// });
	// slider
	$('.slide').slick({
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
	$(".sub_l_img a").addClass('colorbox');
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
	//locator sp tablet toggle
	$("#sb_col1_2_btn").on("click", function() {
		$(this).next().slideToggle();
		$(this).toggleClass("active");
	});
	// faq
	$(".qa_click_q").on("click", function() {
		$(this).next().slideToggle();
		$(this).toggleClass("active");
	});
	// tab
	$('.tabswitch').tabslet({
		mouseevent: 'click',
		attribute: 'href',
		animation: true
	});
	// rss click
	$(".rss_tggle .rss_box dl:gt(0)").wrapAll("<div id='close'></div>");
	$("#rss_open").on("click", function() {
		$("#close").slideToggle();
		$(this).toggleClass("active");
	});
	// loopslide
	$('#loopSlide ul').simplyScroll({
		autoMode: 'loop',
		speed: 1,
		frameRate: 24,
		horizontal: true,
		pauseOnHover: true,
		pauseOnTouch: true
	});
	$(".sub_k_area").each(function(){
	var set = $(this);
	var btn = set.find(".sub_k_list li a");
	var image = set.find(".sub_k_img img");
		$(btn).hover(function(){
			$(image).attr("src",$(this).attr("href"));
			$(image).attr("alt",$(this).attr("title"));
		});
		$(".sub_k_list a").click(function(){
		return false;
		});
	});
	// thumbnail hover
	$(".sub_l_area").each(function(){
	var set = $(this);
	var btn = set.find(".sub_l_list li a");
	var image = set.find(".sub_l_img img");
		$(btn).hover(function(){
			$(image).attr("src",$(this).attr("href"));
			$(image).attr("alt",$(this).attr("title"));
		});
		$(".sub_l_list a").click(function(){
			return false;
		});
	});
	// imgLiquid
	$(".imgLiquid").imgLiquid();
	$(window).on('load resize', function() {
		if (window.matchMedia('(min-width:691px)').matches) {
			$(".imgLiquid_sp").imgLiquid();
		}
	});
	// sp header contact
	/*$("#sp_hcontact_btn .ocbtn").on("click", function() {
		$("#sp_hcontact_nav").slideToggle();
		$("#sp_hcontact_btn .ocbtn").toggleClass("active");
	});*/
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


	//header02.scss fix
	/*$(window).on('scroll', function() {
		if ($(this).scrollTop() > 30) {
			$('.h_nav_area').addClass('is_fixed');
		} else {
			$('.h_nav_area').removeClass('is_fixed');
		}
	});*/
	//header
	/*var $win = $(window);
	$win.on('load resize',function(){
	var windowWidth = window.innerWidth;
	if(windowWidth >= 690){
		var nav = jQuery('.h_menu');
		var offsetTop = nav.offset().top;
		var floatMenu = function() {
			if (jQuery(window).scrollTop() > offsetTop) {
				nav.addClass('fixed');
			} else {
				nav.removeClass('fixed');
			}
		}
		jQuery(window).scroll(floatMenu);
		jQuery('body').bind('touchmove', floatMenu);
	}
	});*/

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


/*$win.on('load resize',function(){
var windowWidth = window.innerWidth;
if(windowWidth <= 980){
	var hH = $('.header_in').innerHeight();
	$('.pagename').css('margin-top',hH+'px');
}
});*/

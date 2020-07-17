/*-------------------------------
for IE8 care..setFlg
-------------------------------*/
var _userAgent = navigator.userAgent;
function isIe(ver) {
    if (_userAgent.indexOf('MSIE')!=-1) {
        if (ver==undefined) {
            return true;
        } else {
            if (_userAgent.indexOf('MSIE '+ver)!=-1) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}


/*global jRespond */
var jPM = {};
jQuery(document).ready(function() {
	
	// Navigation Fixed
	jQuery(".navbar-fixed-top").size() > 0 && jQuery("html").addClass("has-navbar-fixed-top");

	// Tool tips
	jQuery().tooltip && jQuery("body").tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body"
	});


	// Popovers
	jQuery().popover && jQuery("body").popover({
		selector: "[data-toggle=popover]",
		container: "body",
		trigger: "hover"
	});


	// Menu toggle 
	// jQuery("html").themeSubMenus();

	// 
	// jQuery("[data-page-class]").each(function() {
	// 	jQuery("html").addClass(jQuery(this).data("page-class"))
	// });


	// Toggle button setting
	jQuery("[data-toggle=show-hide]").each(function() {
		jQuery(this).click(function() {
			var e = "open",
				t = jQuery(this).attr("data-target"),
				n = jQuery(this).attr("data-target-state");
			typeof n != "undefined" && n !== !1 && (e = n);
			e === "undefined" && (e = "open");
			jQuery(t).toggleClass("show-hide-" + e);
			jQuery(this).toggleClass(e)
		})
	});

	// Subnavigation vanishing
	if (jQuery("#subnav div").length == 0) {
		jQuery("#subnav").css("padding",0);
		jQuery(".sidenav-xs-btn").css("display","none");
	};

	// Mobile Menu 
	// if (jQuery.jPanelMenu && jQuery("[data-toggle=jpanel-menu]").size() > 0) {
	// 	var t = jQuery("[data-toggle=jpanel-menu]");
	// 	jPM = jQuery.jPanelMenu({
	// 		menu: t.data("target"),
	// 		direction: "left",
	// 		trigger: "." + t.attr("class"),
	// 		excludedPanelContent: ".jpanel-menu-exclude",
	// 		openPosition: "280px",
	// 		afterOpen: function() {
	// 			t.addClass("open");
	// 			jQuery("html").addClass("jpanel-menu-open")
	// 		},
	// 		afterClose: function() {
	// 			t.removeClass("open");
	// 			jQuery("html").removeClass("jpanel-menu-open")
	// 		}
	// 	});


		// var n = jRespond([{
		// 	label: "small",
		// 	enter: 0,
		// 	exit: 991
		// }]);
		// n.addFunc({
		// 	breakpoint: "small",
		// 	enter: function() {
		// 		// $(".flexnav-show").slideDown();
		// 		$("[data-toggle=jpanel-menu]").click(function(){
		// 			$(".flexnav-show").slideDown();
		// 		});
		// 		// alert("test");
		// 	},
		// 	exit: function() {
		// 		$(".flexnav-show").slideUp();
		// 		// alert("test");
		// 	}
		// });
	// };

});

// jQuery Extends
jQuery.fn.extend({
	themeSubMenus: function() {
		// jQuery("ul.dropdown-menu [data-toggle=dropdown]", jQuery(this)).on("live", function(e) {
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// 	jQuery(this).parent().toggleClass("open");
		// 	// alert("test");
		// })
	}
});



// page specific plugin calling

$(function () {
	// 
	jQuery("[data-toggle=jpanel-menu]").click(function (e){
		$(".header-search-box").removeClass("open");
		$(".search-trigger01").find("i").removeClass("open");

		e.stopPropagation();
		var $tagetDiv= $(".header-menu-collapse");
		// $(".search-trigger01").find("i").removeClass("fa-times").addClass("fa-search");
		$(".header-menu-box").toggleClass("open");
		$(this).find("i").toggleClass("open");
	});
	

	// 検索バーのトグル
	$(".search-trigger01").click(function (e) {
		$(".header-menu-box").removeClass("open");
		e.stopPropagation();
		var $tagetInput= $(".header-search-collapse");
		// $(".search-trigger01").find("i").removeClass("fa-times").addClass("fa-search");
		$(".header-search-box").toggleClass("open");
		$(this).find("i").toggleClass("open");
		$(".header-search-box").find("input").focus();
	});

	
	$(document).on('click','.header-sidenav01', function(evt) {
	  	evt.stopPropagation();
		$(".header-menu-box").removeClass("open");
	});

	$(document).on('click','.header-menu-box', function(evt) {
	 	evt.stopPropagation();
		$(".header-search-box").removeClass("open");
	});


	$(document).on('click', 'html', function() {
		$(".header-search-collapse").removeClass("open").blur();
		$(".header-search-box").removeClass("open");
		$(".header-menu-box").removeClass("open");
		$(".search-trigger01").find("i").removeClass("open");
	});

});
/*---------------------------------------------
	Slide Menu
  ---------------------------------------------*/

(function($){
$(document).ready(function() {

	var open = 0;

	/*$("#gnav_btn01").click(function() {
		$(this).blur();
		var $gnav = $("#globalnav_in ul");
		var gnavHeight = $gnav.height();
		if(!open) {
			open = 1;
			$(this).addClass("current");
			$gnav.css({display:"block", marginTop:-gnavHeight+"px"}, 300, "swing").animate({marginTop:"0"});
		} else {
			open = 0;
			$(this).removeClass("current");
			$gnav.animate({marginTop:-gnavHeight+"px"}, 300, "swing", function() {
				$(this).removeAttr("style");
			});
		}
		return false;
	});*/


	//gnavi
	$("#gnav_btn").on("click", function() {
		$("#globalnav").slideToggle();
		$(this).toggleClass("active");
	});

	//gnavi
	$(".h_search_icon").on("click", function() {
		$(".h_search_sp").slideToggle('fast');
		$(this).toggleClass("active");
	});

});
})(jQuery);
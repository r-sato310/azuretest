var lh = "";
	lh = location.href;
	if (lh.match(/dcmsadm/)){
	} else {
$(document).ready(function(){
	//ぱんくず
	$('.ible-part__widjet--breadcrumbs .ible-part__core').each(function(){
		var txt= $(this).html();
		$(this).html(txt.replace('TOP','製品情報'));
    });
    //
    $('.tab07_db_title').before($('.tab07_db_area .ible-pager:first-child'));
	$('.ible-part__widjet--breadcrumbs .ible-part__core').prepend('<a href="/">TOP</a> ＞ ');
	//右サイド カテゴリナビ
	$('.db_categorynav ul ul').before('<div class="acobtn"><!--btn--></div>');
	$('.acobtn').on('click', function() {
		$(this).next().slideToggle();
		$(this).toggleClass('on');
		$(this).next().addClass('active');
		return false;
	});
	//TOP 背景画像
	$(".imgLiquid").imgLiquid();
	//アイテム・カテゴリリスト・詳細 関連製品 エリアリンク
	$('.b_link').biggerlink();
	$('.b_link_list .search-result-cell').biggerlink();
	//アイテムリスト 価格帯高さ取得
	$(window).on('load', function() {
		if (window.matchMedia('(min-width:690px)').matches) {
			var hHN2 = $('.t-default .item_list_ver02 .item_list_ver02_txt').outerHeight();
			$('.t-default .item_list_ver02 .item_list_ver02_txt .item_list_price').css('height',hHN2 + 'px');
		}
	});
	//詳細 カンマ区切り
	$('#pragraph9core').each(function(){
		var txt = $(this).html();
		$(this).html(
			txt.replace(/,/g,"</span><span>")
		);
	});
	//詳細 製品画像切り替え
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
	//詳細 商品仕様
	$('.item_spec_d').wrapAll('<div class="item_spec_wrap"></div>');
	$(".item_spec_wrap > div:gt(3)").css("display", "none");
	$(".item_spec_wrap > div:lt(4)").css("display", "inline-block");
	$('.item_spec_txt_tabin').wrapAll('<div class="item_spec_tab_r item_spec_tabtab"></div>');
	//詳細 表高さ合わせ
	$('.item_spec_txt_tabin').tile();
});

}














<!--
//管理画面上で動作させないための分岐
var lh = "";
	lh = location.href;
 	if (lh.match(/dcmsadm/)){
	} else {
	//動作させたくない記述 START


$(document).ready(function(){

	/*参照するページのURLとIDを指定する*/
	var url_plusdb = '/plusdb/ #listgrid4col1';
	/*読み込ませるページ内のIDを指定*/
	$("#top_db").empty();
	$("#top_db").load(url_plusdb);

	/*参照するページのURLとIDを指定する*/
	var url_plusdb = '/plusdb/category1/ #listgrid1col1 .ible-list';
	/*読み込ませるページ内のIDを指定*/
	$("#sub_db_main").empty();
	$("#sub_db_main").load(url_plusdb);

	/*参照するページのURLとIDを指定する*/
	var url_plusdb = '/plusdb/category1/ #listgrid1col1 .ible-list';
	/*読み込ませるページ内のIDを指定*/
	$("#sub_db").empty();
	$("#sub_db").load(url_plusdb);

	/*参照するページのURLとIDを指定する*/
	var url_plusdb = '/plusdb/ #listgrid4col1';
	/*読み込ませるページ内のIDを指定*/
	$("#db_newproducts").empty();
	$("#db_newproducts").load(url_plusdb);

	/*参照するページのURLとIDを指定する*/
	var url_plusdb = '/plusdb/category1/ #listgrid1col1 .ible-list';
	/*読み込ませるページ内のIDを指定*/
	$("#db_maincate1").empty();
	$("#db_maincate1").load(url_plusdb);

});


	//動作させたくない記述 END
}
-->
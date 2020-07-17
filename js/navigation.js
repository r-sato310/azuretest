$(function(){




$(window).on('load resize',function(){
    var win = $(window).width();
    if(win < 690){
      $("#gnav").hide();
    } else {
      $("#gnav").show();
    }
});
  $("#gnavbtn").click(function(){
    $(this).toggleClass("active");
    $("#sp_gnavbtn p").toggleClass("none");
    $("#gnav").slideToggle();
    return false;
  });




});



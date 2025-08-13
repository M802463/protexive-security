$(document).ready(function(){
			
	$(window).scroll(function(){

		if($(window).scrollTop() > 40)
		{
			$(".top_arrow").fadeIn();
			$(".fix_nav").css("position", "fixed");
			$(".fix_nav").css("top", 0);
			$(".fix_nav").css("padding", "0");
			$(".fix_nav").css("z-index", "9999");
			$(".fix_nav").css("background-color", "#fff");
			$(".fix_nav").css("box-shadow", "0 -3px 9px 1px #ccc");
			$(".fix_nav2").css("position", "fixed");
			$(".fix_nav2").css("top", 0);
			$(".fix_nav2").css("padding", "0");
			$(".fix_nav2").css("z-index", "9999999");
			$(".fix_nav2").css("background-color", "#fff");
			$(".fix_nav2").css("box-shadow", "0 -3px 9px 1px #ccc");
		}
		else
		{
			$(".top_arrow").fadeOut();
			$(".fix_nav").css("top", "inherit");
			$(".fix_nav").css("position", "static");
			$(".fix_nav").css("padding", "0px 0px");
			$(".fix_nav").css("background-color", "transparent");
			$(".fix_nav").css("box-shadow", "none");
			$(".logo2 .fa").css("color", "#000");
			$(".fix_nav2").css("top", "inherit");
			$(".fix_nav2").css("position", "static");
			$(".fix_nav2").css("padding", "0px 0px");
			$(".fix_nav2").css("background-color", "transparent");
			$(".fix_nav2").css("box-shadow", "none");
		}
	});

	//////////////////////////////////////
	
	$(".top_arrow").click(function(){
		$("body,html").animate({
			"scrollTop":0
		});
	});

	
});

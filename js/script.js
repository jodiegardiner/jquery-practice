$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

	$("p").on("click", function() {
		$("p").css("color", "red");
	});

	$("h2").mouseenter(function() {
		$("h2").addClass("header_light");
	});

	$("h2").hover(function(){
		$(this).addClass("header_hover");
	}, function(){
		$(this).removeClass("header_hover");
	});

	$("h2").mouseleave(function() {
		$("h2").removeClass("header_light");
	})
	
	$(".bottom_button").hover(function(){
		$("body").addClass("mouse_on");
	}, function(){
		$("body").removeClass("mouse_on");
		// $("body").addClass("mouse_on2");
	});
}); 

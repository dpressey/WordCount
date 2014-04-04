$(document).ready( function( ) {
	// fading the header
	$("h1").on("mouseenter", function (){
		$(this).fadeTo(100, 0.5);
	});
	$("h1").on("mouseleave", function (){
		$(this).fadeTo(100, 1);
	});

	// fading the italicized header
	$("h4").on("mouseenter", function (){
		$(this).fadeTo(100, 0.5);
	});
	$("h4").on("mouseleave", function (){
		$(this).fadeTo(100, 1);
	});

	//create counter box
	var counterBox = "<div id=\"counterBox\"></div>";

	// create counter text
	var counterText = "<p>Total Word Count: </p>";

	// append newly created elements
	$("body").append(counterText).append(counterBox);

	// add a change listener that updates letter count
	$("textarea").on("change", function(){
		var letterArray = $("textarea").val().split(' ');
		$("#counterBox").html(letterArray.length);
	});
	
});
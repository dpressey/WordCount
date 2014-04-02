$(document).ready( function( ) {
	// fading the header
	$("h1").on("mouseenter", function (){
		$(this).fadeTo(100, 0.5);
	});
	$("h1").on("mouseleave", function (){
		$(this).fadeTo(100, 1);
	});

	//create counter box
	var counterBox = "<div id=\"counterBox\"></div>";

	// create counter text
	var counterText = "<p>Total Word Count is: </p>";

	// append newly created elements
	$("body").append(counterText).append(counterBox);

	// add a change listener that updates word count
	$("textarea").on("change", function(){
		var strArray = $("textarea").split("");

		// gets the value in the textarea and split it's
		// content by a space 
	});
	
});
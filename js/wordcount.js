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

	var focusCount = 0;
	var textArea = $("textarea").val();

	// add a focus listener that updates word count
	$("textarea").on("focus", function(){
		// NEEDS FIXING BELOW
		
		if (textArea != " ") {
		// gets the value in the textarea and split it's
		// content by a space
			var strArray = textArea.split(" ");
			$("#counterBox").html(strArray.length);
		}
		//focusCount++;
	});
	
});
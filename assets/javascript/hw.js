//Intiail Array of Standups
var comics = ["Richard Pryor", "John Pinette", "Amy Schumer", "Dave Chappelle", "Kathleen Madigan"];

//function to create buttons dynamically
function buttonCreation() {
	//Deleting the button prior to adding a new one.
	//This is needed so we won't get repeat buttons.

	$("#comedianButton").empty();

	//Looping through the array of comics
	for (var i = 0; i < comics.length; i++) {
		// Dynamically creating the buttons
		var comicName = $("<button>");
		//adding a class
		comicName.addClass("comedian");
		comicName.attr("data-name", comics[i]);
		comicName.text(comics[i]);
		$("#comedianButton").append(comicName);
	}
}

//This function handles events where one button is clicked
$("#addComic").on("click", function(event) {
	event.preventDefault();

	//Adding the comic from the textbox to our comics array
	comics.push(comedian);
	console.log(comics)

	//Calling the buttonCreation function
	buttonCreation();
});


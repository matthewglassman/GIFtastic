//Intial Array of Standups
var comics = ["Richard Pryor", "John Pinette", "Amy Schumer", "Dave Chappelle", "Kathleen Madigan"];

function renderButtons() {
	$("#comedianButton").empty();
	for(var i = 0; i < comics.length; i++) {
		var a = $("<button>");
		a.addClass("comic");
		a.attr("data-name", comics[i]);
		a.text(comics[i]);
		$("#comedianButton").append(a);
	}
}

$("#addComic").on("click", function(event) {
	event.preventDefault();
	var comedian = $("#standupComic").val().trim();
	comics.push(comedian);

renderButtons();
});

renderButtons();
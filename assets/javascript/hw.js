//GIPHY API public key dc6zaTOxFJmzC

//Intial Array of Standups
var comics = ["Richard Pryor", "Dom Irrera", "Amy Schumer", "Dave Chappelle", "Kathleen Madigan"];

function displayComicGiphy() {
$("button").on("click", function() {
	//$("#comicGIF").empty();
	var comedian = $(this).data("name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + comedian + "&api_key=dc6zaTOxFJmzC&limit=10";
	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response){
		var results = response.data;
		for (var i = 0; i < results.length; i++){
			var standupDiv = $("<div class='standup'>");
			var rating = results[i].rating;
			var p = $("<p>").text("Rating: " + rating);
			var comicsImage = $("<img>");
			comicsImage.attr("src", results[i].images.fixed_height.url);
			standupDiv.append(p);
			standupDiv.prepend(comicsImage);
			$("#comicGIF").prepend(standupDiv);
		}
	});
});
}

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



// $("#addComic").on("click", function(event) {
// 	event.preventDefault();
// 	var comedian = $("#standupComic").val().trim();
// 	comics.push(comedian);

// renderButtons();
// });

$("#comedianButton").on("click", ".comic", displayComicGiphy);

renderButtons();
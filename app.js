var athletes = ["Tom Brady", "Von Miller", "Kevin Durant", "Tiger Woods"];

function clearGifs () {

}

function renderButtons() {
  $("#athletes-searched").empty();

  for (var i = 0; i < athletes.length; i++) {
    var button = $("<button>");

    button.addClass("athletes");

    button.attr("data-athlete", athletes[i]);

    button.text(athletes[i]);

    $("#athletes-searched").append(button);
  }
}

$("#search-btn").on("click", function(event) {
  event.preventDefault();

  var athlete = $("#athlete-search")
    .val()
    .trim();

  athletes.push(athlete);
  console.log(athletes);

  renderButtons();
});

$("#gif-images").on("click", ".athlete-gif", function(){
var state = $(this).attr("data-state");

if (state === "still") {
    $(this).attr("src", $(this).attr("data-moving"));
    $(this).attr("data-state", "moving");
    console.log(state);
} else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
}

});

$("#athletes-searched").on("click", ".athletes", function() {
  $("#gif-images").empty();
  
    var athlete = $(this).attr("data-athlete");
  console.log(athlete);
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    athlete +
    "&api_key=WYGgMrlxDsmGoMH8sz1FRg9P8pFZ7nry&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.data;
    console.log(results);
    for (var i = 0; i < results.length; i++) {
      var athleteDiv = $("<div>");
      athleteDiv.addClass("athlete-div");

      var p = $("<p>").text("Rating: " + results[i].rating);

      var athleteImage = $("<img>");
      var still = results[i].images.original_still.url;
      var moving = results[i].images.original.url;
      athleteImage
        .attr("src", still)
        .attr("data-still", still)
        .attr("data-moving", moving)
        .attr("data-state", "still")
        .attr("class", "athlete-gif");

      console.log(athleteImage.attr("src"));
      athleteDiv.append(p);
      athleteDiv.append(athleteImage);
      // console.log(athleteImage);
      $("#gif-images").prepend(athleteDiv);
    }
  });
});

renderButtons();

var athletes = ["Tom brady", "Von Miller", "Kevin Durant", "Tiger Woods"];




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

        
        var athlete = $("#athlete-search").val().trim();

       
        athletes.push(athlete);
        console.log(athletes);


        renderButtons();
      });

    //   $("button").on("click", function() {
    //     var athlete = $(this).attr() 
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?" +
    //         athlete + "WYGgMrlxDsmGoMH8sz1FRg9P8pFZ7nry";
            
    //         $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //         }).then (function(response){
    //             var results = response.data;
                
    //             for (var i = 0; i <results.length; i++){
    //                 var athleteDiv = $("<div>");
    
    //                 var p = $("<p>").text("Rating: " + results[i].rating);
    
    //                 var athleteImage = $("<img>");
    
    //                 athleteImage.attr("src", results[i].images.url);
    
    //                 athleteDiv.append(p);
    //                 animalDiv.append(athleteImage);
    
    //                 $("#gif-images").prepend(athleteDiv);
    //             }
                
    //         }) 
                
            
        
        
        
        
        
    // });

      renderButtons();
      
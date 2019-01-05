/*
HOST: api.giphy.com
GIPHY API KEY: YfTTp6H2HDR02OTPxGMDAvq0j4waEWYa
PATH: /v1/gifs/search
*/ 

// GLOBAL VARIABLES
let comedians = ["Jerry Seinfeld",
                "Kevin Hart",
                "Dave Chappelle",
                "Robin Williams",
                "Russell Peters",
                "Chris Rock",
                "Ellen Degeneres",
                "Wanda Sykes",
                "Seth Rogen",
                "Amy Schumer",
                "Melissa McCarthy",
                "Eddie Murphy"];
let gifCount = 10;
let limitRating = "PG";

$(document).ready(function(){

// FUNCTIONS
// This function takes the array of comedians and creates individual buttons for each person using the for loop.
function arrayButtons() {
    for(let i = 0; i < comedians.length; i++) {
        let comedianButton = $("<button>");
        // The comedian names will be sorted in alphabetical order.
        comedians.sort();
        comedianButton.text(comedians[i]);
        comedianButton.addClass("comedianButton");
        $("#comedian-buttons").append(comedianButton);
    };
    // This click function will display the gifs from the GIPHY API when the comedianButton is clicked.
    $(".comedianButton").on("click", function() {
        $(".gifs-holder").empty();
        searchGiphy($(this).text());
    });
};
// This function will search for the comedian entered by the user and then push the name to the comedians array if their button does not already exist.
function buttonAddComedian(person) {
    if(comedians.indexOf(person) === -1) {
        comedians.push(person);
        $("#comedian-buttons").empty();
        arrayButtons();
    };
};

// This function will use AJAX to fetch the API data from the GIPHY url below.
function searchGiphy(person) {
    let url = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=YfTTp6H2HDR02OTPxGMDAvq0j4waEWYa&rating=" + limitRating + "&limit=" + gifCount;
    $.ajax({
        url: url,
        method: "GET",
    }).then(function(response) {
        let results = response.data;
        results.forEach(function(element) {
            // Need a new div tag to store the ratings.
            let addDiv = $("<div>");
            addDiv.append("<p>Rating: " + element.rating.toUpperCase() + "</p>");
            addDiv.attr("align", "center");
            addDiv.addClass("gif-box");
            // Need a new img tag to store the gifs.
            let newGiphy = $("<img src = '" + element.images.fixed_height_still.url + "'>");
            newGiphy.attr("data-state", "still");
            newGiphy.attr("data-stil", element.images.fixed_height_still.url);
            newGiphy.attr("data-animated", element.images.fixed_height.url);
            newGiphy.addClass("giphy");
            // Add the newGiphy variable to the addDiv variable
            addDiv.append(newGiphy);
            // Add the addDiv variable to the .gifs-holder id
            $(".gifs-holder").append(addDiv);
        });
        
        // Click function for if/else conditional statement to define which gif is to play or pause
        $(".giphy").on("click", function() {
            let state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animated"));
                $(this).attr("data-state", "animated");
            } else {
                $(this).attr("src", $(this).attr("data-stil"));
                $(this).attr("data-state", "still");
            };
        });
    });
}
    // CALL FUNCTIONS
    arrayButtons();
    $("#add-comedian").on("click", function() {
        event.preventDefault();
        let person = $("#user-input").val();
            buttonAddComedian($("#user-input").val().trim();
            $("#user-input").val("");
    });
});


 
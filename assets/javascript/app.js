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
let person = $(".user-input").val()

$(document).ready(function(){

// Takes the array of comedians and creates buttons for each person when the page loads.
function arrayButtons() {
    for(let i = 0; i < comedians.length; i++) {
        let comedianButton = $("<button>");
        // The comedian names will be sorted in alphabetical order.
        comedians.sort();
        comedianButton.text(comedians[i]);
        comedianButton.addClass("comedianButton");
        $("#comedian-buttons").append(comedianButton);      
    };
    // This function will 
    $(".comedianButton").on("click", function() {
        $(".gifs").empty();
        searchGiphy($(this).text());
    });
}

function buttonAddComedian(person) {
    if(comedians.indexOf(person) === -1) {
        comedians.push(person);
        $("#comedian-buttons").empty();
        arrayButtons();
    }
}

function searchGiphy(person) {    
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=YfTTp6H2HDR02OTPxGMDAvq0j4waEWYa&rating=" + 
        limitRating + "&limit=" + gifCount,
        method: "GET",
    }).then(function(response) {
        response.data.forEach(function(element) {
            let addDiv = $("<div>");
            addDiv.append("<p>Rating: " + element.rating.toUpperCase() + "</p>");
            addDiv.addClass("gif-box");
            let newGiphy = $("<img src = '" + element.images.fixed_height_still.url + "'>");
            newGiphy.attr("state", "still");
            newGiphy.attr("still-data", element.images.fixed_height_still.url);
            newGiphy.attr("animated-data", element.images.fixed_height.url);
            newGiphy.addClass("giphy");
            addDiv.append(newGiphy);
            $(".gifs").append(addDiv);
        })
        
        $(".giphy").unbind("click");
        $(".giphy").on("click", function() {
            if ($(this).attr("state") === "still") {
                $(this).attr("state", "animated");
                $(this).attr("src", $(this).attr("animated-data"));
            } else {
                $(this).attr("state", "still");
                $(this).attr("src", $(this).attr("still-data"));
            }
        });
    });
}

    arrayButtons();
    $("#add-comedian").on("click", function() {
        event.preventDefault();
        buttonAddComedian($("#user-input").val().trim());
        $("#user-input").val("");
    });
});


 
/*
GIPHY API KEY: YfTTp6H2HDR02OTPxGMDAvq0j4waEWYa
HOST: api.giphy.com
PATH: /v1/gifs/search
*/ 
 
let comedians = ["Jerry Seinfeld",
                "Kevin Hart",
                "Dave Chappelle",
                "Garbiel Iglesias",
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


function arrayButtons() {
    for(let i = 0; i < comedians.length; i++) {
        let comedianButton = $("<button>");
        comedians.sort();
        comedianButton.text(comedians[i]);
        comedianButton.addClass("comedianButton");
        $("#comedian-buttons").append(comedianButton);  
    }
    
    $(".comedianButton").on("click", function(){
    });
}

function createButton(people){

}

function searchGiphy(people){
    const endpoint = "http://api.giphy.com/v1/gifs/search?q=" + people;
    const params = + "&api_key=YfTTp6H2HDR02OTPxGMDAvq0j4waEWYa&rating=" + limitRating + "&limit=" + gifCount;
    const url = endpoint + params;
    console.log(url);
        
    $.ajax({
        url: url,
        method: "GET",
    })
}











$(document).ready(function(){
    arrayButtons();

});


 
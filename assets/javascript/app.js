// 1) When the page loads, the list of comedians below will appear inside buttons.
// 2) 


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
                "Melissa McCarthy"];
let gifCount = 10;
let limitRating = "PG";

function createButtons() {
    for(let i = 0; i < comedians.length; i++) {
		let comedianButton = $("<button>");
        comedianButton.text(comedians[i]);
        comedianButton.addClass("comedianButton");
		$("#comedian-buttons").append(comedianButton);
    }
    
    $(".comedianButton").on("click", function(){
        
    })
	

}

$(document).ready(function(){
    createButtons();

});


 
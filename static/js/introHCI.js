'use strict';

// Call this function when the page loads (the "ready" event)


$(document).ready(function() {
	initializePage();
})
/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("CLICK");
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$(".jumbotron p").addClass("active");
		$(".jumbotron p").toggleClass(".active");
		console.log("cldwws");
			});

    $(".thumbnail").click(projectClick);
    console.log("CLIck222")

    

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e) {
    e.preventDefault();
    $(this).css("background-color", "#8c7dc9");
    var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
    $(".jumbotron p").fadeToggle("active");
    $(".project").animate({"width": 200}, 1000);
    $(".project").toggle(1000);
    console.log("CLICK444");
    
}
function toggle_element(e, speed) {
	$(e).toggle(speed);
}
$(".jumbotron p").toggle(100000);
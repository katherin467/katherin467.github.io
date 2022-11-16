// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// probably don't need anything yet
    console.log("boom baby");
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function expandHamburg() {
	var x = document.getElementById("myTopnav");
	 if (x.className === "navbar") {
	   x.className += " responsive";
	 } else {
	   x.className = "navbar";
	 }
}
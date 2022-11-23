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

var hamburgOpen = false;

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function expandHamburg() {
	var x = document.getElementById("myTopnav");
	if (x.className === "navbar") {
		x.className += " responsive";
		hamburgOpen = true;
	} else {
		x.className = "navbar";
		hamburgOpen = false;
	}
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("myTopnav").style.top = "0";
	} else {
		if (hamburgOpen == false && currentScrollPos > 100) {
		document.getElementById("myTopnav").style.top = "-100px";}
	}
	prevScrollpos = currentScrollPos;
}
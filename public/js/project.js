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
function closeHamburg() {
	var x = document.getElementById("myTopnav");
	if (x.className === "navbar responsive") {
		hamburgOpen = false;
		x.className = "navbar";
		console.log(x.className);
	}
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (document.getElementById("projectslink") != null) {
		var projectLinkRect = document.getElementById("projectslink").getBoundingClientRect();
		var projectLinkPos = projectLinkRect.bottom;
	}

	// Show/hide navbar on scroll
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("myTopnav").style.top = "0";
	} else {
		if (hamburgOpen == false && currentScrollPos > 100) {
		document.getElementById("myTopnav").style.top = "-100px";}
	}
	// Change nav link colors if we're on homepage and we're past project point
	if (document.getElementById("projectslink") !== null) {
		if (projectLinkPos < 0) {
				document.getElementById("navwork").style.color = '#bc82fd';
				document.getElementById("navhome").style.color = 'black';
			} else {
				document.getElementById("navwork").style.color = 'black';
				document.getElementById("navhome").style.color = '#bc82fd';
			}
	}
	
	prevScrollpos = currentScrollPos;
}
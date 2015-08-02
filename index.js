
function showAbout() {
	
	document.getElementsByClassName("current-tab")[0].className = document.getElementsByClassName("current-tab")[0].className.replace( /(?:^|\s)current-tab(?!\S)/g , '' );
	document.getElementById("cardTab1").className += " current-tab";
	
	document.getElementsByClassName("current-section")[0].className = document.getElementsByClassName("current-section")[0].className.replace( /(?:^|\s)current-section(?!\S)/g , '' );
	document.getElementById("cardSection1").className += " current-section";
}

function showTweets() {
	
	document.getElementsByClassName("current-tab")[0].className = document.getElementsByClassName("current-tab")[0].className.replace( /(?:^|\s)current-tab(?!\S)/g , '' );
	document.getElementById("cardTab2").className += " current-tab";
	
	document.getElementsByClassName("current-section")[0].className = document.getElementsByClassName("current-section")[0].className.replace( /(?:^|\s)current-section(?!\S)/g , '' );
	document.getElementById("cardSection2").className += " current-section";
}

function showBlog() {
	document.getElementsByClassName("current-tab")[0].className = document.getElementsByClassName("current-tab")[0].className.replace( /(?:^|\s)current-tab(?!\S)/g , '' );
	document.getElementById("cardTab3").className += " current-tab";
	
	document.getElementsByClassName("current-section")[0].className = document.getElementsByClassName("current-section")[0].className.replace( /(?:^|\s)current-section(?!\S)/g , '' );
	document.getElementById("cardSection3").className += " current-section";
}
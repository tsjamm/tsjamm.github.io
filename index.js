
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
	
	document.getElementById("twitter-widget-0").height = document.getElementById("cardInfoSectionWrapper").clientHeight
	document.getElementById("twitter-widget-0").width = document.getElementById("cardInfoSectionWrapper").clientWidth
}

function showBlog() {
	
	/*
	document.getElementById("blogIFrame").src = "http://www.tsjamm.com";
	
	document.getElementsByClassName("current-tab")[0].className = document.getElementsByClassName("current-tab")[0].className.replace( /(?:^|\s)current-tab(?!\S)/g , '' );
	document.getElementById("cardTab3").className += " current-tab";
	
	document.getElementsByClassName("current-section")[0].className = document.getElementsByClassName("current-section")[0].className.replace( /(?:^|\s)current-section(?!\S)/g , '' );
	document.getElementById("cardSection3").className += " current-section";
	*/
	window.open("http://www.tsjamm.com",'_target')
}
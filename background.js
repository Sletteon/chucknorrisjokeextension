function httpGet(theUrl)
{
	    var xmlHttp = new XMLHttpRequest();
	        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
		    xmlHttp.send( null );
		        return xmlHttp.responseText;
}
chrome.browserAction.onClicked.addListener(function(tab) {
	var joke = httpGet('https://api.chucknorris.io/jokes/random')
    alert(joke);
    chrome.tabs.executeScript(tab.id, {file: "content_script.js"})
});

function httpGet(theUrl)
{
	    var xmlHttp = new XMLHttpRequest();
	        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
		    xmlHttp.send( null );
		        return xmlHttp.responseText;
}

chrome.browserAction.onClicked.addListener(function(tab) {
	var joke = httpGet('https://api.chucknorris.io/jokes/random');
	var parsedjoke = JSON.parse(joke)
	var tenylegjoke = parsedjoke.value;
    alert(tenylegjoke);
    console.log(parsedjoke)
    chrome.tabs.executeScript(tab.id, {file: "content_script.js"})
});

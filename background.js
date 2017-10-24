// szedje le a netről a viccet
function httpGet(theUrl)
{
	    var xmlHttp = new XMLHttpRequest();
	        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
		    xmlHttp.send( null );
		        return xmlHttp.responseText;
}
// szedje ki az api által küldött mapból a value-t (viccet)
function parse_and_getvalue(raw_joke) {
	// írja ki logba a nyers viccet, debugging célok
	console.log(raw_joke)
	return JSON.parse(raw_joke).value;

}
// amikor a felhasználó a gombra kattint, kérjen le a weboldalról egy random viccet
chrome.browserAction.onClicked.addListener(function(tab) {
	joke = parse_and_getvalue(httpGet('https://api.chucknorris.io/jokes/random'));
	alert(joke);
	chrome.tabs.executeScript(tab.id, {file: "content_script.js"});
});
a
a
a
abstract
abstracta

a
abstractaa
a

awaita
a

abstracta
a
a
abstracta

abstractaa

a
// szedje le a netről a viccet
// Forrás: https://stackoverflow.com/questions/247483/http-get-request-in-javascript
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

joke = parse_and_getvalue(httpGet('https://api.chucknorris.io/jokes/random'));
document.write(joke);

  chrome.browserAction.onClicked.addListener(function(tab) { 
                // joke = parse_and_getvalue(httpGet('https://api.chucknorris.io/jokes/random'));
                // document.getElementById("p1").innerHTML = joke;
		chrome.tabs.executeScript(null, {file: "popup.js"});
        });
chrome.browserAction.onClicked.addListener(function(tab) {
    alert("Boi Oh Boi");
    chrome.tabs.executeScript(tab.id, {file: "content_script.js"})
});
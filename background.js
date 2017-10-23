chrome.browserAction.onClicked.addListener(function(tab) {
    var vicc = 'striiiing';
    alert(vicc);
    chrome.tabs.executeScript(tab.id, {file: "content_script.js"})
});
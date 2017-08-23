/**
 * Created by upsmart on 17-8-22.
 */
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.create({'url': chrome.extension.getURL('background.html')}, function(tab) {
    // Tab opened.
  });
});

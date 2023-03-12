// background.js

console.warn("Railwynd Active!");

// listen for when a new tab is updated or created
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    // check if the tab's URL is www.roblox.com or web.roblox.com
    if (tab.url.includes("www.roblox.com") || tab.url.includes("web.roblox.com")) {
        // execute the content script

        console.log("Railwynd found a new roblox page!");
        
        chrome.tabs.executeScript(tabId, {
            file: "content.js"
        });
    }

    if (tab.url.includes("www.roblox.com/develop") || tab.url.includes("web.roblox.com/develop")) {
        // execute the content script

        chrome.tabs.update(tabId, {url: "https://create.roblox.com/creations"});
    }
});

chrome.webNavigation.onCompleted.addListener(function(details) {
    if (details.url.indexOf("www.roblox.com/develop") !== -1 || details.url.indexOf("web.roblox.com/develop") !== -1) {
        chrome.tabs.update(details.tabId, {url: "https://create.roblox.com/creations"});
    }
}, {url: [{urlPrefix: "https://www.roblox.com/develop"}]});
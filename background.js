var people = [{
	first: "John",
	last: "Doe",
	redID: "123456789",
	email: "jdoe@sdsu.edu"
}];

chrome.runtime.onInstalled.addListener(function () {
	// set people array to empty array if it's not found
	// chrome.storage.sync.get(['people'], function (result) {
	// 	if (typeof result.people == "undefined") {
	// 		chrome.storage.sync.set({
	// 			"people": []
	// 		});
	// 	}
	// });
	chrome.storage.sync.set({
		"people": people
	});
})

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	if (message.request == "tabID") {
		sendResponse({
			tabID: sender.tab.id
		});
	}
});
// On click Start Button
document.getElementById("start").addEventListener("click", () => {
	// open new tab
	chrome.tabs.create({
		url: "https://sdsu.libcal.com/reserve/24-7-area",
		active: false
	}, (newTab) => {
		chrome.storage.local.set({
			"currTab": newTab.id
		});
	});
});

$(document).ready(() => {
	chrome.storage.sync.get(['people'], function (result) {
		let checked = "";
		result.people.forEach((element, index) => {
			if (!index) {
				checked = "checked"
			}
			$("#people").append(`
				<div class='person'>
					<input type="radio" id="${element.first}-${index}" value="${element.first}" name="people" ${checked}>
					${element.first}
					<br>
					${element.last}
					<br>
					${element.email}
					<br>
					${element.redID}
				</div>
			`);
		});
	});
});
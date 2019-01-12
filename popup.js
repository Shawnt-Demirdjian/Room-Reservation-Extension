// On click Start Button
document.getElementById("start").addEventListener("click", () => {
	// open new tab
	chrome.tabs.create({
		url: "https://sdsu.libcal.com/reserve/24-7-area",
		active: false
	}, (newTab) => {});
});
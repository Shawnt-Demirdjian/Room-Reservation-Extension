// https://sdsu.libcal.com/reserve/24-7-area

// only run if was opened by extension
// get current tabID
chrome.runtime.sendMessage({
	request: "tabID"
}, function (response) {
	// get currTab in use by extension
	// get form data
	chrome.storage.local.get(['currTab', 'form'], function (result) {
		if (result.currTab == response.tabID) {
			var form = result.form;
			chrome.storage.sync.get(['people'], function (peopleRes) {
				// get person used
				var person = peopleRes.people[Number.parseInt(form.personIndex)];
				$(document).ready(function () {
					// Call each function two second after the previous
					setTimeout(clickStartTime, 4000);
					setTimeout(clickEndTime, 7000);
					setTimeout(clickSubmitTimes, 10000);
					setTimeout(clickContinue, 13000);
					setTimeout(enterFormInfo, 15000);
					setTimeout(clickSubmit, 18000);
					setTimeout(closeWindow, 21000);

					function clickStartTime() {
						// click start time
						// the title seems to always follow this pattern
						// $("a[title='<12 HOUR TIME WITH AM/PM> <DAY OF WEEK>, <MONTH> <DAY 2?-DIGIT>, <YEAR 4-DIGIT> - LA 2282 <ROOM LETTER>']")[0].click();
						// Example: $("a[title='9:00am Tuesday, January 15, 2019 - LA 2282 G']")[0].click();
						let startDate = new Date(form.startDate);
						let time = startDate.toLocaleString('en-US', {
							hour: 'numeric',
							minute: 'numeric',
							hour12: true
						}).toLowerCase().replace(/ /g, "");
						let weekday = new Intl.DateTimeFormat('en-US', {
							weekday: 'long'
						}).format(startDate);
						let month = new Intl.DateTimeFormat('en-US', {
							month: 'long'
						}).format(startDate);
						let day = startDate.getDate();
						let year = startDate.getFullYear();
						let title = `${time} ${weekday}, ${month} ${day}, ${year} - LA 2282 ${form.room}`;
						$("a[title='" + title + "']")[0].click();
					}

					function clickEndTime() {
						// select end time (longest time available)
						$($("select.form-control.input-sm.b-end-date option")[form.length - 1]).prop('selected', true).trigger('change');
					}

					function clickSubmitTimes() {
						// click submit times button
						$("#submit_times")[0].click();
					}

					function clickContinue() {
						// click continue button
						$("#terms_accept")[0].click();
					}

					function enterFormInfo() {
						// enter first name
						$("#fname").val(person.first);

						// enter last name
						$("#lname").val(person.last);

						// enter email
						$("#email").val(person.email);

						// enter redID
						$("#q1908").val(person.redID);
					}

					function clickSubmit() {
						// click submit my booking button
						$("#btn-form-submit")[0].click();
					}

					function closeWindow() {
						chrome.storage.local.set({
							"currTab": ""
						}, function () {
							window.close();
						});
					}
				});
			});
		}
	});
});
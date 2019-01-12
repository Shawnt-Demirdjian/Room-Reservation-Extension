// https://sdsu.libcal.com/reserve/24-7-area

// set global variables for form info and start time
var time = "";
var first = "Shawnt";
var last = "Demirdjian";
var email = "sdemirjdian@sdsu.edu";
var id = "819256341";

function clickStartTime() {
	// click start time
	// the title seems to always follow this pattern
	// $("a[title='<12 HOUR TIME WITH AM/PM> <DAY OF WEEK>, <MONTH> <DAY 2?-DIGIT>, <YEAR 4-DIGIT> - LA 2282 <ROOM LETTER>']")[0].click();
	// example below
	$("a[title='9:00am Tuesday, January 15, 2019 - LA 2282 G']")[0].click();
}

function clickEndTime() {
	// select end time (longest time available)
	$($("select.form-control.input-sm.b-end-date option")[$("select.form-control.input-sm.b-end-date option").length - 1]).prop('selected', true).trigger('change');
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
	$("#fname").val(first);

	// enter last name
	$("#lname").val(last);

	// enter email
	$("#email").val(email);

	// enter redID
	$("#q1908").val(id);
}

function clickSubmit() {
	// click submit my booking button
	$("#btn-form-submit")[0].click();
}

function closeWindow() {
	window.close();
}

$(document).ready(function () {
	// Call each function two second after the previous
	setTimeout(clickStartTime, 4000);
	setTimeout(clickEndTime, 6000);
	setTimeout(clickSubmitTimes, 8000);
	setTimeout(clickContinue, 10000);
	setTimeout(enterFormInfo, 12000);
	setTimeout(clickSubmit, 14000);
	setTimeout(closeWindow, 16000);
});
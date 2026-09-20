import DOMPurify from "dompurify";

// update every 2 hours
const timerDelay = 2000 * 60 * 60;
// one day in milliseconds
const oneDay = 24 * 60 * 60 * 1000;

// block container class
const ocClass = "orthodox-calendar";
// info container class
const ocInfoClass = "ocContainer";
// button container
const ocBtnBarClass = "ocButtonsBar";
// previous button class
const ocPrevClass = "day-previous";
// current button class
const ocCurrClass = "day-current";
// next button class
const ocNextClass = "day-next";
// calendar button class
const ocCalendarClass = "day-picker";
// date picker class
const ocDatePickerClass = "ocDatePicker";
// wp ajax url
const url = oc_data?.url ?? false;
// get security nonce
const ocnonce = window.oc_data?.ocnonce ?? "";

// display popup window for link
window.popup = function (mylink, windowname) {
	if (!window.focus) {
		return true;
	}
	const linkIsString = typeof mylink === "string";
	const href = linkIsString ? mylink : mylink.href;
	const parent = ocFindRoot(mylink);
	const cal = parent || [];
	const pw = cal?.pw ?? 600;
	const ph = cal?.ph ?? 500;
	const pr = cal?.pr ?? "yes";
	const pd = cal?.pd ?? "yes";
	const ps = cal?.ps ?? "yes";
	const winatts =
		"width=" +
		pw +
		",height=" +
		ph +
		",resizable=" +
		pr +
		",dependent=" +
		pd +
		",scrollbars=" +
		ps +
		"";
	const showWin = window.open(href, windowname, winatts);
	showWin.focus();
	return false;
};

// search up from link to find containing calendar
function ocFindRoot(elem) {
	if (!elem || !elem.classList) {
		return null;
	}

	if (elem.classList.contains(ocClass)) {
		return elem;
	}

	return ocFindRoot(elem.parentNode);
}

function ocSetInfoHtml(ocEl, content) {
	if (!ocEl) return;

	const infoEl = ocEl.getElementsByClassName(ocInfoClass)[0];

	if (infoEl) infoEl.innerHTML = DOMPurify.sanitize(content);
}

function ocToggleDatePicker(picker) {
	picker.hidden = !picker.hidden;
}

function ocGetLoading(ocEl) {
	return !!ocEl?.attributes?.loading;
}

function ocGetDate(ocEl) {
	return new Date(ocEl.attributes.currentDate) || new Date();
}

function ocSetDate(ocEl, date) {
	const newDate = new Date(date).toLocaleDateString('en-CA');
	ocEl.attributes.currentDate = newDate;

	const datePicker = ocGetInfoContainer(ocEl);
	if (datePicker) {
		datePicker.value = newDate;
	}
}

// display fetch error message
function ocShowFetchError() {
	ocSetInfoHtml(
		ocEl,
		'<p>An error occurred fetching the calendar information. Please visit <a href="http://www.holytrinityorthodox.com/">holytrinityorthodox.com/calendar</a> to see information.',
	);
}

// find info container
function ocGetInfoContainer(ocEl) {
	return ocEl.getElementsByClassName(ocDatePickerClass)[0];
}

// change day by passed increment amount
function ocIncrementDay(ocEl, inc) {
	const currentDay = ocGetDate(ocEl);
	const days = oneDay * inc;
	const newDay = new Date(currentDay.getTime() + days);
	ocGetDateInfo(ocEl, newDay);
}

// set calendar to previous day
function ocPreviousDate(ocEl) {
	ocIncrementDay(ocEl, -1);
}

// set calendar to next day
function ocNextDate(ocEl) {
	ocIncrementDay(ocEl, 1);
}

// set calendar to today
function ocTodayDate(ocEl) {
	const today = new Date();
	ocGetDateInfo(ocEl, today);
}

// enable/disable buttons
function ocDisableButtons(ocEl, state) {
	// make sure using a boolean
	const disabled = !!state;

	// get buttons
	const btns = ocEl.getElementsByClassName(ocBtnBarClass)[0]?.childNodes;
	// set button disabled state
	for(let btn of btns) {
		btn.disabled = disabled;
	}
}

// show that we are loading the info
function ocSetLoading(ocEl, state) {
	const newState = !!state;
	ocEl.attributes.loading = newState;

	if (newState) ocSetInfoHtml(ocEl, "Loading...");

	ocDisableButtons(ocEl, newState);
}

// add onclick function to element
function ocSetOnClick(ocEl, elClass, func, arg) {
	const elem = ocEl.getElementsByClassName(elClass)[0];
	if (!elem || typeof func !== 'function') return;

	elem.onclick = function() {
		func.call(window, arg);
	}
}

// convert string date to usable date
function ocSetDateByString(ocEl, value) {
	// don't update of loading info
	if (ocGetLoading(ocEl)) return;

	// convert selecte date to usable date
	const selectedDate = new Date(value);
	const offsetDate = new Date(selectedDate.getTime() + oneDay);

	// get info for the date
	ocGetDateInfo(ocEl, offsetDate);
}

// set calendar element functions
function ocInitElements(ocEl) {
	// already setup this calendar
	if (ocEl.attributes.init === "1") return;

	ocSetOnClick(ocEl, ocPrevClass, ocPreviousDate, ocEl);
	ocSetOnClick(ocEl, ocCurrClass, ocTodayDate, ocEl);
	ocSetOnClick(ocEl, ocNextClass, ocNextDate, ocEl);

	const datePicker = ocGetInfoContainer(ocEl);
	if (datePicker) {
		ocSetOnClick(ocEl, ocCalendarClass, ocToggleDatePicker, datePicker);
		datePicker.onchange = function (e) {
			if (ocGetLoading(ocEl)) return;
			ocSetDateByString(ocEl, e.target.value);
		};
	}
}

// get calendar values
function ocGetDateInfo(ocEl, date) {
	// reasons to not continue
	if (!ocEl || ocGetLoading(ocEl)) {
		return;
	}

	ocSetDate(ocEl, date);

	ocSetLoading(ocEl, true);
	ocDisableButtons(ocEl, true);

	const mm = date.getMonth() + 1;
	const dd = date.getDate();
	const yy = date.getFullYear();

	const nodeMap = ocEl.attributes;

	const dt = nodeMap?.dt?.value ?? 1;
	const hh = nodeMap?.hh?.value ?? 1;
	const ll = nodeMap?.ll?.value ?? 1;
	const tt = nodeMap?.tt?.value ?? 1;
	const ss = nodeMap?.ss?.value ?? 1;

	ocFetchInfo(ocEl, mm, dd, yy, dt, hh, ll, tt, ss);
}

// call calendar api for data
async function ocFetchInfo(ocEl, mm, dd, yy, dt, hh, ll, tt, ss) {
	if (!ocEl) {
		return;
	}

	const phpPath = url;
	const par =
		phpPath +
		"&month=" +
		mm +
		"&today=" +
		dd +
		"&year=" +
		yy +
		"&dt=" +
		dt +
		"&header=" +
		hh +
		"&lives=" +
		ll +
		"&trp=" +
		tt +
		"&scripture=" +
		ss +
		"&ocnonce=" +
		ocnonce +
		"&sid=" +
		Math.random();

	// Get data fro the server
	fetch(par, {
		method: "GET",
		credentials: "same-origin",
	})
		.then((response) => response.json())
		.then((response) => {
			if (response?.success) {
				const cleanHtml = DOMPurify.sanitize(response.data, {
					USE_PROFILES: { html: true },
				});
				ocSetInfoHtml(ocEl, cleanHtml);
			} else if (ocGetLoading(ocEl)) {
				ocSetLoading(ocEl, true);
			} else {
				ocShowFetchError();
			}
		})
		.catch((error) => {
			ocShowFetchError();
		})
		.finally(() => {
			ocSetLoading(ocEl, false);
		});
}

function ocInit(ocEl) {

	if (!ocEl || !url || !ocnonce) {
		ocSetInfoHtml(ocEl, "Plugin misconfiguration");
		ocDisableButtons(ocEl, true);
		return;
	}

	// already setup this calendar
	if (ocEl.attributes.init === "1") return;

	// JS Date when script loads
	ocSetDate(ocEl, new Date());

	// make elements functional
	ocInitElements(ocEl);

	// load current info
	ocGetDateInfo(ocEl, ocGetDate(ocEl));

	// mark that calendar is initialized
	ocEl.attributes.init = "1";
}

const oCalendars = document.getElementsByClassName("orthodox-calendar-block");
if (oCalendars.length) {
	for (let cal of oCalendars) {
		ocInit(cal);
	}

	// timer every 2 hours
	setInterval(function () {
		for (let cal of oCalendars) {
			ocTodayDate(cal);
		}
	}, timerDelay);
}

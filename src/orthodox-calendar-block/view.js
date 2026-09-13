import DOMPurify from "dompurify";

// update every 2 hours
const timerDelay = 2000 * 60 * 60;
// one day in milliseconds
const oneDay = 24 * 60 * 60 * 1000;

// display popup window for link
window.popup = function (mylink, windowname) {
	if (!window.focus) {
		return true;
	}
	const linkIsString = typeof mylink === "string";
	const href = linkIsString ? mylink : mylink.href;
	const parent = findOrthodoxCalendarRoot(mylink);
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

function initOrthodoxCalendar(ocEl) {
	let isInit = false;

	// JS Date when script loads
	let currentDay = new Date();
	// block container class
	const ocClass = "orthodox-calendar";
	const ocInfoClass = "ocContainer";
	const ocDatePickerClass = "ocDatePicker";

	// button placeholders
	let clnd, prev, curr, next, ocLoading, ocDatePicker;

	// search up from link to find containing calendar
	function findOrthodoxCalendarRoot(elem) {
		if (!elem || !elem.classList) {
			return null;
		}

		if (elem.classList.contains(ocClass)) {
			return elem;
		}

		return findOrthodoxCalendarRoot(elem.parentNode);
	}

	function ocSetElHtml(ocEl, content) {
		ocEl.innerHTML = DOMPurify.sanitize(content);
	}

	function showLoading(ocEl) {
		ocLoading = true;
		const infoEl = ocEl.getElementsByClassName(ocInfoClass)[0];

		if (infoEl) {
			ocSetElHtml(infoEl, "Loading...");
		}
	}

	// set calendar to today
	function todayDate(ocEl) {
		const today = new Date();
		callCalendar(ocEl, today);
		currentDay = today;
	}

	// set calendar to next day
	function nextdayDate(ocEl) {
		const next = new Date(currentDay.getTime() + oneDay);
		callCalendar(ocEl, next);
		currentDay = next;
	}

	// set calendar to previous day
	function previousDate(ocEl) {
		const previous = new Date(currentDay.getTime() - oneDay);
		callCalendar(ocEl, previous);
		currentDay = previous;
	}

	// enable/disable buttons
	function disableCalendarButtons(state) {
		// make sure boolean was passed
		const disabled = !!state;

		if (clnd) clnd.disabled = disabled;
		if (prev) prev.disabled = disabled;
		if (curr) curr.disabled = disabled;
		if (next) next.disabled = disabled;
	}

	// set calendar button functions
	function initCalendarButtons(ocEl) {
		if (isInit) return;

		isInit = true;

		clnd = ocEl.getElementsByClassName("day-picker")[0];
		if (clnd) {
			clnd.onclick = function (e) {
				toggleDatePicker();
			};
		}

		prev = ocEl.getElementsByClassName("day-previous")[0];
		if (prev) {
			prev.onclick = function () {
				previousDate(ocEl);
			};
		}

		curr = ocEl.getElementsByClassName("day-current")[0];
		if (curr) {
			curr.onclick = function () {
				todayDate(ocEl);
			};
		}

		next = ocEl.getElementsByClassName("day-next")[0];
		if (next) {
			next.onclick = function () {
				nextdayDate(ocEl);
			};
		}

		ocDatePicker = ocEl.getElementsByClassName(ocDatePickerClass)[0];
		if (ocDatePicker) {
			const date = new Date();
			ocDatePicker.value = date.toLocaleDateString('en-CA')
			ocDatePicker.onchange = function (e) {
				const selectedDate = new Date(e.target.value);
				const newDate = new Date(selectedDate.getTime() + oneDay);
				callCalendar(ocEl, newDate);
			};
		}
	}

	function toggleDatePicker() {
		ocDatePicker.hidden = !ocDatePicker.hidden;
	}

	// get calendar values
	function callCalendar(ocEl, date) {
		if (!ocEl) {
			return null;
		}

		showLoading(ocEl);
		disableCalendarButtons(true);

		const mm = date.getMonth() + 1;
		const dd = date.getDate();
		const yy = date.getFullYear();

		const nodeMap = ocEl.attributes;

		const dt = nodeMap?.dt?.value ?? 1;
		const hh = nodeMap?.hh?.value ?? 1;
		const ll = nodeMap?.ll?.value ?? 1;
		const tt = nodeMap?.tt?.value ?? 1;
		const ss = nodeMap?.ss?.value ?? 1;

		const infoEl = ocEl.getElementsByClassName(ocInfoClass)[0];

		loadCalendar2(infoEl, mm, dd, yy, dt, hh, ll, tt, ss);
	}

	// call calendar api for data
	async function loadCalendar2(infoEl, mm, dd, yy, dt, hh, ll, tt, ss) {
		if (!infoEl) {
			disableCalendarButtons(true);
			return;
		}

		const url = oc_data?.url ?? false;

		if (!url) {
			const msg = "Plugin misconfiguration";
			if (infoEl) {
				infoEl.innerText = msg;
			}
			disableCalendarButtons(true);
			return;
		}

		// get security nonce
		const ocnonce = window.oc_data?.ocnonce ?? "";

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
					ocLoading = false;
					const cleanHtml = DOMPurify.sanitize(response.data, {
						USE_PROFILES: { html: true },
					});
					ocSetElHtml(infoEl, cleanHtml);
				} else if (ocLoading) {
					showLoading(ocEl);
				} else {
					ocSetElHtml(
						infoEl,
						'<p>An error occurred fetching the calendar information. Please visit <a href="http://www.holytrinityorthodox.com/">holytrinityorthodox.com/calendar</a> to see information.',
					);
					ocLoading = false;
				}
				disableCalendarButtons(ocLoading);
			})
			.catch((error) => {
				ocSetElHtml(
					infoEl,
					'<p>An error occurred fetching the calendar information. Please visit <a href="http://www.holytrinityorthodox.com/">holytrinityorthodox.com/calendar</a> to see information.',
				);
				ocLoading = false;
			})
			.finally(() => {
				disableCalendarButtons(ocLoading);
			});
	}

	// set calender to today
	function adjustToToday(ocEl) {
		currentDay = new Date();
		callCalendar(ocEl, currentDay);
	}

	initCalendarButtons(ocEl);
	callCalendar(ocEl, currentDay);

	// timer every 2 hours
	setInterval(function () {
		adjustToToday(ocEl);
	}, timerDelay);
}

const oCalendars = document.getElementsByClassName("orthodox-calendar");
if (oCalendars.length) {
	let cal;
	for (cal of oCalendars) {
		const nodeMap = cal.attributes;
		if (nodeMap?.init) {
			continue;
		}

		nodeMap.init = "1";

		initOrthodoxCalendar(cal);
	}
}

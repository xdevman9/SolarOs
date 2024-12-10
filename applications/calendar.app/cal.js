const today = new Date();
let day = today.getDay();
const todayMonth = today.getMonth();
let month = today.getMonth();
const todayYear = today.getFullYear();
let year = today.getFullYear();
const todayDate = today.getDate();
let date = today.getDate();

let datesContainer = document.getElementById("calendar-dates");
let monthName = document.getElementById("calendar-month");

function updateCalendar() {
	function upd() {
		monthName.innerText = new Date(year, month).toLocaleString("default", { month: "long", year: "numeric" });
		let newDatesContainer = document.createElement("div");
		newDatesContainer.id = "calendar-dates";

		let firstDay = new Date(year, month, 1).getDay();
		let lastDay = new Date(year, month + 1, 0).getDate();

		for (let i = 0; i < firstDay; i++) {
			let date = document.createElement("div");
			date.classList.add("calendar-date");
			date.classList.add("calendar-date-empty");
			newDatesContainer.appendChild(date);
		}

		for (let i = 1; i <= lastDay; i++) {
			const date = new Date(year, month, i);
			let dateEl = document.createElement("div");
			dateEl.classList.add("calendar-date");
			dateEl.innerHTML = "<span>" + i + "</span>";
			if (todayDate === date.getDate() && todayMonth === date.getMonth() && todayYear === date.getFullYear()) {
				dateEl.classList.add("calendar-date-today");
			}
			newDatesContainer.appendChild(dateEl);
		}

		datesContainer.replaceWith(newDatesContainer);
		datesContainer = newDatesContainer;
	}

	if (!document.startViewTransition) {
		upd();
		return;
	}

	document.startViewTransition(() => upd());
}

updateCalendar();

document.getElementById("calendar-prev").addEventListener("click", () => {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	updateCalendar();
});

document.getElementById("calendar-next").addEventListener("click", () => {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	updateCalendar();
});
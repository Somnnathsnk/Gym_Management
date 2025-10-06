const monthYear = document.getElementById("monthYear");
const calendarGrid = document.querySelector(".calendar-grid");
const holidayList = document.getElementById("holidayList");

let currentDate = new Date();

// ✅ Indian National Holidays
const holidays = {
  "01-26": "Republic Day",
  "08-15": "Independence Day",
  "10-02": "Gandhi Jayanti",
  "01-14": "Makar Sankranti / Pongal",
  "08-29": "Onam",
  "11-12": "Diwali",
  "12-25": "Christmas",
  "03-08": "Holi",
  "04-14": "Ambedkar Jayanti",
  "05-01": "Labour Day",
};

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Month-Year title
  const monthNames = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December"
  ];
  monthYear.textContent = `${monthNames[month]} ${year}`;

  // Clear grid
  calendarGrid.querySelectorAll(".day").forEach(d => d.remove());

  // First day of the month
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Empty slots before first day
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    calendarGrid.appendChild(empty);
  }

  // Days
  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.classList.add("day");
    cell.textContent = day;

    const today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.classList.add("today");
    }

    // Highlight holidays
    const key = `${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    if (holidays[key]) {
      cell.classList.add("holiday");
      cell.title = holidays[key];
    }

    calendarGrid.appendChild(cell);
  }

  renderHolidayList(month, year);
}

function renderHolidayList(month, year) {
  holidayList.innerHTML = "";
  for (let key in holidays) {
    const [m, d] = key.split("-");
    if (parseInt(m) - 1 === month) {
      const li = document.createElement("li");
      li.textContent = `${d}-${m}-${year}: ${holidays[key]}`;
      holidayList.appendChild(li);
    }
  }
}

document.getElementById("prev").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

document.getElementById("next").addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);

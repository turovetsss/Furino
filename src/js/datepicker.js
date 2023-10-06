window.addEventListener("load", function () {
  const prevMonthBtn = document.getElementById("prevMonth");
  const nextMonthBtn = document.getElementById("nextMonth");
  const monthYear = document.getElementById("monthYear");
  const calendarBody = document.getElementById("calendarBody");
  const selectedDateInput = document.getElementById("selectedDate");
  let currentDate = new Date();
  function renderCalendar() {
    calendarBody.innerHTML = "";
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    monthYear.textContent = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(currentDate);

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");

        if (i === 0 && j < firstDay) {
          cell.textContent = "";
        } else if (date > daysInMonth) {
          cell.textContent = "";
        } else {
          cell.textContent = date;
          cell.addEventListener("click", selectDate);
          date++;
        }

        row.appendChild(cell);
      }

      calendarBody.appendChild(row);
    }
  }

  function selectDate(event) {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      event.target.textContent
    );
    selectedDateInput.valueAsDate = selectedDate;
  }

  prevMonthBtn.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
  });

  nextMonthBtn.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
  });

  selectedDateInput.addEventListener("change", function () {
    const selectedDate = new Date(selectedDateInput.value);
    currentDate = selectedDate;
    renderCalendar();
  });

  renderCalendar();
});

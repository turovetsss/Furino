(function() {
  let datePicker = document.getElementById('datepicker');
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  function createCalendar(month, year) {
    let calendar = document.createElement('div');
    calendar.className = 'calendar';
     let header = document.createElement('div');
    header.className = 'header';

    let prevMonthBtn = document.createElement('button');
    prevMonthBtn.className = 'prev-month-btn';
    prevMonthBtn.innerHTML = '&#10094;';
    prevMonthBtn.addEventListener('click', function() {
      if (month === 0) {
        month = 11;
        year--;
      } else {
        month--;
      }
      refreshCalendar(month, year);
    });
    header.appendChild(prevMonthBtn);

    let monthLabel = document.createElement('span');
    monthLabel.innerHTML = getMonthName(month) + ' ' + year;
    header.appendChild(monthLabel);

    let nextMonthBtn = document.createElement('button');
    nextMonthBtn.className = 'next-month-btn';
    nextMonthBtn.innerHTML = '&#10095;';
    nextMonthBtn.addEventListener('click', function() {
      if (month === 11) {
        month = 0;
        year++;
      } else {
        month++;
      }
      refreshCalendar(month, year);
    });
    header.appendChild(nextMonthBtn);

    calendar.appendChild(header);

    let table = document.createElement('table');
    table.className = 'days';

    let daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    let headerRow = document.createElement('tr');
    for (var i = 0; i < daysOfWeek.length; i++) {
      var headerCell = document.createElement('th');
      headerCell.innerHTML = daysOfWeek[i];
      headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);

    let firstDay = new Date(year, month, 1);
    let lastDay = new Date(year, month + 1, 0);
    let totalDays = lastDay.getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      var row = document.createElement('tr');

      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay.getDay()) {
          let cell = document.createElement('td');
          row.appendChild(cell);
        } else if (date > totalDays) {
          break;
        } else {
          let cell = document.createElement('td');
          cell.innerHTML = date;
          cell.addEventListener('click', function() {
            console.log(datePicker.value = this.innerHTML + '.' + (month + 1) + '.' + year);
            
            calendar.remove();
          });
          row.appendChild(cell);
          date++;
        }
      }

      table.appendChild(row);
    }

    calendar.appendChild(table);

    return calendar;
  }
  function selectDate(event) {
    const datepicker = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      event.target.textContent
    );
    selectedDateInput.valueAsDate = datePicker;
  }
  datePicker.addEventListener("change", function () {
    const selectedDate = new Date(datePicker.value);
    currentDate = selectedDate;
  });

  function refreshCalendar(month, year) {
    let calendar = document.querySelector('.calendar');
    calendar.parentElement.replaceChild(createCalendar(month, year), calendar);
  }

  function getMonthName(month) {
    let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return months[month];
  }


  datePicker.addEventListener('click', function() {
    let calendarWrapper = document.getElementById('calendar-wrapper');
    if (calendarWrapper) {
      calendarWrapper.remove();
    } else {
      let calendar = createCalendar(currentMonth, currentYear);

      calendarWrapper = document.createElement('div');
      calendarWrapper.id = 'calendar-wrapper';
      calendarWrapper.appendChild(calendar);

      datePicker.parentNode.insertBefore(calendarWrapper, datePicker.nextSibling);
    }
    selectedDateInput.addEventListener("change", function () {
      const selectedDate = new Date(selectedDateInput.value);
      currentDate = selectedDate;
      
    });
  });
})();
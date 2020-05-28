$(document).ready(function() {
  // all jQuery will go in here
  today = new Date();
  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');
  const monthClass = document.querySelector('.month');
  const yearClass = document.querySelector('.year');
  let monthYear = document.querySelector('.month-year');
  let currentMonth = today.getMonth();
  let currentYear = today.getYear();

  const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  displayCalendar(currentMonth, currentYear);

  // next
  // if currentMonth is equal to 11, increase year by 1, else return currentYear
  // add 1 to currentMonth and divide by 12
  // use ternary operators
  function next() {
    currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    displayCalendar(currentMonth, currentYear);
  }

  // previous
  function last() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    displayCalendar(currentMonth, currentYear);
  }

  // current year & month should be parsed into the value of the year and month
  // that means then that the current month and year will display on calendar
  function parse() {
    currentMonth = parseInt(currentMonth.value);
    currentYear = parseInt(currentYear.value);
    displayCalendar(currentMonth, currentYear);
  }

  // displayCalendar(month, year)
  // today = (new Date(year, month)).getDay();
  function displayCalendar(month, year) {
    let firstDay = (new Date(year, month)).getDay();

    // create variable for table body
    // clear table body html
    let calendarBody = document.querySelector('.calendar-body');
    calendarBody.innerHTML = '';

    // set the way that the month and year will appear on the calendar
    monthYear.innerHTML = monthArray[month] + ' ' + year;
    yearClass.value = year;
    monthClass.value = month;

    // date set to 0 to start with, date will be used in loop
    let date = 0;
    // create cells - create 6 rows. start at 0, < 6, increment
    // create element 'tr' in row variable
    for (r = 0; r < 6; r++) {
      row = document.createElement('tr');

      // for - date starts at 0, < 7, increment (this will take ALL cells and only allow
      // 7 in each row)
      for (c = 0; c < 7; c++) {
        // if -
        if (c === 0 && c < firstDay) {
          // create 'td' element in cell variable
          // create a textNode for each cell in a variable
          // append the textNode to each cell
          // append those cells to row
          cell = document.createElement('td');
          cellText = document.createTextNode('');
          cell.appendChild(cellText);
          row.appendChild(cell);
        // else if the date is greater than the amount of days in the month, stop creating rows
        }
        else if (date > daysInMonth(month, year)) {
          break;
        }
        else {
          // else create 'td' element in cell variable
          // create text node for that cell containing date
          // if todays date, month, and year are equal to date, month, and year - add class to highlight that cell
          // append the textNode to each cell
          // append those cells to row
          // increment date - bc its creating one cell for each day of the month
          cell = document.createElement('td');
          cellText = document.createTextNode(date);
          if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            cell.appendChild(cellText);
            row.appendChild(row);
            date++
          }
        }
      }
      // append rows to table body
      calendarBody.appendChild(row);
      // end for loop
    }
  }

  // checks how many days are in a month
  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

});




















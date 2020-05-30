$(document).ready(function() {
  // all jQuery will go in here
  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');
  let monthYear = document.querySelector('.month-year');
  selectYear = document.querySelector('.year');
  selectMonth = document.querySelector('.month');

  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // 1. Display current month and year on calendar
  monthYear.innerHTML = monthArray[currentMonth] + ' ' + currentYear;
  createCells(currentMonth, currentYear);

  // 2. When user clicks right button, currentMonth + 1
    // 2a. if currentMonth = 11, currentYear + 1
  rightBtn.addEventListener('click', function() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    monthYear.innerHTML = monthArray[currentMonth] + ' ' + currentYear;
    createCells(currentMonth, currentYear);
  });

  // 3. When user clicks left button, currentMonth - 1
    // 3a. if currentMonth = 0, currentYear - 1
  leftBtn.addEventListener('click', function() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    monthYear.innerHTML = monthArray[currentMonth] + ' ' + currentYear;
    createCells(currentMonth, currentYear);
  });

  function parse() {
    currentYear = parstInt(selectYear.value);
    currentMonth = parstInt(selectYear.value);
    createCells(currentMonth, currentYear);
  }


  function createCells(month, year) {
    let firstDay = new Date(year, month).getDay();

    table = document.querySelector('.numbered-days');
    table.innerHTML = '';

    let date = 1;

    // currently creates 6 rows and the rows are numbered
    for (let r = 0; r < 7; r++) {
      let row = document.createElement('tr');

      for (let c = 0; c < 7; c++) {
        if (r === 0 && c < firstDay) {
          // create empty cell
          cell = document.createElement('td');
          cellText = document.createTextNode('');
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        else if (date > daysInMonth(month, year)) {
          break
        }
        else {
          cell = document.createElement('td');
          cellText = document.createTextNode(date);
          cell.appendChild(cellText);
          row.appendChild(cell);
          table.appendChild(row);
          date++;
        }
      }
      table.appendChild(row);
    }
  }


  // checks how many days are in a month
  function daysInMonth(iMonth, iYear) {
      return 32 - new Date(iYear, iMonth, 32).getDate();
  }

});

































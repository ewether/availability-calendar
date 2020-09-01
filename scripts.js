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

  // const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // 1. Display current month and year on calendar
  monthYear.innerHTML = monthArray[currentMonth] + ' ' + currentYear;
  createCells(currentMonth, currentYear);

  // 2. When user clicks right button, currentMonth, currentYear, and relative cells are displayed
  rightBtn.addEventListener('click', function() {
    // if current month is the 12th month (11 in array), add 1 to the current year
      // else, display the current year
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    // the current month is the current month + 1 (from array) divided by 12
    currentMonth = (currentMonth + 1) % 12;
    // inner html of the month/year on calendar is the index of current month from month array and the current year
    monthYear.innerHTML = monthArray[currentMonth] + ' ' + currentYear;
    // createCells function is called according to the original values of currentMonth and currentYear
    createCells(currentMonth, currentYear);
  });

  // 3. When user clicks right button, currentMonth, currentYear, and relative cells are displayed
  leftBtn.addEventListener('click', function() {
    // if current month is the 1st month (0 in array), subtract 1 from the current year
      // else, display the current year
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    // if current month is the 1st month, display last month on leftBtn click, otherwise subtract 1 from current month
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    monthYear.innerHTML = monthArray[currentMonth] + ' ' + currentYear;
    createCells(currentMonth, currentYear);
  });

  // the value of the year that has been selected (using right/left arrows) is parsed into the currentYear/Month
  function parse() {
    // currentYear = parstInt(selectYear.value);
    // currentMonth = parstInt(selectYear.value);
    // createCells(currentMonth, currentYear);
  }

  // creates cells according to the month and year
  function createCells(month, year) {
    // finds the index of the first day of specified month/year
    let firstDay = new Date(year, month).getDay();

    // defines tbody as tbody
    let tbody = document.querySelector('#calendar-tbody');
    tbody.innerHTML = '';

    let date = 1;

    // initialize row as 0, for row less than 7 increase row by 1
    for (let r = 0; r < 6; r++) {
      // row = create tr element
      let row = document.createElement('tr');
      // days = select all td elements
      let days = document.querySelector('td');

      // initializes cell as 0, create 7 cells
      for (let c = 0; c < 7; c++) {
        // if row is 0 and cell is before the first day of the month, create empty cells
        if (r === 0 && c < firstDay) {
          cell = document.createElement('td');
          emptyCell = document.createTextNode('');
          cell.classList.add('empty-cell');
          cell.appendChild(emptyCell);
          row.appendChild(cell);
        }
        // if date is greater than the amount of days in the month, break
        else if (date > daysInMonth(month, year)) {
          break
        }
        // if a cell in a row is greater than 0 and less than 6 (weekdays), add green square to cell
        else if (c > 0 && c < 6) {
          cell = document.createElement('td');
          available = document.createElement('div');
          available.classList.add('available-cell');
          cellText = document.createTextNode(date);
          cell.appendChild(cellText);
          cell.appendChild(available);
          row.setAttribute("id", (r + 1));
          row.appendChild(cell);
          tbody.appendChild(row);
          date++;
        }

        else {
          cell = document.createElement('td');
          cellText = document.createTextNode(date);
          cell.appendChild(cellText);
          row.appendChild(cell);
          tbody.appendChild(row);
          date++;
        }
      }
      tbody.appendChild(row);
    };

    // on cell click, adds a row below it
    $('tbody tr td').click(function() {
      // add new row after the closest row
      var $newRow = ('<tr id="new-row"><td id="cell-info"></td></tr>')
      $(this).closest('tr').after($newRow);
    });
  };

  // checks how many days are in a month
  function daysInMonth(iMonth, iYear) {
      return 32 - new Date(iYear, iMonth, 32).getDate();
  };
});
























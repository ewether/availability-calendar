let monthYear = document.querySelector('.month-year');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');

const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Calendar starts with current month and current year as heading

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

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


// Date squares

  // Want a max of 6 rows
function createCells(month, year) {
  let firstDay = new Date(year, month).getDay();
  let date = 1;

  for (r = 0; r < 6; r++) {
    var $row = $('table > tbody > tr');
    var $cell = $('table > tbody > tr > td').addClass('table-cell');

    for (let c = 0; c < 7; c++) {

      if (r === 0 && c < firstDay) {
        $emptyCell = $cell.addClass("empty-cell").html('');
        $cell.append($emptyCell);
        $row.append($cell);
        $tbody.append($row);
      }
      else if (date > daysInMonth(month, year)) {
        break
      }
      else if (c > 0 && c < 6) {
      }
      else {
        // $cell.append(document.createTextNode($('date')));

        // $row.append($cell);
        // $tbody.append($row);
        // $date++;

        cell = document.createElement('td');
        cellText = document.createTextNode(date);
        cell.appendChild(cellText);
        $row.append(cell);
        // table.appendChild(row);
        date++;
      }
    }
  }
}

function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}

  // 7 squares per row


//    1. Number of days in the month = the amount of numbered squares
//    2. Day 1 starts at the correct day of the week for that month
//    3. 7 squares per row

















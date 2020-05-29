$(document).ready(function() {
  // all jQuery will go in here
  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');
  let monthYear = document.querySelector('.month-year');

  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // 1. Display current month and year on calendar
  monthYear.innerHTML = monthArray[currentMonth] + ' ' + currentYear;

  // 2. When user clicks right button, currentMonth + 1
    // 2a. if currentMonth = 11, currentYear + 1
  rightBtn.addEventListener('click', function() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    monthYear.innerHTML = monthArray[currentMonth] + ' ' + currentYear;
  });

  // 3. When user clicks left button, currentMonth - 1
    // 3a. if currentMonth = 0, currentYear - 1
  leftBtn.addEventListener('click', function() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    monthYear.innerHTML = monthArray[currentMonth] + ' ' + currentYear;
  });

  // // find first day of current month of current year
  // let firstDay = (currentMonth, currentYear).getDay();
  // console.log(firstDay);

  // rows and cells
  // tr = row
  // td = cell
  // add 7 cells to row

  let date = 1;
  table = document.querySelector(".calendar-days");

  // currently creates 6 rows and the rows are numbered
  for (let r = 0; r < 6; r++) {
    let row = document.createElement('tr');

    for (let c = 0; c < 7; c++) {
      cell = document.createElement('td');
      cellText = document.createTextNode(date);
      cell.appendChild(cellText);
      row.appendChild(cell);
      table.appendChild(row);
      date++;
    }
  }

  // find day of week of first day of month
  console.log(today.getDay()); // gives day of week number of
  console.log(weekDays[today.getDay()]); // gives day of week for today

  let firstDay = new Date().getDay();
  console.log(firstDay);


  // let $row = $('<tr>'+
  //     '<td>' + date + '</td>'+
  //     '<td></td>'+
  //     '<td></td>'+
  //     '<td></td>'+
  //     '<td></td>'+
  //     '<td></td>'+
  //     '<td></td>'+
  //     '</tr>');

  // // console.log($row);
  // $('table> tbody:last').append($row);

  // $('tbody tr'); // selects all table body rows

  // adds a row to table containing one cell

  // $('.calendar-days').find('tbody')
  //   .append($('<tr>')
  //     .append($('<td>')
  //       .text('Cell')
  //       )
  //     );







  // checks how many days are in a month
  function daysInMonth (month, year) {
      return new Date(year, month, 0).getDate();
  }

});

































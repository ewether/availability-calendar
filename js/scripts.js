$(document).ready(function() {
  // all jQuery will go in here
  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');
  const month = document.querySelector('.month');
  const year = document.querySelector('.year');
  monthYear = document.querySelector('.month-year');
  currentMonth = getMonth();
  currentYear = getYear();

  const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // next
  // if currentMonth is equal to 11, increase year by 1, else return currentYear
  // add 1 to currentMonth and divide by 12
  // use ternary operators

  // previous
  // if currentMonth is equal to 0, decrease year by 1, else return currentYear
  // if currentMonth is less than zero, month is set to 11, else return currentMonth -1

  // current year & month should be parsed into the value of the year and month
  // that means then that the current month and year will display on calendar

  // displayCalendar(month, year)
  // today = (new Date(year, month)).getDay();

  // create variable for table body
  // clear table body html

  // set the way that the month and year will appear on the calendar

  // create cells - create 6 rows. start at 0, < 6, increment

  // create element 'tr' in row variable

  // date = 0 (for use in for loop below)

  // for - date starts at 0, < 7, increment (this will take ALL cells and only allow
  // 7 in each row)

    // if -
    // create 'td' element in cell variable
    // create a textNode for each cell in a variable
    // append the textNode to each cell
    // append those cells to row

    // else if the date is greater than the amount of days in the month, stop creating rows

    // else create 'td' element in cell variable
    // create text node for that cell containing date
    // if todays date, month, and year are equal to date, month, and year - add class to highlight that cell
    // append the textNode to each cell
    // append those cells to row
    // increment date - bc its creating one cell for each day of the month

    // end for loop

    // append rows to table body


  // checks how many days are in a month
  // function daysInMonth(iMonth, iYear) {
  //   return 32 - new Date(iYear, iMonth, 32).getDate();
  // }


});




















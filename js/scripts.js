$(document).ready(function() {
  // all jQuery will go in here
  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');
  const monthClass = document.querySelector('.month');
  const yearClass = document.querySelector('.year');
  let monthYear = document.querySelector('.month-year');
  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // 1. Display current month and year on calendar
  monthYear.innerHTML = monthArray[currentMonth] + ' ' + currentYear;

  // 2. When user clicks right button, currentMonth + 1
    // 2a. if currentMonth = 11, currentYear + 1

  monthCount = 0;

  rightBtn.addEventListener('click', function() {
    monthCount = monthCount + 1;
    currentMonth = monthArray[currentMonth + monthCount];
    console.log(monthCount);
    // if current month is equal to 11, increase year by one and month starts back at 0
    // currentYear = (currentMonth === 11) ? currentMonth + 1 : currentYear;
    // otherwise, increase month by 1
    monthYear.innerHTML = currentMonth + ' ' + currentYear;
  });

  // 3. When user clicks left button, currentMonth - 1
    // 3a. if currentMonth = 0, currentYear - 1
  function last() {

  }






  // checks how many days are in a month
  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

});




















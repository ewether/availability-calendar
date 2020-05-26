$(document).ready(function() {
  // all jQuery will go in here
  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');
  const currentMonth = document.querySelector('.selected-month');
  // const currentYear = document.querySelector('.year');
  const weekDay = document.querySelectorAll('.calendar-days th');
  const numberedDay = document.querySelectorAll('.calendar-days td');

  const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // calendar starts on current day/month/yr
  let currentDate = new Date();
  // gets index number of current month and puts it into variable 'monthIndex'
  let monthIndex = currentDate.getMonth();
  // changes month html to the current month & year using its index in monthArray
  let currentYear = currentDate.getFullYear();
  currentMonth.innerHTML = monthArray[monthIndex]+' '+currentYear;

    // if (currentDate.getMonth() == 11) {
    //     let current = new Date(currentDate.getFullYear() + 1, 0, 1);

    // } else {
    //     let current = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    // }

  // rightBtn on click -> monthIndex + 1, display that array element
  rightBtn.addEventListener('click', function() {

    if (monthIndex > 11) {
      monthIndex = monthArray[0]+' '+currentYear + 1;
      console.log(monthIndex);
      currentMonth.innerHTML = monthIndex;
    } else {
      currentMonth.innerHTML = monthArray[monthIndex++ + 1]+' '+currentYear;
    }

  });


    leftBtn.addEventListener('click', function() {

    if (monthIndex > 11) {
      monthIndex = monthArray[0]+' '+currentYear + 1;
      console.log(monthIndex);
      currentMonth.innerHTML = monthIndex;
    } else {
      currentMonth.innerHTML = monthArray[monthIndex-- + 1]+' '+currentYear;
    }

  });

});




















$(document).ready(function() {
    // all jQuery will go in here
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    const monthYear = document.querySelector('.main-date');
    const weekDay = document.querySelectorAll('.calendar-days th');
    const numberedDay = document.querySelectorAll('.calendar-days td');

    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // calendar starts on current day/month/yr
    let currentDate = new Date();
    // gets index number of current month and puts it into variable 'monthIndex'
    const monthIndex = currentDate.getMonth();
    // changes month html to the current month & year using its index in monthArray
    monthYear.innerHTML = monthArray[monthIndex]+' '+currentDate.getFullYear();

      if (currentDate.getMonth() == 11) {
          let current = new Date(currentDate.getFullYear() + 1, 0, 1);

      } else {
          let current = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
      }
    // get current day of current month
    // const currentDay = currentDate.getDate();

    // rightBtn on click -> monthIndex + 1, display that array element
    rightBtn.addEventListener('click', function() {

      i = 0;
      if (monthIndex < 11) {
        i = i + 1;
        monthYear.innerHTML = monthArray[monthIndex + i]+' '+currentDate.getFullYear();
      } else {

      }


      while (i < 2) {
        i = i + 1;
        const nextMonth = monthIndex + i;
        console.log(nextMonth);
      }
        monthYear.innerHTML = monthArray[monthIndex + i]+' '+currentDate.getFullYear();


      // while (i < 13) {
      //   i = i + 1;
      //   monthYear.innerHTML = monthArray[monthIndex + i]+' '+currentDate.getFullYear();
      // }
    });

});

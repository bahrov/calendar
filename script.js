const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const minusMonthElement = document.getElementById('minusMonth');
const plusMonthElement = document.getElementById('plusMonth');
const minusYearElement = document.getElementById('minusYear');
const plusYearElement = document.getElementById('plusYear');

const today = new Date ();
let monthDifference = 0;
let yearDifference = 0;

minusMonthElement.addEventListener('click', () => {
  monthDifference--;
  renderCalendar();
})

plusMonthElement.addEventListener('click', () => {
  monthDifference++;
  renderCalendar();
})

minusYearElement.addEventListener('click', () => {
  yearDifference--;
  renderCalendar();
})

plusYearElement.addEventListener('click', () => {
  yearDifference++;
  renderCalendar();
})

const renderCalendar = (setMonth, setYear) => {
  const date = new Date(today.getFullYear() + Number(yearDifference), today.getMonth() + Number(monthDifference), today.getDate());
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  
  const firstDayOfTheMonth = date.getDay();
  const lastDayOfTheMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  
  const monthElement = document.getElementById('month');
  const yearElement = document.getElementById('year');
  
  yearElement.innerText = year
  monthElement.innerText = monthNames[month];
  
  let counter = 0;
  const daysElement = document.querySelectorAll('.day');

  daysElement.forEach(element => {
    element.innerText = ''
    element.style.color = 'black'
  })

  for (let i = 1 - firstDayOfTheMonth; i <= lastDayOfTheMonth; i++) {

    if (i <= 0) {
      daysElement[counter].innerText = ''
    } else {
      daysElement[counter].innerText = i;
      if (yearDifference === 0 && monthDifference === 0 && i === day) {
        daysElement[counter].style.color = 'red'
      }
    }
  
    counter++;
  }
};

renderCalendar();




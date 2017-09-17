document.addEventListener('DOMContentLoaded', () => {
  const lifeCalendar = document.querySelector('.life-calendar');

  const birthDay = moment('1989-01-18');
  const whenIllBeNinety = birthDay.clone().add(90, 'years');
  const daysSinceBirthday = moment().diff(birthDay, 'days');

  const notableDates = {
    '1989-01-18': 'Born! 🎉',
    '2007-01-18': '18 years old! 🎉'
  };

  let dateIndex = birthDay;
  for (let index = 1; index++; dateIndex.isSame(whenIllBeNinety)) {
    const currentDate = dateIndex.format('YYYY-MM-DD');

    if (dateIndex.isSame(whenIllBeNinety)) {
      break;
    }

    const box = document.createElement('div');
    box.setAttribute('date', currentDate);
    if (notableDates[currentDate]) {
      box.setAttribute('message', notableDates[currentDate]);
    }
    if (index <= daysSinceBirthday) {
      box.classList.add('already-lived');
    }
    lifeCalendar.appendChild(box);
    dateIndex = dateIndex.add(1, 'day');
  }
});
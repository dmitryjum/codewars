function leapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function getCalendarWeek(date) {
  const targetDate = new Date(date + 'T00:00');
  const firstDay = new Date(`${targetDate.getUTCFullYear()}-01-01T00:00`);
  const lastDay = new Date(`${targetDate.getUTCFullYear()}-12-31T00:00`);
  let weeksSince = (targetDate.getTime() - firstDay.getTime())/1000/60/60/168
  console.log(weeksSince)
  if ((firstDay.getDay() > 4 || firstDay.getDay() === 0) && targetDate.getDate() - firstDay.getDate() < 4) {
    if (firstDay.getDay() === 6 && targetDate.getDate() < 3) {
      weeksSince = leapYear(firstDay.getYear - 1) ? 53 : 52
    } else if (firstDay.getDay() === 5 && targetDate.getDate() < 4) {
      weeksSince = 53
    } else if (firstDay.getDay() === 0 && targetDate.getDate() < 2) {
      weeksSince = 52
    } else {
      console.log(weeksSince < 1)
      weeksSince < 1 ? weeksSince++ : weeksSince
    }
  } else {
    weeksSince++
  }

  if (targetDate.getMonth() === 11) {
    if (targetDate.getDate() > 29 && (lastDay.getDay() < 3 && lastDay.getDay() > 0)) {
      weeksSince = 1
    } else if (targetDate.getDate() > 27 && lastDay.getDay() === 4) {
      weeksSince = 53
    } else if (targetDate.getDate() > 28 && lastDay.getDay() === 3) {
      weeksSince = leapYear(targetDate.getYear()) ? 53 : 1
    } else if (targetDate.getDate() > 26 && lastDay.getDay() > 4) {
      weeksSince = 52
    }
  }
  weeksSince = Math.floor(weeksSince)
  console.log(weeksSince)
  console.log(date)
  return weeksSince;
}

getCalendarWeek('1995-12-31') //52
// getCalendarWeek('2017-01-02'); //1
// getCalendarWeek("2016-12-26"); //52
getCalendarWeek("2016-12-25"); //51
// getCalendarWeek("2017-01-01"); //52
// getCalendarWeek("2018-12-24"); //52
// getCalendarWeek("2018-12-31"); //1
// getCalendarWeek("2019-01-01"); //1
// getCalendarWeek("2016-02-29"); //9
// getCalendarWeek("2015-12-29"); //53
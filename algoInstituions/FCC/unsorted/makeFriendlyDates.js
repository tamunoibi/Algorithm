const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December",
];
/**
 *
 * @param {Number} num - date of the month. A number from 1 to 31
 * @returns the ordinal version of the number. Example 1 returns 1st
 */
function makeOrdinals(num) {
  switch (num) {
    case 1:
    case 21:
    case 31:
      return `${num.toString()}st`;
    case 2:
    case 21:
      return `${num.toString()}nd`;
    case 3:
    case 23:
      return `${num.toString()}rd`;
    default:
      return `${num.toString()}th`;
  }
}

function monthAndDAy(d) {
    // console.log(typeof d, 'me');
/**TODO: when I console typeof d it returns string. it is supposed to be a date object
 * this is why I get error d.getMonth is not a function because d.getMonth is undefined console.log(d.getMonth)
 * how did the date object convert to a regular string
 */

  return `${months[d.getMonth()]} ${makeOrdinals(d.getDate())}`;
//   return months[d.getMonth()] + '' + makeOrdinals(d.geDate());
};

function fullDate(d) {
    console.log(monthAndDAy(`${d}, ${d.getFullYear()}`, 'mei') );
  return monthAndDAy(`${d}, ${d.getFullYear()}`);
  //   return monthAndDAy(d + ", " + d.getFullYear());
}
function makeFriendlyDates(arr) {
  const currentYear = new Date().getFullYear();
  const start = new Date(Date.parse(arr[0]));
  const end = new Date(Date.parse(arr[1]));
  const yearInMs = 31536000000;

  //if start and end are the same date
  if (end - start === 0) {
    // console.log(1)
    return [fullDate(start)];
  };

  //current year and same month
  if (
    start.getFullYear() === currentYear &&
    start.getMonth() === end.getMonth()
  ) {
    // console.log(2)
    return [monthAndDAy(start), makeOrdinals(end.getDate())];
  }

  //current year and less than one year apart
  if (
    start.getFullYear() === currentYear &&
    end - start < yearInMs
  ) {
    // console.log(3)
    return [fullDate(start), monthAndDAy(end)];
  }
  //not current year but less than a year apart
  if (end - start < yearInMs) {
    // console.log(4)
    return [fullDate(start), monthAndDAy(end)];
  } 

  // Dates are a year or more apart
  if (end - start >= yearInMs) {
    // console.log(5)
    return [fullDate(start), fullDate(end)];
  }
}
makeFriendlyDates(["2016-07-01", "2016-07-04"]);

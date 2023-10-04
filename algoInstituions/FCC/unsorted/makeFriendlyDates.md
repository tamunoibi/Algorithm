makeFriendlyDates
QUESTION:
The friendly display should use months names instead of numbers and ordinal dates instead of 
dates instead of cardinal dates(1st instead of 1)

Do not display information that is redundant or that can be inferred by the user. If the date
range ends in less than a year from when it begins, do not display the ending year. 

Additionally, if the date range begins in the current year (i.e that is it is currently the year 2016) and it ends within one year, the year should not be displayed at the beginning of the friendly date range.

If the range ends in the same month that it begins, do not display the ending year or month
Example:
makeFriendlyDates(['2016-07-01', '2016-07-04']) should return ['July 1st', '4th']
makeFriendlyDates(['2016-07-01', '2018-07-04']) should return ['July 1st, 2016',  'July 4th, 2018']




EXPLANATION
05 --> May                             (month name instead of number)
3  --> 3rd                             (3rd is ordinal date us this instead of 3)
'2016-07-01' --> 'July 1st, 2016'      (Month date, year)


1. ['2016-07-01', '2017-08-03'] --> ['July 1st, 2016', 'July 3rd, 2017']

2. ['2016-07-01', '2016-08-03'] --> ['July 1st',  'August 3rd']
   (the range ends in same year that as date we are in. As the time of writing this it is 2021 but the example uses 2016 so assume we are in 2016. I do not display the starting year because it is starting at the current year and still ending at the current year. so u just say March 30 - June 1st)

3. ['2030-05-01', '2030-05-05'] --> ['May 1st 2030', '5th']
   (the range ends in the same year and month that it begins, I do not display the ending year or month because once I say starting May 4th, 2030 - 5th u already know it is still May  2030. Note that I displayed the starting year since the starting year is not the current year)

SOLUTION
  Date.parse(arr[0]);
  this returns the milliseconds from 12am midnight January 1st 1970. 
  The parse method is a method of the date object we pass it a string and it gives us the number of ms since jan 1st, 1970.
  Date.parse('2016-07-01') returns 1467331200000

  const start =  new Date(Date.parse(arr[0])) 
  new Date(1467331200000) = 2016-07-01T00:00:00.000Z
  We are instantiating a new date object. With the keyword 'new Date()'. 
  So we create a date object. This is not just a string but a date object provided by js and it so now I have access to all this cool date and time methods that we would need later on.
  You can see that 'start' is an object by `console.log(start)`

 const yearInMs = 31536000000;
  This is exactly one year in ms. We use this to check if it is within one year

  const currentYear = new Date().getFullYear();
  This is returns the current year. We use this to check if it is the current year.

  d.getMonth()
  This returns the numerical value of the month. Example: 6 means it is July. Js starts at 0, so January is 0 and February is 1. That is why July is 6 while when human counts july is 7
  console.log(new Date(1467331200000).getMonth() returns 6
  months[d.getMonth()];  months[6]
  That is accessing the array item at 6th index

d.getDate()
This returns the day of the month. Example: 1 means it is the first day of the month
console.log(new Date(1467331200000).getDate() returns 1
makeOrdinals(d.getDate())
makeOrdinals(1) returns 1st

`${months[d.getMonth()]} ${makeOrdinals(d.getDate())}`
this returns `July 1st`
)


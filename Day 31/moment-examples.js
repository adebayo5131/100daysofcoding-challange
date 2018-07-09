//www.momentjs.com
//install npm install moment@2.22.2 --save
//https://www.epochconverter.com/

var moment = require('moment')


var timeNow = moment();

/* console.log(timeNow.format());

console.log(timeNow.format('X'));
console.log(timeNow.format('x'));
console.log(timeNow.valueOf()); */

var timeStamp = 1530811352065;
var timestampmoment = moment.utc(timeStamp);

console.log(timestampmoment.local().format('hh:mm a'))

/* 
/* timeNow.subtract(1, 'year');

console.log(timeNow.format()) */

/* console.log(timeNow.format('MMM Do YYYY, h:mma')); //1:02pm */

//Unix TimeStamp


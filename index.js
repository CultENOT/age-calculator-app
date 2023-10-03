const moment = require("moment/moment");

const ourDate = moment('20000930');
const currentDate = moment()
let result = currentDate.diff(ourDate, 'M')
console.log(ourDate, currentDate, result)

// function diffInDate (ourDate) {
//     const ourDate = moment('20230930');
//     const currentDate = moment()
// }
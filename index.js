const moment = require("moment/moment");

const year = document.querySelector('calculator-days > input')
const month = document.querySelector('calculator-months > input')
const day = document.querySelector('calculator-years > input')
const currentDate = {
    year: +moment().format('YYYY'), 
    month: +moment().format('MM'), 
    day: +moment().format('DD')
}
const ourDate = {year, month, day}

const leapYear = [2028, 2024, 2020, 2016, 2012, 2008, 2004, 2000, 1996, 1992, 1988, 1984, 1980, 1976, 1972, 1968, 1964, 1960, 1956, 1952, 1948, 1944, 1940, 1936, 1932, 1928, 1924, 1920, 1916, 1912, 1908, 1904]
const daysInEveryMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

function myArr () {
    let arrOfInterval = []
    let stepYear = ourDate.year
    for (let i = stepYear; i < currentDate.year; i++) {
        arrOfInterval.push(stepYear)
        stepYear++
    }    
    const result = arrOfInterval.filter(element => leapYear.includes(element));
    return result
}

function calcDiffInDays () {
    let diffOfMonth = currentDate.month - ourDate.month
    if (diffOfMonth < 0) diffOfMonth += 12

    let monthInDays = 0
    for (let i = currentDate.month + 1; diffOfMonth > 0; diffOfMonth--, i++) {
        if (i === 12) {
            i = 0
        }
        monthInDays += daysInEveryMonth[i]
    }

    const diffInDays = currentDate.day - ourDate.day;
    if (diffInDays < 0) diffOfMonth += 30

    let result = (myArr.length * 366) + ((currentDate.year - ourDate.year - myArr.length) * 365) + monthInDays + diffInDays
    console.log(result)
}

calcDiffInDays()
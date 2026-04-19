function isLeapYear(year){
    if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
        return `${year} is a leap year.`
}
        return `${year} is not a leap year.`
}

const year = 2024;
const result = isLeapYear(year)
console.log(result);
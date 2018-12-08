window.date_utils = {
    months: ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"],
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
        18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    years: [2018, 2019, 2020, 2021, 2022]
};

date_utils.parseDate = function (day, month, year) {
    var month = date_utils.months.indexOf(month) + 1;
    var year = year.substring(2);
    var date = `${day}.${month}.${year}`;
    return date;
}
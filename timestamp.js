var getDateFromInput = function (input) {
    var set = new Set(input.split(' ').map((el) => el.replace(',', '')));
    var inputDate = {};

    if (set.size > 1) { // natural
        for (let item of set.values()) {
            if (item.length === 4 && isNaN(item) === false) inputDate.year = parseInt(item);
            else if (isNaN(item)) inputDate.month = item;
            else inputDate.day = parseInt(item);
        }
    } else if (set.size === 1) { // unix
        for (let item of set.values()) inputDate.unix = parseInt(item);
        
    } else { // invalid
        return null;
    }

    return inputDate;
};

var months = (['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
'September', 'October', 'November', 'December']);

var getMonthNumber = (month) => {
    var lowerMonths = months.map((monthName) => monthName.toLowerCase());
    return lowerMonths.indexOf(month.toLowerCase());
}

var getMonthName = (monthNumber) => {
    if (monthNumber < 0 || monthNumber > 11) return null;
    return months[monthNumber];
};

module.exports = {
    getDateFromInput,
    getMonthNumber,
    getMonthName
}
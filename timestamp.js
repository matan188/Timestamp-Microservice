// PARSE INPUT FUNCTIONS
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

// MONTHS FUNCTIONS
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

// JSON DATE OBJECT
var epochToJson = (inputDate) => {
    var epoch = new Date(inputDate.unix * 1000);
    if (isNaN(epoch)) {

        return { natural: null, unix: null };
    } else {

        var year = epoch.getFullYear();
        var month = epoch.getMonth();
        var day = epoch.getDate();

        return {
            natural: `${getMonthName(month)} ${day}, ${year}`,
            unix: inputDate.unix
        };
    }
};

var naturalToJson = (inputDate) => {
    var date = new Date(parseInt(inputDate.year),
        getMonthNumber(inputDate.month),
        parseInt(inputDate.day));
    
    if (isNaN(date)) {
        return { natural: null, unix: null };
    } else {
        //capitalize first letter
        var month = getMonthName(getMonthNumber(inputDate.month)); 

        return {
            natural: `${month} ${inputDate.day}, ${inputDate.year}`,
            unix: date / 1000
        };
    }
};

var getTimestamp = (dateString) => {
    var inputDate = getDateFromInput(decodeURI(dateString));

    if ('unix' in inputDate) { // Epoch to Natural
        return epochToJson(inputDate);
    } else if ('day' in inputDate && 'year' in inputDate && 'month' in inputDate) { // Natural to Epoch
        return naturalToJson(inputDate);
    }

    return {
        natural: null,
        unix: null
    };
}

module.exports = {
    getDateFromInput,
    getMonthNumber,
    getMonthName,
    epochToJson,
    naturalToJson,
    getTimestamp
}
var getDateFromInput = function (input) {
    var set = new Set(input.split(' ').map((el) => el.replace(',', '')));
    var inputDate = {};
    if (set.size > 1) {
        for (let item of set.values()) {
            if (item.length === 4 && isNaN(item) === false) inputDate.year = item;
            else if (isNaN(item)) inputDate.month = item;
            else inputDate.day = item;
        }
    } else if (set.length === 1) {
        inputDate.unix = set
    } else {
        return null;
    }

    console.log("end");
    return inputDate;
};

module.exports = {
    getDateFromInput
}
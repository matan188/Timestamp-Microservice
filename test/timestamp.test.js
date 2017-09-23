const expect = require('expect');

const ts = require('../timestamp');




describe('Test months functions', () => {
    // getMonthName()
    it('should return January', () => {
        expect(ts.getMonthName(0)).toBe('January');
    });

    it('should return December', () => {
        expect(ts.getMonthName(11)).toBe('December');
    });

    it('should return null', () => {
        expect(ts.getMonthName(12)).toBe(null);
    });

    // getMonthNumber()
    it('Test with alternating case', () => {
        expect(ts.getMonthNumber('decEmbEr')).toBe(11);
    });

    it('Test with lower case', () => {
        expect(ts.getMonthNumber('february')).toBe(1);
    });

    it('Test with alternating case', () => {
        expect(ts.getMonthNumber('juNE')).toBe(5);
    });

    it('None valid month', () => {
        expect(ts.getMonthNumber('incorrect')).toBe(-1);
    });
});



describe('getDateFromInput', () => {
    var dateJson = {
        day: 1, 
        month: 'December',
        year: 2013 
    };

    var unixJson = {
        unix: 123453433
    };

    it('unix', () => {
        expect(ts.getDateFromInput('123453433')).toEqual(unixJson);
    });

    it('Format "month day, year"', () => {
        expect(ts.getDateFromInput('December 1, 2013'))
            .toEqual(dateJson);
    });
    
    it('Format "month day year"', () => {
        expect(ts.getDateFromInput('December 1 2013'))
            .toEqual(dateJson);
    });

    it('Format "year day month"', () => {
        expect(ts.getDateFromInput('December 1 2013'))
            .toEqual(dateJson);
    });

});
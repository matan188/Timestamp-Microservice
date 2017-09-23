const expect = require('expect');

const ts = require('../timestamp');


describe("getDateFromInput", () => {
    it('should create json with correct day, month, year', () => {
        expect(ts.getDateFromInput('December 1, 2013'))
            .toEqual({
                day: '1', 
                month: 'December',
                year: '2013' 
            });
            
    }); 
});
import events from '../events';

describe('base : events', () => {

    describe('normaliseElements', () => {
        it('should return an array', () => {
            expect(events.normaliseElements({event:''})).to.deep.equal([{event:''}]);
            expect(events.normaliseElements([{event:''}])).to.deep.equal([{event:''}]);
            expect(events.normaliseElements([])).to.deep.equal([]);
            expect(events.normaliseElements('string')).to.deep.equal([]);
        });
    });

    describe('bind', () => {
        it('should throw error if member of array is not an object', () => {
            expect(function() {
                events.bind(['string'], {});
            }).to.throw('element is not an object');
        });

        it('should throw error if member of array is not a DOM object', () => {
            expect(function() {
                events.bind([{}], {});
            }).to.throw('element is not a DOM object');
        });
    });
});
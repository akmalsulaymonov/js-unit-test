const googleSearch = require('./script');

dbMock = [
    'dogs.com',
    'cheesepuff.com',
    'disney.com',
    'dogpictures.com',
] 

describe('googleSearch', () => {
    test('it is a silly test', () => {
        expect('hello').toBe('hello');
    });
    
    test('is searchng google', () => {
        expect(googleSearch('test...', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dogs.com', 'dogpictures.com'])
    });
    
    it('works with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    });
    
    it('does not return more than 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3)
    });
})
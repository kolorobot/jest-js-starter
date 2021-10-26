import { randomArray } from './random-array';

describe('Random Array', () => {
    test('generates 3 unique numbers between 0 and 3', () => {
        expect(randomArray(3, 0, 3).sort()).toEqual([0, 1, 2]);
    });

    test('returns `undefined` when `max - min < num`', () => {
        expect(randomArray(10, 0, 9)).toEqual(undefined);
    });
});

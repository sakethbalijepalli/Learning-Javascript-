const { concat, concatArrays, concatStrings } = require('./ConcatTest');

test('returns the concatenated string', () => {
    expect(concat('abc', 'def')).toBe('abcdef');
});

test('returns the concatenated array', () => {
    expect(concatArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
});

test('returns the concatenated strings from multiple arguments', () => {
    expect(concatStrings('a', 'b', 'c')).toBe('abc');
});
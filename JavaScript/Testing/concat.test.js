const concat = require('./ConcatTest');

test('returns the concatenated string', () => {
    expect(concat('abc', 'def')).toBe('abcdef');
})
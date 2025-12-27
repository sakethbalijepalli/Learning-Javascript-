function concat(str1, str2) {
    return str1 + str2;
}

function concatArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

function concatStrings(...args) {
    return args.join('');
}

module.exports = { concat, concatArrays, concatStrings };
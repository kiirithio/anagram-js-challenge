function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^A-Za-z]/g).toLowerCase().split('').sort().join()
}   

console.log(anagrams('Dormitory','dirtyRoom'))
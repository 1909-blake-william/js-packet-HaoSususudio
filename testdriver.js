function reverseStr(someStr) {
    outStr = '';
    for (index = someStr.length - 1; index >= 0; index -= 1) {
        outStr += someStr.charAt(index);
    }
    return outStr;
}
console.log(reverseStr('yessir'));

let reverseStrArrow = (someStr) => {
    outStr = '';
    for (index = someStr.length - 1; index >= 0; index -= 1) {
        outStr += someStr.charAt(index);
    }
    return outStr;
}
console.log(reverseStrArrow('nosir'));
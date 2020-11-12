const length = (text) => {
    if(typeof text === 'string') {
        return text.length;
    } else {
        return -1;
    }
}

const charCount = (text, char) => {
    let obj = {};
    if(typeof text === 'string' && typeof char === 'string' && char.length == 1) {
        for(let char of text) {
            obj.hasOwnProperty(char) ? obj[char]++ : obj[char] = 1;
        }
        return obj[char];
    } else {
        return false;
    }

}

module.exports = {
    length,
    charCount
}
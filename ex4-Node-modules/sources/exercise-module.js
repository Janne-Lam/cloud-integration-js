const CharCalc = (text, char) => {
    let len = text.length;
    let obj = {};
    for(let i = 0; i < len; i++) {
        obj[text[i]] ? obj[text[i]] += 1 : obj[text[i]] = 1;
    }
    
    for(let value of Object.entries(obj)){
        console.log(value);

    }
}

module.exports.CharCalc = CharCalc;
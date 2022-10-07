function lettersOccurence(s) {
    let res = {}; 
    if (s.length === 0) {
        return res; 
    }
    for (var i = 0; i < s.length; i++) {
        res[s[i]] = ((res[s[i]]) ? res[s[i]] : 0) + 1;
        }
    return res;
}

module.exports = lettersOccurence;
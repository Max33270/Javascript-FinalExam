function inverseString(s) {
    if (s==='') {
    } 
    let res = [];
    let init = "";
    let reverseStr = "";
    for (i = 0; i < s.length; i++) {
       if (s[i] == " ") {
           res.push(init);
           init = "";
       } else {
           init += s[i];
       }
     }
    if (init) {  
    res.push(init);
    } 
    for (i = res.length - 1; i >= 0; i--) {
         reverseStr += res[i] + " ";
    }
    return reverseStr;
}

module.exports = inverseString;
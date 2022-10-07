function manipDate(d1, d2) {
    let res = {}; 
    let startDate = d2;
    let date1 = new Date(d1);
    let date2 = new Date(startDate);
    let timeInMilisec = date2.getTime() - date1.getTime();
    let daysBetweenDatesVal = Math.abs((timeInMilisec / (1000 * 60 * 60 * 24)));
    res["daysBetweenDates"] = daysBetweenDatesVal
    var year1 = d1.getFullYear(); 
    var year2 = d2.getFullYear(); 
    if (year1 % 400 === 0 || (year1 % 4 === 0 && year1 % 100 !== 0)) {
        res["isFirstLeap"] = true; 
    } else {
        res["isFirstLeap"] = false; 
    }
    if (year2 % 400 === 0 || (year2 % 4 === 0 && year2 % 100 !== 0)) {
        res["isSecondLeap"] = true; 
    } else {
        res["isSecondLeap"] = false; 

    }
    if (Object.values(res).includes(NaN)) {
        return "impossible";
    }
    return res; 
}
module.exports = manipDate;

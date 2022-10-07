function manipArray(tab1) {
    let d = [];
    let final = []; 
    let mutlipliedBy2 = []; 
    let moreThan5 = []; 
    let minusBy5 = []; 
    if (tab1.length === 0) {
        return d;
    } else {
        for (let i = 0; i < tab1.length; i++) {
            if (Number.isInteger(tab1[i])) {
                mutlipliedBy2.push(tab1[i]*2); 
                minusBy5.push(tab1[i]-5); 
                if (tab1[i]>5) {
                    moreThan5.push(tab1[i]); 
                }
            } 
        }
        final.push(mutlipliedBy2, minusBy5, moreThan5); 
        return final; 
    }
} 
module.exports = manipArray;

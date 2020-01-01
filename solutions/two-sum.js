function twoSum(numArray, sum) {
    const pairs = [];
    const hashtable = [];

    for (let i = 0; i < numArray.length; i++) {
        let currNum = numArray[i];
        let counterPart = sum - currNum;
        if (hashtable.indexOf(counterPart) !== -1) {
            pairs.push([currNum, counterPart]);
        }
        hashtable.push(currNum);
    }
    return pairs;
}

module.exports = twoSum;
function getMean(array) {
    let sum = array.reduce((a, b) => a + b);
    return sum / array.length;
}

function getMedian(array) {
    const lengthOfArray = array.length;

    if (lengthOfArray % 2 !== 0) {
        return array[Math.floor(lengthOfArray / 2)];
    }

    const middle = Math.floor(lengthOfArray / 2);
    return (array[middle - 1] + array[middle]) / 2;
}

function getMode(array) {
    let modes = [];
    let maxFrequency = 0;
    const modeObj = {};

    array.forEach((num) => {
        if (!modeObj[num]) modeObj[num] = 0;
        modeObj[num]++;
    });

    for (let num in modeObj) {
        if (modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        } else if (modeObj[num] === maxFrequency) {
            modes.push(num);
        }
    }

    if (modes.length === Object.keys(modeObj).length) {
        modes = [];
    }

    return modes;
}

function meanMedianMode(array) {
    array.sort();
    const mean = getMean(array);
    const median = getMedian(array);
    const mode = getMode(array);
    return { mean, median, mode }
}

module.exports = meanMedianMode;
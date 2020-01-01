const SolutionNotFoundError = require('../errors/solution.error');
const InvalidParameterError = require('../errors/invalid-parameter');
const solutions = {};

const result = async (solution, options) => {
    let data = [];
    if (!solutions[solution]) {
        try {
            const fn = require(`../solutions/${solution}.js`);
            solutions[solution] = fn;
        } catch (e) {
            throw new SolutionNotFoundError(`Functionality for '${solution}' does not exist.`);
        }
    }

    switch (solution) {
        case 'fizzbuzz':
            data = _fizzbuzz(solution, options);
            break;
        case 'caeser-cipher':
            data = _caeserCipher(solution, options);
            break;
        case 'harmless-ransom-note':
            data = _harmlessRansomNote(solution, options);
            break;
        case 'palindrome':
            data = _palindrome(solution, options);
            break;
        case 'reverse-words':
            data = _reverseWords(solution, options);
            break;
        case 'binary-search':
            data = _binarySearch(solution, options);
            break;
        case 'bubble-sort':
            data = _bubbleSort(solution, options);
            break;
        case 'merge-sort':
            data = _mergeSort(solution, options);
            break;
        case 'mean-median-mode':
            data = _meanMedianMode(solution, options);
            break;
        case 'max-stock-profit':
            data = _maxStockProfit(solution, options);
            break;
        case 'reverse-array':
            data = _reverseArray(solution, options);
            break;
        case 'two-sum':
            data = _twoSum(solution, options);
            break;
        case 'sieve-of-eratosthenes':
            data = _sieveOfEratosthenes(solution, options);
            break;
        case 'fibonacci-memoized':
            data = _fibonacciMemoized(solution, options);
            break;
        case 'factorial':
            data = _factorial(solution, options);
            break;
        case 'anagrams':
            data = _anagrams(solution, options);
            break;
    }

    return data;
};
function _anagrams(solution, { phrase1, phrase2 }) {
    if(!phrase1 || !phrase2){
        throw new InvalidParameterError('Invalid Parameters. \'phrase1\' and \'phrase2\' properties are required.');
    }
    return solutions[solution](phrase1, phrase2);
}

function _fizzbuzz(solution, { num }) {
    if (!num) {
        throw new InvalidParameterError('Invalid Parameters. \'num\' property is required.');
    }
    return solutions[solution](num);
}

function _factorial(solution, { num }) {
    if (!num) {
        throw new InvalidParameterError('Invalid Parameters. \'num\' property is required.');
    }
    return solutions[solution](num);
}

function _caeserCipher(solution, { text, num }) {
    if (!text || !num) {
        throw new InvalidParameterError('Invalid Parameters. \'text\' and \'num\' properties are required.');
    }
    return solutions[solution](text, num);
}

function _harmlessRansomNote(solution, { note, magazine }) {
    if (!note || !magazine) {
        throw new InvalidParameterError('Invalid Parameters. \'note\' and \'magazine\' properties are required.');
    }
    return solutions[solution](note, magazine);
}

function _palindrome(solution, { word }) {
    if (!word) {
        throw new InvalidParameterError('Invalid Parameters. \'word\' property is required.');
    }
    return solutions[solution](word);
}

function _reverseWords(solution, { word }) {
    if (!word) {
        throw new InvalidParameterError('Invalid Parameters. \'word\' property is required.');
    }
    return solutions[solution](word);
}

function _binarySearch(solution, { numArray, key }) {
    if (!numArray || !key) {
        throw new InvalidParameterError('Invalid Parameters. \'numArray\' and \'key\' properties are required.');
    }
    return solutions[solution](numArray, key);
}

function _bubbleSort(solution, { numArray }) {
    if (!numArray) {
        throw new InvalidParameterError('Invalid Parameters. \'numArray\' property is required.');
    }
    return solutions[solution](numArray);
}

function _mergeSort(solution, { numArray }) {
    if (!numArray) {
        throw new InvalidParameterError('Invalid Parameters. \'numArray\' property is required.');
    }
    return solutions[solution](numArray);
}

function _meanMedianMode(solution, { numArray }) {
    if (!numArray) {
        throw new InvalidParameterError('Invalid Parameters. \'numArray\' property is required.');
    }
    return solutions[solution](numArray);
}

function _maxStockProfit(solution, { priceArray }) {
    if (!priceArray) {
        throw new InvalidParameterError('Invalid Parameters. \'numArray\' property is required.');
    }
    return solutions[solution](priceArray);
}

function _reverseArray(solution, { numArray }) {
    if (!numArray) {
        throw new InvalidParameterError('Invalid Parameters. \'numArray\' property is required.');
    }
    return solutions[solution](numArray);
}

function _twoSum(solution, { numArray, sum }) {
    if (!numArray || !sum) {
        throw new InvalidParameterError('Invalid Parameters. \'numArray\' and \'num\' properties are required.');
    }
    return solutions[solution](numArray, sum);
}

function _sieveOfEratosthenes(solution, { num }) {
    if (!num) {
        throw new InvalidParameterError('Invalid Parameters. \'num\' property is required.');
    }
    return solutions[solution](num);
}

function _fibonacciMemoized(solution, { position }) {
    if (!position) {
        throw new InvalidParameterError('Invalid Parameters. \'position\' property is required.');
    }
    return solutions[solution](position);
}

module.exports = {
    result
};
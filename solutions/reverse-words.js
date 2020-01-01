function reverseWords(string) {
    const wordsArr = string.split(' ');
    const reversedWordsArr = [];

    wordsArr.forEach(word => {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedWordsArr.push(reversedWord);
    });
    return reversedWordsArr.join(' ');
}

module.exports = reverseWords;

// function reverseWords2(string) {
//     const reversedWords = string
//         .split(' ')
//         .map((word) => {
//             return word.split('').reverse().join('');
//         });
//     return reversedWords.join(' ');
// }
// const result2 = reverseWords2('this is a string of words');
// console.log('Reversed 2 : ', result2);
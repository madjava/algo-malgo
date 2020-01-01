function isPalindrome(string) {
    let palindrome = false;
    string = string.toLowerCase();
    let charactersArr = string.split('');
    const validCharacters = 'abcdefghijklmonpqrstuvwxyz'.split('');
    charactersArr = charactersArr.filter(c => validCharacters.includes(c));

    if (charactersArr.join('') === charactersArr.reverse().join('')) {
        palindrome = true;
    }

    return palindrome;
}

module.exports = isPalindrome;
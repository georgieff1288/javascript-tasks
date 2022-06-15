function sortingSentence(str) {
    let words = str.split(' ');
    let regex = /^[A-Za-z0-9 ]*$/gm;
    let test = regex.test(str);
    if (str.startsWith(' ') || str.endsWith(' ') || words.length < 1 || words.length > 9 || !test) {
        return 'Please enter a valid string'
    }
    let sortedWords = [];
    for (word of words) {
        let index = word.charAt(word.length - 1) - 1;
        sortedWords[index] = word.slice(0, -1);
    }

    return sortedWords.join(' ');
}

console.log(sortingSentence('is2 sentence4 This1 a3'));
console.log(sortingSentence('Myself2 Me1 I4 and3'));
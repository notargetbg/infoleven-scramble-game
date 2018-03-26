export const shuffle = (string) => {
    return string.split('').sort(() => 0.5 > Math.random()).join('');
};

export const sortByScore = (users) => {
    return users.sort((a, b) => {
        return a.score < b.score;
    });
}

export const calculateScore = (words, answers) => {
    const correctAnswers = words.filter((correctWord, index) => {
        return correctWord === answers[index];
    });
    return correctAnswers.length * 5;
}
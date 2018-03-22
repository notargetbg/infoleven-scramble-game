export const shuffle = (string) => {
    return string.split('').sort(() => 0.5 > Math.random()).join('');
};
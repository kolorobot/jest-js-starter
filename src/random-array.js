const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const randomArray = (num, min, max) => {
    if (max - min < num) {
        return undefined;
    }
    const uniqueRandomNumbers = new Set();
    while (uniqueRandomNumbers.size < num) {
        uniqueRandomNumbers.add(randomBetween(min, max));
    }
    return [...uniqueRandomNumbers];
};

export {randomArray};

let powers = [];
const Q = 12000017;
const BASE = 26;

/**
 * @param {string} S
 * @return {string}
 */
const longestDupSubstring = (text) => {
    powers = [];
    for (let i = 0; i < text.length; i++) {
        powers.push(i === 0 ? 1 : (powers[i - 1] * BASE) % Q);
    }

    let left = 0;
    let right = text.length;
    let longestPattern = '';

    while (left + 1 < right) {
        const length = Math.floor((left + right) / 2);
        const patternOfLength = findDuplicatePattern(text, length);

        if (patternOfLength.length) {
            longestPattern = patternOfLength;
            left = length;
        } else {
            right = length;
        }
    }

    return longestPattern;
};

const findDuplicatePattern = (text, patternLength) => {
    let hash = 0;
    for (let i = 0; i < patternLength; i++) {
        hash = (hash * BASE + charCode(text[i])) % Q;
    }

    const hashes = new Map();
    hashes.set(hash, [0]);

    for (let i = 1; i <= text.length - patternLength; i++) {
        hash = (((hash - powers[patternLength - 1] * charCode(text[i - 1])) % Q) + Q) % Q;
        hash = (hash * BASE + charCode(text[i - 1 + patternLength])) % Q;

        const hashPositions = hashes.get(hash);
        if (hashPositions) {
            const slice = text.slice(i, i + patternLength);
            for (const hashPosition of hashPositions) {
                if (slice === text.slice(hashPosition, hashPosition + patternLength)) {
                    return slice;
                }
            }

            hashPositions.push(i);
        } else {
            hashes.set(hash, [i]);
        }
    }

    return '';
};

const charCodes = {};
const charCode = (char) => {
    if (!charCodes[char]) {
        charCodes[char] = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    return charCodes[char];
};

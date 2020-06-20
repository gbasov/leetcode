/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = (n, k) => {
    const factorials = [1, 1];
    for (let i = 2; i < n; i++) {
        factorials.push(i * factorials[i - 1]);
    }

    let availableDigits = [];
    for (let i = 1; i <= n; i++) {
        availableDigits.push(i);
    }

    let offset = 0;
    let permutation = '';

    for (let i = 1; i <= n; i++) {
        const sizeOfGroup = factorials[n - i];
        const numberOfGroupsBelowK = Math.floor((k - 1 - offset) / sizeOfGroup);
        const firstDigitInGroup = availableDigits.splice(numberOfGroupsBelowK, 1);

        offset += sizeOfGroup * numberOfGroupsBelowK;

        permutation = `${permutation}${firstDigitInGroup}`;
    }

    return permutation;
};

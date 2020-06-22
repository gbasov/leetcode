/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
    let singles = 0;
    let doubles = 0;

    for (num of nums) {
        singles = (~doubles) & (singles ^ num);
        doubles = (~singles) & (doubles ^ num);
    }

    return singles;
};

// We're creating some kind of a loop where every incoming bit comes to singles first
// When it comes second time it's dropped to doubles
// When it comes thrird time it's removed from doubles
// This way we unsure that all the bits that occured three times are sifted.
// Basically, we don't care with which numbers bits come, we just count bit occurances.

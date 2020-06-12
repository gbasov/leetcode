class RandomizedSet
{
    constructor()
    {
        this.arr = [];
        this.map = new Map();
    }

    /**
     * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
        if (this.map.has(val)) {
            return false;
        }

        this.arr.push(val);
        this.map.set(val, this.arr.length - 1);
        return true;
    }

    /**
     * Removes a value from the set. Returns true if the set contained the specified element. 
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
        const index = this.map.get(val);
        
        if (index === undefined) {
            return false;
        }

        const lastItem = this.arr.pop();

        if (index < this.arr.length) {
            this.arr[index] = lastItem;
            this.map.set(lastItem, index);
        }

        this.map.delete(val);
        return true;
    }

    /**
     * Get a random element from the set.
     * @return {number}
     */
    getRandom() {
        if (!this.arr.length) {
            throw new Error('Set is empty');
        }

        return this.arr[ Math.floor( Math.random() * this.arr.length ) ];
    }
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

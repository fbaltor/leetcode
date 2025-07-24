class RandomizedSet {
  map: Map<number, number>;
  array: Array<number>;

  constructor() {
    this.map = new Map<number, number>();
    this.array = new Array<number>();
  }

  insert(val: number): boolean {
    if (this.map.has(val)) return false;

    this.array.push(val);
    this.map.set(val, this.array.length - 1);

    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;

    if (this.map.get(val) == this.array.length - 1) {
      this.array.pop();
    } else {
      const vacancyIndex = this.map.get(val) as number;

      const moved = this.array.pop() as number;
      this.array[vacancyIndex] = moved;
      this.map.set(moved, vacancyIndex);
    }

    this.map.delete(val);
    return true;
  }

  getRandom(): number {
    return this.array[this._getRandomInt(this.array.length)];
  }

  _getRandomInt(max: number): number {
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * maxFloored);
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

var obj = new RandomizedSet();
var param_1 = obj.insert(1);
var param_1 = obj.insert(2);
var param_1 = obj.insert(3);
var param_2 = obj.remove(2);
var param_3 = obj.getRandom();

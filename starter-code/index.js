class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    function compareFunction (a, b)  {
      if (a > b) {
        return 1;
      }
      else if (b > a) {
        return -1;
      }
      else {
        return 0;
      }
    }
    this.items.sort(compareFunction)
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos]
    }
    throw new Error("OutOfBounds")
  }

  max() {
    if (this.items.length > 0) {
        return Math.max(...this.items)
    }
    throw new Error("EmptySortedList")
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items)
    }
    throw new Error("EmptySortedList")
  }

  sum() {
    let sum = this.items.reduce(function (a,b) {
      return a+b;
    }, 0)
    return sum
  }

  avg() {
    let avg =  this.items.reduce(function (a,b) {
      return a+b
    })
    return avg / this.items.length
  }
}

module.exports = SortedList;


import Books from "./Books"

let bookMap = new Map()
let bookPrice = 8
let total = 0

let kataPotter = {
  getTotalPrice: () => {
    total = bookMap.size === 0 ? 0 : 0
    let leftOverBooks = new Map(bookMap)
    let numberOfRemainingBooks = kataPotter.getNumberOfBooks(leftOverBooks)
    while (numberOfRemainingBooks > 0) {
      let numberOfUniqueBooks = kataPotter.getNumberOfUniqueBooks(leftOverBooks)
      let distinctBooks = new Set(leftOverBooks.keys())
      total = kataPotter.calculateDiscount(numberOfUniqueBooks, total)
      leftOverBooks = kataPotter.placeBookInSet(distinctBooks, leftOverBooks)
      numberOfRemainingBooks = kataPotter.getNumberOfBooks(leftOverBooks)
    }
    bookMap = kataPotter.resetMap()
    return total
  },

  calculateDiscount: (numberOfUniqueBooks, total) => {
    if (numberOfUniqueBooks === 2) {
      total += 2 * bookPrice * 0.95
    } else if (numberOfUniqueBooks === 3) {
      total += 3 * bookPrice * 0.9
    } else if (numberOfUniqueBooks === 4) {
      total += 4 * bookPrice * 0.8
    } else if (numberOfUniqueBooks === 5) {
      total += 5 * bookPrice * 0.75
    } else {
      total += bookPrice
    }
    return total
  },

  placeBookInSet: (distinctBooks, leftOverBooks) => {
    distinctBooks.forEach(i => {
      let amount = leftOverBooks.get(i)
      if (amount === 1) {
        leftOverBooks.delete(i)
      } else {
        leftOverBooks.set(i, amount - 1)
      }
    })
    return leftOverBooks
  },

  resetMap: () => new Map(),
  addBookToBookArray: chosenBooks => {
    let amount = 0
    if (bookMap.has(chosenBooks)) {
      amount = bookMap.get(chosenBooks)
    }
    bookMap.set(chosenBooks, amount + 1)
  },

  getNumberOfUniqueBooks: bookMap => bookMap.size,

  getNumberOfBooks: bookMap => {
    if (bookMap.size === 0) {
      return 0
    }
    let arraySum = []
    bookMap.forEach((value, key) => arraySum.push(value))
    return arraySum.reduce((i, j) => i + j)
  }
};

export default kataPotter

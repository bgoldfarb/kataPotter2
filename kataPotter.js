import {
  filter
} from "lodash";
import Books from "./Books";

let bookMap = new Map();
let bookPrice = 8;

let kataPotter = {
  getTotalPrice: () => {
    if (bookMap.size === 0) {
      return 0;
    }
    let leftOverBooks = new Map(bookMap);
    console.log("LeftOverBooks: ", leftOverBooks)
    let numberOfRemainingBooks = kataPotter.getNumberOfBooks(leftOverBooks);
    console.log("Number Of Remaining Books: ", numberOfRemainingBooks)
    let total = 0;

    while (numberOfRemainingBooks > 0) {
      let numberOfUniqueBooks = kataPotter.getNumberOfUniqueBooks(leftOverBooks);
      console.log("Number of unique books: ", numberOfUniqueBooks)
      if (numberOfUniqueBooks === 2) {
        total += 2 * bookPrice * 0.95;
      }
      else if(numberOfUniqueBooks === 3){
        total += 3 * bookPrice * 0.9;
      }
      else if(numberOfUniqueBooks === 4){
        total += 4 * bookPrice * 0.8;
      }
      else if(numberOfUniqueBooks === 5){
        total += 5 * bookPrice * 0.75;
      }
      else {
        total += bookPrice;
        console.log("The total is: ", total)
      }

      let distinctBooks = new Set(leftOverBooks.keys())
      console.log("Distinct books: ", distinctBooks)
      distinctBooks.forEach((i) => {
        let amount = leftOverBooks.get(i)
        console.log("The amount: ", i)
        if (amount === 1) {
          leftOverBooks.delete(i)
        } else {
          leftOverBooks.set(i, amount - 1)
        }
      })
      numberOfRemainingBooks = kataPotter.getNumberOfBooks(leftOverBooks);
    }
    bookMap = new Map();
    return total;
  },

  addBookToBookArray: chosenBooks => {
    let amount = 0;
    if (bookMap.has(chosenBooks)) {
      amount = bookMap.get(chosenBooks);
    }
    bookMap.set(chosenBooks, amount + 1);
  },

  getNumberOfUniqueBooks: bookMap => bookMap.size,

  getNumberOfBooks: bookMap => {
    if(bookMap.size === 0){
      return 0
    }
    let arraySum = [];
    bookMap.forEach((value, key) => arraySum.push(value));
    return arraySum.reduce((i, j) => i + j);
  }
};

export default kataPotter;
import {filter} from 'lodash'
import Books from './Books'

let bookMap = new Map()
let bookPrice = 8

let kataPotter = {

    getTotalPrice: () => {
        if(bookMap.size === 0){
            return 0
        }
        let numberOfBooks = kataPotter.getNumberOfBooks(bookMap)
        let numberOfUniqueBooks = kataPotter.getNumberOfUniqueBooks(bookMap)      
        if(numberOfUniqueBooks === 2){
            bookMap = new Map()
            return numberOfBooks * 8 * 0.95
        }
        bookMap = new Map()
        return numberOfBooks * bookPrice
    },

    addBookToBookArray: (chosenBooks) => {
        let amount = 0
        if(bookMap.has(chosenBooks)){
            amount = bookMap.get(chosenBooks)
        }
        bookMap.set(chosenBooks, amount+1)
    },

    getNumberOfUniqueBooks: (bookMap) => bookMap.size,

    getNumberOfBooks: (bookMap) => {
        let arraySum = []
        bookMap.forEach((value,key) => arraySum.push(value))
        return arraySum.reduce((i,j) => i+ j)
    }

}


export default kataPotter
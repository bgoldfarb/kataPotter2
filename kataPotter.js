import {filter} from 'lodash'
import Books from './Books'

let bookMap = new Map()
let bookPrice = 8

let kataPotter = {

    getTotalPrice: () => {

        if(bookMap.size === 0){
            return 0
        }
        let leftOverBooks = new Map(bookMap)
        let numberOfRemainingBooks = kataPotter.getNumberOfBooks(leftOverBooks)
        let numberOfUniqueBooks = kataPotter.getNumberOfUniqueBooks(leftOverBooks)    
        let total = 0  
        
            if(numberOfUniqueBooks === 2){
                total += numberOfRemainingBooks * bookPrice * 0.95
            }
            else{
                total += numberOfRemainingBooks * bookPrice
            }
        
        numberOfRemainingBooks = kataPotter.getNumberOfBooks(leftOverBooks)        
        bookMap = new Map()
        return total
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
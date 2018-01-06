import {filter} from 'lodash'
import Books from './Books'

let bookArray = []
let bookPrice = 8
let uniqueBooks = []

let kataPotter = {

    getTotalPrice: (bookArray) => {
        let numberOfBooks = kataPotter.getNumberOfBooks(bookArray)
        uniqueBooks = kataPotter.getUniqueBooks(bookArray)
        let numberOfUniqueBooks = kataPotter.getNumberOfUniqueBooks(uniqueBooks)        
        if(numberOfUniqueBooks === 2){
            return numberOfBooks * 8 * 0.95
        }
        return numberOfBooks * bookPrice
    },

    addBookToBookArray: (books, bookArray) => {
        bookArray.push(books)

    },

    getUniqueBooks: (bookArray) => bookArray.filter((a,b) =>  b == bookArray.lastIndexOf(a)),
    getNumberOfUniqueBooks: (uniqueBooks) => uniqueBooks.length,
    getNumberOfBooks: (bookArray) => bookArray.length

    


}


export default kataPotter
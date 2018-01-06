import {filter} from 'lodash'
import Books from './Books'

let bookArray = []


let kataPotter = {

    getTotalPrice: (bookArray) => {
        return bookArray.length * 8
    },

    addBookToBookArray: (books, bookArray) => {
        console.log(books)
        bookArray.push(books)

    }

    


}


export default kataPotter